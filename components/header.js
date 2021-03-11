import Link from 'next/link';

// Toggles mobile hamburger menu
const toggleMenu = () => {
  const menu = document.getElementById('mainMenu')
  menu.classList.toggle('is-active')
}

export default () => (
  <header>
    <nav className="navbar is-transparent has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src="/static/img/logo.svg" alt="Buttercup Logo" />
            </a>
          </Link>

          <a className="navbar-item is-hidden-desktop" href="https://github.com/buttercup" target="_blank">
            <span className="icon">
              <i className="fa fa-lg fa-github" />
            </span>
          </a>

          <a className="navbar-item is-hidden-desktop" href="https://twitter.com/buttercup_pw" target="_blank">
            <span className="icon">
              <i className="fa fa-lg fa-twitter" />
            </span>
          </a>

          <div className="navbar-burger burger" data-target="mainMenu" onClick={() => toggleMenu()}>
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="mainMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/privacy">
              <a className="navbar-item">Privacy Policy</a>
            </Link>
          </div>

          <div className="navbar-end">
            <a className="navbar-item is-hidden-desktop-only" href="https://github.com/buttercup" target="_blank">
              <span className="icon">
                <i className="fa fa-lg fa-github" />
              </span>
            </a>
            <a className="navbar-item is-hidden-desktop-only" href="https://twitter.com/buttercup_pw" target="_blank">
              <span className="icon">
                <i className="fa fa-lg fa-twitter" />
              </span>
            </a>
            <a className="navbar-item" href="https://opencollective.com/buttercup">Donate</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
);
