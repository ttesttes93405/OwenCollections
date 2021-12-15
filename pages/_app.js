import styles from '../styles/main.scss'
import swatch from '../styles/swatch';
import HeadGoogleAnalytics from './components/HeadGoogleAnalytics';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">

      <HeadGoogleAnalytics />


      <div className="app-container">
        <Component {...pageProps} />
      </div>


      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Poppins:wght@300;500;700&display=swap');

        :root{
          font-size: 12px; 
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family:    
            'Poppins',
            'Noto Sans TC',
            -apple-system,
            'BlinkMacSystemFont',
            'Segoe UI', 
            'Roboto', 
            'Oxygen',
            'Ubuntu', 
            'Cantarell', 
            'Fira Sans', 
            'Droid Sans', 
            'Helvetica Neue',
            'sans-serif';    
        }

        body::-webkit-scrollbar {
          background-color: rgb(238, 238, 238);
          width: 16px;
        }
        body::-webkit-scrollbar-thumb {
          background-color: rgb(207, 207, 207);
          border-radius: 4px;
          width: 10px;
        }
        body::-webkit-scrollbar-track {
          margin: 0 10px;
        }

        ::selection {
          color: #fff;
          background: ${swatch.main};
        }


        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }

        .row {
          display: flex;
          flex-direction: row;
        }

        .col {
          display: flex;
          flex-direction: column;
        }


        @media (max-width: 576px) { 
                  
          .m-row {
            display: flex;
            flex-direction: row;
          }

          .m-col {
            display: flex;
            flex-direction: column;
          }
        }

        .svg-stroke-main {
          stroke: ${swatch.main};
        }


      `}</style>

      <style jsx>{`
        
        .app {
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-x: hidden;
        }

        .app-container {
          
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 600px;
          width: 100%;
          padding: 120px 0 0;
        
        }


      `}</style>
    </div>);
}

export default MyApp
