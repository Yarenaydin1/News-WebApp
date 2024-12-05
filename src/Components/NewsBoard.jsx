import { useState } from "react";
import { useEffect } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'; 
const NewsBoard = ({category}) => {

const [articles , setArticles]= useState([]);

useEffect(() => {
  let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
  fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
}, [category])
  return (
    <div>
      <h2 className="text-center" style={{ fontFamily: "'Merriweather', serif", fontWeight: "700" }}>
  Latest <span className="badge bg-danger mt-3"> News </span>
</h2>
<div
        className="d-flex flex-wrap justify-content-center align-items-start gap-3 mt-4"
        style={{ padding: "20px" }}
      >
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
     
    </div>
  )
}
NewsBoard.propTypes = {
  category: PropTypes.string.isRequired,  
};

export default NewsBoard
