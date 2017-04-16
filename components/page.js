import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const GA_CODE = `
(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)        
}, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-70971437-1', 'auto');
ga('send', 'pageview');
`;

export default ({ title, children }) => (
    <div>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/static/img/buttercup.ico" />
            <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet" />
            <link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/heflipieckodmcppbnembejjmabajjjj" />
            <link rel="stylesheet" href="/static/style.css" type="text/css" />
            <script dangerouslySetInnerHTML={{__html: GA_CODE}}></script>
        </Head>
        <Header/>
        {children}
        <Footer/>
    </div>
);
