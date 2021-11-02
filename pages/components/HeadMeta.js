import React from "react";
import Head from 'next/head';
import { introData, } from '../../data';

export default function HeadMeta(props) {

  const metaProps = {
    viewport: "initial-scale=1.0, width=device-width",
    description: introData.content.join('\n'),
    image: "https://owensun.info/Owen01.jpg",
  }

  return (
    <Head>
      <meta name="description" content={metaProps.description} />
      <meta property="og:description" content={metaProps.description} />
      <meta property="og:image" content={metaProps.image} />

    </Head>
  );
}