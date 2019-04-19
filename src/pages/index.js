import React from 'react';
import { Helmet } from 'react-helmet';

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gatsby Solo React-Helmet | AtomicGatsby</title>
      <link rel="canonical" href="http://atomicgatsby.com/solo/react-helmet" />
    </Helmet>
    <div>
      Hi, I'm a Gatsby Solo project from{' '}
      <a href="https://AtomicGatsby.com">AtomicGatsby.com</a>!
    </div>
  </>
);
