import 'es6-promise/auto';
import LockOutlineIcon from 'mdi-react/LockOutlineIcon';
import CubeSendIcon from 'mdi-react/CubeSendIcon';
import CreditCardOffIcon from 'mdi-react/CreditCardOffIcon';
import Page from '../components/page';
import LatestVersion from '../components/version';
import { isFirefox, isLinux } from '../utils/platform';

export default () => (
    <Page>
        <section className="hero is-primary is-medium is-bold">
            <div className="container">
                <div className="hero-body has-text-centered">
                    <h1 className="title is-1">Buttercup</h1>
                    <h2 className="subtitle is-3">The Password Manager You Deserve.</h2>
                </div>
            </div>
        </section>
        <section className="hero is-light">
            <div className="container">
                <div className="hero-body">
                    <section className="columns">
                        <div className="column has-text-centered">
                            <span className="icon is-large">
                                <LockOutlineIcon className="mdi-48px" width="48" height="48"/>
                            </span>
                            <h4 className="title is-4">Secure</h4>
                            <p className="subtitle">Strong 256bit AES encrypted archives that meet today's security standards. Rest assured that your credentials are safe.</p>
                        </div>
                        <div className="column has-text-centered">
                            <span className="icon is-large">
                                <CubeSendIcon className="mdi-48px" width="48" height="48"/>
                            </span>
                            <h4 className="title is-4">Simple</h4>
                            <p className="subtitle">Easy-to-use interfaces with basic concepts make storing and finding your login details a piece of cake.</p>
                        </div>
                        <div className="column has-text-centered">
                            <span className="icon is-large">
                                <CreditCardOffIcon className="mdi-48px" width="48" height="48"/>
                            </span>
                            <h4 className="title is-4">Free</h4>
                            <p className="subtitle">Buttercup's software is free to download and use, forever. It's also available for all major platforms.</p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <section className="columns is-vcentered">
                    <div className="column">
                        <figure className="image">
                            <img src="/static/img/desktop.png" alt="Buttercup"/>
                        </figure>
                    </div>
                    <div className="column">
                        <h3 className="title is-3">Buttercup <em className="has-text-weight-light">for</em> Desktop</h3>
                        <h5 className="subtitle is-5">macOS, Linux, Windows</h5>

                        <p>Buttercup for desktop is a beautifully-simple password manager designed to help manage your credentials. Buttercup uses very strong encryption to protect your sensitive details under a single master password - Feel free to use stronger and more complex passwords for each service and let Buttercup store them securely.</p>
                        <p>Buttercup is free to download and use and is available for Windows, Mac and Linux. Use it alongside the browser extension and mobile app for a completely portable experience.</p>
                    </div>
                </section>
            </div>
        </section>
        <section className="section">
            <div className="container has-text-centered content">
                <p>
                    {!isLinux && (<a className="button is-large" href="https://download.buttercup.pw" rel="noopener">
                        <span className="icon">
                            <i className="fa fa-cloud-download"></i>
                        </span>
                        <span>Download for Desktop</span>
                    </a>)}
                    {isLinux && (
                        <span>
                            <a className="button is-large" href="https://download.buttercup.pw/download/linux_rpm" rel="noopener" target="_blank">
                                <span className="icon"><i className="fa fa-cloud-download"></i></span>
                                <span>Download .RPM</span>
                            </a>{' '}
                            <a className="button is-large" href="https://download.buttercup.pw/download/linux_deb_64" rel="noopener" target="_blank">
                                <span className="icon"><i className="fa fa-cloud-download"></i></span>
                                <span>Download .DEB</span>
                            </a>
                        </span>
                    )}
                    {' '}
                    {!isFirefox && (
                        <a
                            className="button is-large add-to-chrome"
                            onClick={e => {
                                e.preventDefault();
                                chrome.webstore.install();
                            }}>
                            <span className="icon">
                                <i className="fa fa-chrome"></i>
                            </span>
                            <span>Add To Chrome</span>
                        </a>
                    )}
                    {isFirefox && (
                        <a
                            className="button is-large add-to-firefox"
                            onClick={e => {
                                e.preventDefault();
                                InstallTrigger.install({
                                    "Buttercup": { URL: "https://addons.mozilla.org/firefox/downloads/latest/buttercup-pw/addon-795525-latest.xpi?src=dp-btn-primary" }
                                });
                            }}>
                            <span className="icon">
                                <i className="fa fa-firefox"></i>
                            </span>
                            <span>Add To Firefox</span>
                        </a>
                    )}
                </p>
                <p>Alternatively, using Homebrew: <code>$ brew cask install buttercup</code></p>
                <p>Latest: <LatestVersion/>. <a href="https://github.com/buttercup/buttercup-desktop/releases" rel="noopener" target="_blank">Releases Page</a>.</p>
            </div>
        </section>
    </Page>
);
