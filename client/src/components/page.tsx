import React from "react";
import Header from "./header";
import Footer from "./footer";

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
