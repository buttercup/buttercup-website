import Head from 'next/head';

export default ({ title, children }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet" />
            <link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/heflipieckodmcppbnembejjmabajjjj" />
            <link rel="stylesheet" href="/static/style.css" type="text/css" />
        </Head>
        {children}
    </div>
);
