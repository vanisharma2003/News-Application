import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
  let url= `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=1f8f01c32eb29acfff77e2337d772a30`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.articles);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index) => (
        <Newsitem key={index} title={news.title} description={news.description} src={news.image} url={news.url} />
      ))}
    </div>
  );
};

export default Newsboard;











