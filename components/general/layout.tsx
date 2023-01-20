import { ReactNode } from 'react';
import Head from 'next/head'
import Menu from './menu';
import { SITE_TITLE, SITE_DESCRIPTION } from '../../constants';

type PropTypes = {
  children: ReactNode;
  title?: string;
}

export default function Layout({
  children,
  title = SITE_TITLE,
}: PropTypes) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="isolate bg-black">
        <Menu />
        {children}
      </div>
    </>
  );
}