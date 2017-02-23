require('es6-promise/auto');
import Page from '../components/page';
import LatestVersion from '../components/version';

export default () => (
    <Page title="Buttercup">
        <header>
            <nav className="nav has-shadow">
                <div className="container">
                    <div className="nav-left">
                        <a className="nav-item">
                            <img src="/static/img/logo.svg" alt="Buttercup Logo"/>
                        </a>
                    </div>

                        <div className="nav-center">
                            <a className="nav-item" href="https://github.com/buttercup-pw/buttercup" target="_blank">
                                <span className="icon">
                                    <i className="fa fa-github"></i>
                                </span>
                            </a>
                            <a className="nav-item" href="https://twitter.com/buttercup_pw" target="_blank">
                                <span className="icon">
                                    <i className="fa fa-twitter"></i>
                                </span>
                            </a>
                        </div>

                        <div className="nav-right nav-menu">
                            <a className="nav-item" href="/">Home</a>
                            <a className="nav-item" href="https://chrome.google.com/webstore/detail/buttercup/heflipieckodmcppbnembejjmabajjjj?hl=en">Chrome Extension</a>

                            <span className="nav-item">
                                <a className="button is-primary" href="#download">
                                    <span>Download</span>
                                </a>
                            </span>
                        </div>
                    </div>
            </nav>
        </header>
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
                    <a className="button is-large" href="https://download.buttercup.pw" target="_blank">
                        <span className="icon">
                            <i className="fa fa-cloud-download"></i>
                        </span>
                        <span>Download for Desktop</span>
                    </a>{' '}
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
                </p>
                <p>Alternatively, using Homebrew: <code>$ brew install buttercup</code></p>
                <p>Latest: <LatestVersion/>. <a href="https://github.com/buttercup-pw/buttercup/releases" target="_blank">Releases Page</a>.</p>
            </div>
        </section>
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered" id="download">
                    <p>
                        <strong>Buttercup</strong> is made by <a href="https://twitter.com/perry_mitchell" target="_blank">Perry Mitchell</a> & <a href="https://twitter.com/sallar" target="_blank">Sallar Kaboli</a> in Helsinki, Finland.
                    </p>
                    <p>
                        <a className="icon" href="https://github.com/buttercup-pw/buttercup" target="_blank">
                            <i className="fa fa-github"></i>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    </Page>
);
