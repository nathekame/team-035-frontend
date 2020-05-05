import React from 'react';
import App from 'next/app';
import '../public/assets/styles.scss';

// This default export is required in a new `pages/_app.js` file.

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Component {...pageProps} />
      </div>
    );
  }
}
export default MyApp;
