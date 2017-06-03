import { isFirefox } from '../utils/platform';

const extensionUrl = isFirefox
    ? 'https://addons.mozilla.org/en-US/firefox/addon/buttercup-pw/'
    : 'https://chrome.google.com/webstore/detail/buttercup/heflipieckodmcppbnembejjmabajjjj?hl=en';

export default () => (
    <header>
        <nav className="nav has-shadow">
            <div className="container">
                <div className="nav-left">
                    <a className="nav-item" href="/">
                        <img src="/static/img/logo.svg" alt="Buttercup Logo" />
                    </a>
                </div>

                <div className="nav-center">
                    <a className="nav-item" href="https://github.com/buttercup-pw/buttercup" rel="noopener" target="_blank">
                        <span className="icon">
                            <i className="fa fa-github"></i>
                        </span>
                    </a>
                    <a className="nav-item" href="https://twitter.com/buttercup_pw" rel="noopener" target="_blank">
                        <span className="icon">
                            <i className="fa fa-twitter"></i>
                        </span>
                    </a>
                </div>

                <div className="nav-right nav-menu">
                    <a className="nav-item" href={extensionUrl}>{isFirefox ? 'Firefox' : 'Chrome'} Extension</a>
                    <a className="nav-item" href="/privacy">Privacy Policy</a>
                    <span className="nav-item">
                        <a className="button is-primary" href="/#download">
                            <span>Download</span>
                        </a>
                    </span>
                </div>
            </div>
        </nav>
    </header>
);
