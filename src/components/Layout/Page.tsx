import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<HomepageMeta> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <link href="/favicon.svg" rel="icon" sizes="any" />

        {/* Several domains list the same content, make sure google knows we mean this one. */}
        <link href={`https://anton-johansson.com${pathname}`} key="canonical" rel="canonical" />

        {/* Open Graph: https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`https://anton-johansson.com${pathname}`} property="og:url" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
