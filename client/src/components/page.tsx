import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export function Page(props) {
  return (
    <div className="main-container">
      <Header />
      <div></div>
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  );
}
