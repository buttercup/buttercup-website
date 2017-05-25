import 'es6-promise/auto';
import Page from '../components/page';
import LatestVersion from '../components/version';
import { isFirefox, isLinux } from '../utils/platform';

export default () => (
    <Page>
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1">Buttercup</h1>
                    <h2 className="subtitle is-3">The Password Manager You Deserve.</h2>
                </div>
            </div>
            <div className="hero-foot">
                <div className="container">
                    <img className="image" src="/static/img/buttercup.png" alt="Buttercup"/>
                </div>
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
                <p>Latest: <LatestVersion/>. <a href="https://github.com/buttercup-pw/buttercup/releases" rel="noopener" target="_blank">Releases Page</a>.</p>
            </div>
        </section>
    </Page>
);
