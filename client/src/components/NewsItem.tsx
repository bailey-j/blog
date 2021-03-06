import React from "react";
// import PropTypes from 'prop-types'

interface Item {
  title: string;
  url: string;
  by: string;
  id: number;
  score: number;
  time: number;
  type: string;
  text?: string;
}

export default function NewsItem(props: any) {
  let newsId = props.newsId;

  const [newsItem, setNewsItem] = React.useState<Item | undefined>(undefined);
  const [error, setError] = React.useState("");
  const [loading, isLoading] = React.useState(true);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  React.useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((newsItem) => setNewsItem(newsItem))
      .catch(setError);
  }, []);

  wait(900).then(() => isLoading(false));

  return (
    <>
      {loading ? null : (
        <div>
          <h5>{newsItem?.title}</h5>
          <a href={newsItem?.url}>
            <p>Find out more HERE...</p>
          </a>
        </div>
      )}
    </>
  );
}
