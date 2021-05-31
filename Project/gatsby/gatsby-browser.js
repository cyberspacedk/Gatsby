import React from 'react';

import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderCtx';

// RUNS on browser environment

// functions that wrap pages in custom wrapper
// element - its a page
// props - its a page propos
export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
