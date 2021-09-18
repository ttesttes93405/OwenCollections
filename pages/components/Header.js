import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames';
import swatch from '../../styles/swatch';
import { useEffect, useRef, useState } from 'react';
import { routeData } from '../../data';


export default function Header() {


  const [showRouteMenu, useShowRouteMenu] = useState(false);
  const [onTop, useOnTop] = useState(true);


  const isOnTop = () => {
    return window.scrollY < 30;
  }

  const scrollHandler = () => {
    useOnTop(isOnTop());
  }

  const useScroll = useEffect(() => {
    const root = window;
    root.addEventListener('scroll', scrollHandler);
    return () => { root.removeEventListener('scroll', scrollHandler); }
  }, [])

  const router = useRouter();
  const isCurrentRoute = (route) => router.route == route;


  return (
    <nav className={classNames("header", { 'on-top': onTop })}>

      <div className="container">
        <div className="title-container"
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="/Owen01.jpg" className="icon" />
          <p className="title">OWENSUN.INFO</p>
        </div>

        <div className="flex-space" />

        {
          showRouteMenu ? null : (
            <div className="route-menu-btn" onClick={() => useShowRouteMenu(!showRouteMenu)}>
              <img src="/icons/menu.svg" />
            </div>)
        }

        <div
          className={classNames("route-container", { "show-route": showRouteMenu })}
          onClick={() => useShowRouteMenu(!showRouteMenu)}>
          {
            routeData.map(r => (<Link href={r.route} key={r.route}>
              <a className={classNames("route", { "route-current": isCurrentRoute(r.route) })}>
                <img src={r.icon} className="route-icon" />
                <p className="route-title">{r.title}</p>
              </a>
            </Link>))
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
        
        .title-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          cursor: pointer;
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
        }

        .flex-space {
          flex-grow: 1;
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

        }

      `}</style>
    </nav>
  )
}
