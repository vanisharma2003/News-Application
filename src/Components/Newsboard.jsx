import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Pagination from "./Pagination";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(3); // Number of articles per page

  useEffect(() => {
    const fetchNews = async () => {
      let url= `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=dc6b4a54b85a7a37b51085890dbf395f`;
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    };

    fetchNews();
  }, [category]);

  // Logic to get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="text-center">
        Latest<span className="badge bg-danger">News</span>
      </h2>
      {currentArticles.map((news, index) => (
        <Newsitem
          key={index}
          title={news.title}
          description={news.description}
          src={news.image}
          url={news.url}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Newsboard;












