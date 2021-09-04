import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames';
import swatch from '../../styles/swatch';
import { useState } from 'react';
import { routeData } from '../../data';


export default function Header() {

  const router = useRouter();

  const isCurrentRoute = (route) => router.route == route;

  const [showRouteMenu, useShowRouteMenu] = useState(false);

  return (
    <div className="header">

      <div className="container">
        <img src="/Owen01.jpg" className="icon" />
        <p className="title">OWENSUN.INFO</p>


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
          border-bottom: 1px rgba(0,0,0,0.1) solid;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
          margin: 0;
          top: 0;
          z-index: 10;
        }

        .container {
          max-width: 1024px;
          display: flex;
          flex-direction: row;
          flex-grow: 1;
          height: 100%;
          align-items: center;
        }

        .icon {
          width: 30px;
          height: 30px;
          border-radius: 9999px;
        }

        .title {
          font-size: 1.35rem;
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
          background-color: #f4f4f4;
        }

        .route-current {
          position: relative;
        }

        .route-current::after{
          content: '';
          position: absolute;
          width: 100%;
          height: 4px;
          left: 0;
          right: 0;
          bottom: -10px;
          background-color: ${swatch.main}
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

        
        @media (max-width: 576px){

          .header {
            padding-right: 0;
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
    </div>
  )
}
