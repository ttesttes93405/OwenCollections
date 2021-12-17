import React from "react";
import Head from 'next/head';
import { introData, } from '../../data';

export default function HeadMeta(props) {

  const defaultProps = {
    title: "Owen Sun",
    icon: "/favicon.png",
    viewport: "initial-scale=1.0, width=device-width",
    description: introData.content.join('\n'),
    image: "https://owensun.info/Owen01.jpg",
  }


  const metaProps = {
    ...defaultProps,
  };

  Object.entries(props).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      metaProps[key] = value;
    }
  });

  return (
    <Head>
      <title>{metaProps.title}</title>
      <link rel="icon" href={metaProps.icon} />
      <meta name="description" content={metaProps.description} />
      <meta property="og:description" content={metaProps.description} />
      <meta property="og:image" content={metaProps.image} />

    </Head>
  );
}