import Header from './Header'
import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <style>{`
        body, html {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
          font-weight: 300;
          font-size: 20px;
          line-height: 1.6;
          color: rgb(85, 85, 85);
          padding: 10px;
          margin: 5px auto;
          background: #232323;
        }
        a, a:visited {
          color: #7F7F7F;
          text-decoration: none;
        }

      `}</style>
       <title>{ props.title }</title>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />

       <meta name="theme-color" content="#ff6600" />
       <link rel="apple-touch-icon" href="/static/tellus-emoji.png" />
       <meta name="apple-mobile-web-app-title" content="Hacker News" />
       <meta name="apple-mobile-web-app-status-bar-style" content="default" />
       <meta name="apple-mobile-web-app-capable" content="yes" />
       <meta name="mobile-web-app-capable" content="yes" />
     </Head>
    <Header />
    {props.children}
  </div>
)

export default Layout
