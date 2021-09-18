import styles from '../styles/main.scss'
import Header from './components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">

      <Header />

      <div className="app-container">
        <Component {...pageProps} />
      </div>

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
