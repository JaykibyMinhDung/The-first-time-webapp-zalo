import React from "react";

import { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeaderMenu from "../components/navbar/HeaderMenu";

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <HeaderMenu />
      <Footer />
    </Fragment>
  );
}
