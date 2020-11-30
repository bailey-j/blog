import React from "react";
import { Link } from "react-router-dom";
import { Page } from "../components/page";
import BlogFeed from "../components/BlogFeed";
import NewsItem from "../components/NewsItem";

export function Tech() {
  const [news, setNews] = React.useState<any[] | undefined>([]);
  const [error, setError] = React.useState("");
  const [loading, isLoading] = React.useState(true);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  React.useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/jobstories.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((news) => setNews(news.splice(0, 20)))

      .catch(setError);
  }, []);

  wait(1000).then(() => isLoading(false));
  return (
    <Page>
      <div className="hero-container">
        <h1>Tech Jobs</h1>
      </div>
      <div className="container">
        <h3>View the latest Tech jobs below (from Hacker News)</h3>
        <div className="cards__container">
          {loading ? (
            <h6>Loading...</h6>
          ) : (
            <ul className="cards__items">
              {news.map((newsId, key) => (
                <li key={key}>
                  <NewsItem newsId={newsId} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Page>
  );
}
