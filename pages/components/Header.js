import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames';
import swatch from '../../styles/swatch';
import { useEffect, useRef, useState } from 'react';
import { typeData, } from '../../data';


function Header(props) {

  const {
    icon = "/Owen01.jpg",
    title = "OWENSUN.INFO",
    alwaysShowTitle = true,
    paths = [],
  } = props;


  const [showRouteMenu, UseShowRouteMenu] = useState(false);
  const [onTop, UseOnTop] = useState(true);


  const isOnTop = () => {
    return window.scrollY < 30;
  }

  const scrollHandler = () => {
    UseOnTop(isOnTop());
  }

  const useScroll = useEffect(() => {
    const root = window;
    root.addEventListener('scroll', scrollHandler);
    return () => { root.removeEventListener('scroll', scrollHandler); }
  }, [])

  const router = useRouter();
  const isCurrentRoute = (route) => router.asPath == route;

  return (
    <nav className={classNames("header", { 'on-top': onTop, 'always-show-title': alwaysShowTitle })}>

      <div className="container">

        <div className="title-container" >
          <Link href="/">
            <a className="title-path">
              <img src={icon} className="icon" />
              <p className="title">{title}</p>
            </a>
          </Link>
          {
            paths.map(path => (
              <div className="title-path" key={path.title}>
                <span className='slash'>{'/'}</span>
                <img src={path.icon} className="icon" />
                <p className="title">{path.title}</p>
              </div>
            ))
          }
        </div>
        <div className="flex-space" />

        {
          showRouteMenu ? null : (
            <div className="route-menu-btn" onClick={() => UseShowRouteMenu(!showRouteMenu)}>
              <img src="/icons/menu.svg" />
            </div>)
        }

        <div
          className={classNames("route-container", { "show-route": showRouteMenu })}
          onClick={() => UseShowRouteMenu(!showRouteMenu)}>
          <Link href="/" key="home">
            <a className={classNames("home", "route", { "route-current": isCurrentRoute("/") })}>
              <img src="/icons/home.svg" className="route-icon" />
              <p className="route-title">首頁</p>
            </a>
          </Link>
          {
            typeData.map(r => {
              const path = `/type/${r.id}`;
              return (<Link href={path} key={r.id}>
                <a className={classNames("route", { "route-current": isCurrentRoute(path) })}>
                  <img src={r.icon} className="route-icon" />
                  <p className="route-title">{r.title}</p>
                </a>
              </Link>)
            })
          }
        </div>
      </div>

      <style jsx>{`
        
        .header {
          position: fixed;
          height: 60px;
          width: 100%;
          display: flex;
          flex-direction: row;
          background-color: #fff;
          /*border-bottom: 1px rgba(0,0,0,0.1) solid;*/
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0;
          top: 0;
          z-index: 10;
          box-shadow: 1px 2px 18px rgba(0, 0, 0, 10%);
          transition: box-shadow 0.3s, height 0.3s, padding-top 0.3s;
          
        }

        .header.on-top {
          box-shadow: 1px 2px 18px rgba(0, 0, 0, 0%);
          height: 120px;
          padding-top: 60px;
        }

        .container {
          max-width: 576px;
          display: flex;
          flex-direction: row;
          flex-grow: 1;
          height: 100%;
          align-items: center;
        }
        
        .slash {
          margin: 0 8px 0 2px;
          padding: 0;
          color: #aaa;
        }
        
        .title-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          max-width: 350px;
          opacity: 1;
          transition: opacity 0.3s;
        }

        .title-path {
          height: 60px;
          display: flex;
          flex-direction: row;
          align-items: center;
          max-width: 230px;
        }


        .on-top .title-container{
          opacity: 0;
        }

        .always-show-title .title-container{
          opacity: 1;
        }

        .icon {
          width: 30px;
          height: 30px;
          border-radius: 9999px;
        }

        .title {
          font-size: 1.35rem;
          margin: 0;
          margin-left: 8px;
          color: rgba(0, 0, 0, 0.65);
          font-weight: 500;          
          text-overflow : ellipsis;
          flex-shrink: 1;
          height: 30px;
          line-height: 30px;
          overflow: hidden;
          white-space: nowrap;
        }

        .title-path:first-child {
          cursor: pointer;
          padding: 4px 8px;
          height: 40px;
        }

        .title-path:first-child:hover {    
          border-radius: 8px;
          background-color: #f4f4f4be;
        }

        .title-path:first-child .title {            
          max-width: 60px;
        }

        .title-path:last-child .title {   
          display: inline-block;    
          flex-shrink: 0;
          overflow: hidden;
          max-width: 300px;
        }
        
        
        .flex-space {
          flex-grow: 1;
          min-width: 30px;
        }
        
        .route-menu-btn {
          display: none;
        }

        .route-container {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .route {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          padding: 8px 16px;
          margin-left: 8px;
          background-color: #f0f0f000;          
          transition: background-color 0.15s;
        }

        .route:not(.route-current):hover{
          background-color: #f4f4f4be;
        }

        .route-current {
          position: relative;
          background-color: #f4f4f4;
        }

        .route-icon {
          width: 18px;
          height: 18px;
          margin-right: 4px;
        }

        .route-title {
          font-size: 1.35rem;
          margin: 0;
          padding: 0;
          color: #555;
        }

        .route-current .route-title {
          color: #333;
        }

        .home {
          display: none;
        }

        
        @media (max-width: 576px){
          
          .header {
            padding-left: 16px;
          }
            
          .header.on-top {
            padding-top: 0;
            height: 60px;
          }

          .route-container {
            display: none;
            position: relative;
          }

          .route-container::after {
            content: '';
            position: absolute;
            top: 20px;
            right: 20px;
            background-image: url("/icons/x.svg");
            background-size: 20px 20px;
            height: 20px;
            width: 20px;
          }
          
          .route-container.show-route {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.95);
          }
        
          .route {
            background-color: #ffffff;
            
            overflow: hidden;
            width: 200px;
            margin-left: 0;
            margin-bottom: 16px;
            padding: 12px 24px;
            border: 1px #ddd solid;

          } 

          .route-icon {
            width: 24px;
            height: 24px;
            margin-right: 16px;
          }

          .route-title {
            font-size: 1.5rem;
            margin: 0;
            padding: 0;
            color: #555;
          }

          .route-current {
            border: 2px ${swatch.main} solid;
            border-left-width: 16px;
            padding-right: 36px;
          }

          .route-current::after{
            display: none;
            bottom: 0;
            top: 0;
            left: 0;
            width: 10px;
            height: auto;
          }

          .route-menu-btn {
            display: flex;
            width: 60px;
            height: 60px;
            padding: 20px;
          }

          .title-path:first-child .title {            
            display: none;
          }

          .title-path:last-child .title {            
            display: flex;
          }

          .home {
            display: flex;
          }
        }

      `}</style>
    </nav >
  )
}

Header.defaultProps = {
  icon: "/Owen01.jpg",
  title: "OWENSUN.INFO",
  alwaysShowTitle: true,
};

export default Header;