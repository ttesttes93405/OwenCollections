import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames';
import swatch from '../../styles/swatch';
import { useEffect, useRef, useState } from 'react';
import { typeData, } from '../../data';


import { styled } from '../../styles/stitchesStyles';


const HeadWrapper = styled('nav', {
  position: 'fixed',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#ffffff',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  margin: 0,
  top: 0,
  zIndex: 10,
  transition: 'box-shadow 0.3s, height 0.3s, padding-top 0.3s',
  boxShadow: '1px 2px 18px rgba(0, 0, 0, 10%)',
  height: 60,

  variants: {
    isOnTop: {
      true: {
        '@l': {
          boxShadow: '1px 2px 18px rgba(0, 0, 0, 0%)',
          height: 120,
          paddingTop: 60,
        }
      },
      false: {
      }
    },
  },

});

const HeadContainer = styled('div', {
  maxWidth: 576,
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  height: '100%',
  alignItems: 'center',
});

const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  maxWidth: 350,
  opacity: 1,
});

const TitlePath = styled('a', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 60,
  maxWidth: 230,
  borderRadius: 8,
  '& .slash': {
    margins: [0, 8, 0, 2],
    padding: 0,
    color: '#a0a0a0',
  },
  '& .icon': {
    size: 30,
    borderRadius: 9999,
  },
  '& .title': {
    fontSize: '1.35rem',
    margin: 0,
    marginLeft: 8,
    color: 'rgba(0, 0, 0, 0.65)',
    fontWeight: 500,
    textOverflow: 'ellipsis',
    height: 30,
    lineHeight: '30px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    flexShrink: 1,
  },
  '&:first-child': {
    maxWidth: 120,
    cursor: 'pointer',
    paddings: [4, 8],
    height: 40,
    '&:hover': {
      backgroundColor: '#f4f4f4be',
    }
  },
  '&:last-child': {
    maxWidth: 300,
  },

  '@s': {
    '&:first-child .title': {
      display: 'none',
    },
    '&:last-child .title': {
      display: 'flex',
    },
  }

});

const FlexSpace = styled('span', {
  flexGrow: 1,
  minWidth: 30,
});




function Header(props) {

  const {
    icon = "/Owen01.jpg",
    title = "OWENSUN.INFO",
    rootPath = "/",
    isShowType = true,
    onlyShowWhenTop = false,
    paths = [],
  } = props;


  const [showRouteMenu, UseShowRouteMenu] = useState(false);
  const [onTop, UseOnTop] = useState(true);


  const scrollHandler = () => {
    const getIsOnTop = () => window.scrollY < 30;
    UseOnTop(getIsOnTop());
  }

  useEffect(() => {
    const root = window;
    root.addEventListener('scroll', scrollHandler);
    return () => { root.removeEventListener('scroll', scrollHandler); }
  }, [])


  const router = useRouter();
  const isCurrentRoute = (route) => router.asPath == route;


  return (
    <HeadWrapper isOnTop={onTop} >

      <HeadContainer>

        <TitleContainer>
          <Link href={rootPath}>
            <TitlePath>
              <img src={icon} className="icon" />
              <p className="title">{title}</p>
            </TitlePath>
          </Link>
          {
            paths.map(path => (
              <TitlePath key={path.title}>
                <span className='slash'>{'/'}</span>
                <img src={path.icon} className="icon" />
                <p className="title">{path.title}</p>
              </TitlePath>
            ))
          }
        </TitleContainer>

        <FlexSpace />

        {
          showRouteMenu ? null : (
            <div className="route-menu-btn" onClick={() => UseShowRouteMenu(!showRouteMenu)}>
              <img src="/icons/menu.svg" />
            </div>)
        }

        <div
          className={classNames("route-container", { "show-route": showRouteMenu })}
          onClick={() => UseShowRouteMenu(!showRouteMenu)}
        >
          <Link href={rootPath} key="home">
            <a className={classNames("home", "route", { "route-current": isCurrentRoute("/") })}>
              <img src="/icons/home.svg" className="route-icon" />
              <p className="route-title">首頁</p>
            </a>
          </Link>
          {
            isShowType && (typeData.map(r => {
              const path = `/type/${r.id}`;
              return (<Link href={path} key={r.id}>
                <a className={classNames("route", { "route-current": isCurrentRoute(path) })}>
                  <img src={r.icon} className="route-icon" />
                  <p className="route-title">{r.title}</p>
                </a>
              </Link>)
            }))
          }
        </div>
      </HeadContainer>


      <style jsx>{`
               
        
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

          .home {
            display: flex;
          }
        }

      `}</style>
    </HeadWrapper >
  )
}

Header.defaultProps = {
  icon: "/Owen01.jpg",
  title: "OWENSUN.INFO",
  rootPath: "/",
  isShowType: true,
  paths: [],
};

export default Header;