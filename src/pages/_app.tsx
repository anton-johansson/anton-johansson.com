import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {JSX, memo,StrictMode} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  );
});

export default MyApp;
