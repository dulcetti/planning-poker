import Head from 'next/head';

import { ISeo } from './interfaces';

export default function Seo({ title }: ISeo) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
