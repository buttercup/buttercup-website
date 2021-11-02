import { useEffect } from "react";
import Page from '../../components/authPage';

export default () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const query = window.location.search;
      window.location.href = `buttercup://auth/google/${query}`;
    }, 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <Page title="Google Authentication">
      <section className="section">
        <div className="container">
          <div className="columns is-desktop">
            <div className="column is-8 is-offset-2 content">
              <h1>Google Authentication</h1>
              <p>This page should close automatically.</p>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
