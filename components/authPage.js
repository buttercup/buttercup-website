import Head from 'next/head';
import Header from './header';
// import Footer from './footer';
import '../css/style.scss';

export default ({ title, children }) => (
  <div>
    <Head>
      <title>{title ? `${title} - Buttercup` : 'Buttercup'}</title>
      <link rel="icon" href="/static/img/buttercup.ico" />
      <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet" />
    </Head>
    <Header menu={false} />
    {children}
    {/* <Footer /> */}
  </div>
);
