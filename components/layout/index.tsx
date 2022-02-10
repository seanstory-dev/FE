import React from "react";
import Head from "next/head";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>{/* <link rel="icon" href="/favicon.ico" /> */}</Head>
      <header>
        <i className="ic-alert"></i>header
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
