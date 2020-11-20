import React from "react";
import { Page } from "../components/page";
import BlogFeed from "../components/BlogFeed";

export function Home() {
  return (
    <Page>
      <div className="hero-container">
        <h1>Welcome</h1>
      </div>
      <div>
        <BlogFeed />
      </div>
    </Page>
  );
}
