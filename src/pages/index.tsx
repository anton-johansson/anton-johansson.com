import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Home from '../components/Sections/Home';
import Recommendations from '../components/Sections/Recommendations';
import Resume from '../components/Sections/Resume';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Index: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Home />
      <About />
      <Resume />
      <Recommendations />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Index;
