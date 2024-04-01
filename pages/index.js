import { Component } from 'react';
import Script from 'next/script';
import 'es6-promise/auto';
import fetch from 'unfetch';
import cx from 'classnames';
import Page from '../components/page';
import { parseUA } from '../utils/platform';
import { chromeExtensionUrl, edgeExtensionUrl, firefoxExtensionUrl } from '../utils/extensions';

function getGithubDownloadLink(fileName, version) {
  fileName = fileName.replace('{version}', version.substr(1));
  return `https://github.com/buttercup/buttercup-desktop/releases/download/${version}/${fileName}`;
}

export default class extends Component {
  static async getInitialProps({ req }) {
    let userAgent = '';
    try {
      userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    } catch (err) {}
    return { userAgent };
  }

  constructor(props) {
    super(props);
    this.state = {
      version: null,
      googleAuthenticated: false,
      desktopDownloads: [],
      browserDownloads: []
    };
  }

  componentDidMount() {
    const ua = parseUA(this.props.userAgent);
    const isChrome = ua.browser.name === 'Chrome';
    const isFirefox = ua.browser.name === 'Firefox';
    const isEdge = ua.browser.name === 'Edge';
    const isLinux = ua.os.name !== 'Mac OS' && ua.os.name !== 'Windows';

    this.setState({
      desktopDownloads: [
        {
          icon: 'apple',
          title: 'macOS',
          primary: ua.os.name === 'Mac OS',
          fileName: 'Buttercup-mac-x64-{version}.dmg'
        },
        {
          icon: 'linux',
          title: "Linux (AppImage)",
          primary: isLinux,
          fileName: 'Buttercup-linux-x86_64.AppImage'
        },
        {
          icon: 'windows',
          title: 'Windows',
          primary: ua.os.name === 'Windows',
          fileName: 'Buttercup-win-x64-{version}-installer.exe'
        }
      ],
      browserDownloads: [
        {
          icon: 'chrome',
          title: 'Google Chrome',
          primary: isChrome,
          href: chromeExtensionUrl
        },
        {
          icon: 'firefox',
          title: 'Mozilla Firefox',
          primary: isFirefox,
          href: firefoxExtensionUrl
        },
        {
          icon: 'edge',
          title: 'Microsoft Edge',
          primary: isEdge,
          href: edgeExtensionUrl
        }
      ]
    });

    fetch('https://api.github.com/repos/buttercup/buttercup-desktop/tags')
      .then(res => res.json())
      .then(res => {
        this.setState({
          version: res[0].name
        });
      });

    if (typeof document !== 'undefined' && document.location.search.startsWith('?googledesktopauth')) {
      this.setState({
        googleAuthenticated: true
      });
      window.location = `buttercup://auth/google/callback${document.location.search}`;
    }
  }

  render() {
    return (
      <Page>
        {this.state.googleAuthenticated && (
          <div>
            <article class="message is-success">
              <div class="message-header">
                <p>Authenticated. You can close this window now.</p>
              </div>
            </article>
          </div>
        )}
        <section className="hero is-medium is-dark">
          <div className="container">
            <div className="hero-body has-text-centered">
              <img src="/static/img/buttercup-text.svg" alt="Buttercup" />
              <h2 className="subtitle is-3">The Password Manager You Deserve.</h2>
            </div>
          </div>
        </section>
        <section className="hero is-light features" id="features">
          <div className="container">
            <div className="hero-body">
              <section className="columns has-text-centered">
                <div className="column">
                  <img src="/static/img/secure.svg" alt="Secure" />
                  <h4 className="title is-4">Secure</h4>
                  <p className="subtitle">
                    Strong 256bit AES encrypted vaults that meet today's security standards. Rest assured that your
                    credentials are safe.
                  </p>
                </div>
                <div className="column">
                  <img src="/static/img/simple.svg" alt="Simple" />
                  <h4 className="title is-4">Simple</h4>
                  <p className="subtitle">
                    Easy-to-use interfaces with basic concepts make storing and finding your login details a piece of
                    cake.
                  </p>
                </div>
                <div className="column">
                  <img src="/static/img/free.svg" alt="Free" />
                  <h4 className="title is-4">Free</h4>
                  <p className="subtitle">
                    Buttercup's software is free to download and use, forever. It's also available for all major
                    platforms.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className="section section-desktop" id="desktop">
          <div className="container">
            <section className="columns is-vcentered">
              <div className="column">
                <figure className="image">
                  <img src="/static/img/desktop.png" alt="Buttercup for Desktop Screenshot" />
                </figure>
              </div>
              <div className="column">
                <h3 className="title is-3">
                  Buttercup <span className="has-text-weight-light">for</span> Desktop
                </h3>
                <h5 className="subtitle is-5">macOS, Linux, Windows</h5>

                <div className="content">
                  <p>
                    Buttercup for desktop is a beautifully-simple password manager designed to help manage your
                    credentials. Buttercup uses very strong encryption to protect your sensitive details under a single
                    master password - Feel free to use stronger and more complex passwords for each service and let
                    Buttercup store them securely.
                  </p>
                  <p>
                    Buttercup is free to download and use and is available for Windows, Mac and Linux. Use it alongside
                    the browser extension and mobile app for a completely portable experience.
                  </p>
                </div>
                <div className="field is-grouped">
                  {this.state.version &&
                    this.state.desktopDownloads.map((dl, i) => (
                      <a
                        key={i}
                        className={cx('button', dl.primary ? 'is-primary' : '')}
                        href={getGithubDownloadLink(dl.fileName, this.state.version)}
                      >
                        <span className="icon">
                          <i className={cx('fa', `fa-${dl.icon}`)} />
                        </span>
                        <span>{dl.title}</span>
                      </a>
                    ))}
                </div>
                <div className="content is-small">
                  <p>
                    Alternatively, using Homebrew: <code>$ brew install --cask buttercup</code>
                    <br />
                    Latest: <strong className="version">{this.state.version}</strong>.{' '}
                    <a href="https://github.com/buttercup/buttercup-desktop/releases" rel="noopener" target="_blank">
                      Releases Page
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="section section-mobile" id="mobile">
          <div className="container">
            <section className="columns is-vcentered">
              <div className="column">
                <h3 className="title is-3">
                  Buttercup <span className="has-text-weight-light">for</span> Mobile
                </h3>
                <h5 className="subtitle is-5">iOS, Android</h5>

                <div className="content">
                  <p>
                    Take your login credentials wherever you go by installing the free iOS or Android app on your phone.
                    Buttercup mobile gives you access to the same vaults you use on the desktop application and browser
                    extension, so your newly added details can be seen on all of your devices.
                  </p>
                  <p>
                    Buttercup’s mobile applications employ similar safety techniques to banking applications, such as
                    auto-lock and a security overlay when the app is minimized.
                  </p>
                </div>
                <div className="store-links">
                  <a
                    href="https://itunes.apple.com/us/app/buttercup-password-manager/id1294001514?ls=1&mt=8"
                    target="_blank"
                  >
                    <img src="/static/img/appstore.svg" alt="Availble on App Store" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.buttercup&hl=en" target="_blank">
                    <img src="/static/img/googleplay.svg" alt="Availble on Google Play Store" />
                  </a>
                </div>
              </div>
              <div className="column">
                <figure className="image">
                  <img src="/static/img/mobile.png" alt="Buttercup for Mobile Screenshot" />
                </figure>
              </div>
            </section>
          </div>
        </section>
        <section className="section section-browsers" id="browsers">
          <div className="container has-text-centered">
            <h3 className="title is-3">
              Buttercup <span className="has-text-weight-light">for</span> Browsers
            </h3>
            <h5 className="subtitle is-5">Chrome, Firefox, Edge</h5>
            <section className="columns">
              {this.state.browserDownloads.map((dl, i) => (
                <div className="column" key={i}>
                  <div className="box">
                    <span className="icon is-large">
                      <span className={cx('fa', `fa-${dl.icon}`, 'fa-3x')} />
                    </span>
                    <p className="title is-5">{dl.title}</p>
                    <a
                      href={dl.href}
                      target="_blank"
                      className={cx('button', 'is-block', `is-${dl.primary ? 'primary' : 'light'}`)}
                    >
                      <span className="icon is-small">
                        <i className="fa fa-puzzle-piece" />
                      </span>
                      <span>{dl.primary ? 'Install Now' : 'Check Out Extension'}</span>
                    </a>
                  </div>
                </div>
              ))}
              <div className="column">
                <div className="box">
                  <span className="icon is-large">
                    <span className="fa fa-safari fa-3x" />
                  </span>
                  <p className="title is-5">More Browsers</p>
                  <a href="https://github.com/buttercup/roadmap" target="_blank" className="button is-light is-block">
                    Check our Roadmap
                  </a>
                </div>
              </div>
            </section>
            <div className="content">
              <p>
                Note: the extension <strong>requires the Buttercup desktop application version 2.26 or later</strong> be
                installed <i>and</i> running, at least in the background. This browser addon uses an encrypted connection with the desktop application
                to transfer vault credentials during login and saving. This addon cannot function without the desktop application.
              </p>
            </div>
          </div>
        </section>
        <section className="section section-awards" id="awards">
          <div className="container">
            <section className="columns is-vcentered">
              <div className="column">
                <figure className="image">
                  <a href="https://www.20i.com/foss-awards/winners" rel="noopener" target="_blank">
                    <img src="/static/img/20i-2023-password-manager-winner-proper.svg" alt="Buttercup for Mobile Screenshot" />
                  </a>
                </figure>
              </div>
              <div className="column">
                <h3 className="title is-3">
                  Awarded
                </h3>
                <div className="content">
                  <p>
                    In June 2023 Buttercup won <a href="https://www.20i.com/" rel="noopener" target="_blank">20i</a>'s FOSS Awards in the category
                    of Password Mangement. We were voted as the winning platform alongside some giants in the space. It goes without saying that
                    we at Buttercup were extremely honoured by this and appreciate the chance to be recognised in the field we love.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="hero is-dark">
          <div className="container">
            <div className="hero-body">
              <audio
                data-theme="night"
                data-src="https://changelog.com/podcast/325/embed"
                src="https://op3.dev/e/https://cdn.changelog.com/uploads/podcast/325/the-changelog-325.mp3"
                preload="none"
                className="changelog-episode"
                controls
              />
              <p>
                <a href="https://changelog.com/podcast/325">
                  Changelog Interviews 325: A good open source password manager? Inconceivable!
                </a>
                &nbsp;– Listen on <a href="https://changelog.com/">Changelog.com</a>
              </p>
              <Script async src="//cdn.changelog.com/embed.js" />
            </div>
          </div>
        </section>
      </Page>
    );
  }
}
