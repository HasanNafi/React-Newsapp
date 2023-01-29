import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)} - DailyNews`;
  
  const capitalizeFirstLetter =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    console.log(url)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    console.log(parseData); 
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
 
    props.setProgress(100);
    
  }

  useEffect (() => {
    updateNews();
    // eslint-disable-next-line
  },[] )

  // const handlePreviousClick = async () => {
  //   setPage(page - 1)
  //   updateNews();
  // }
  // const handleNextClick = async () => {
  //   setPage(page + 1)
  //   updateNews();
  // }

  const fetchMoreData = async () => {
    setPage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
  };

    return (
      <>
        <h2 className="my-3 text-center" id="headline">Top ({capitalizeFirstLetter(props.category)}) Headlines - Canada</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={ <Spinner/>} 
        >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key = {element.url}>
              <NewsItem
                title={element.title?element.title.slice(0, 45):""}
                description={element.description?element.description.slice(0,88):""}
                imageUrl= {element.urlToImage}
                newsUrl = {element.url}
                author = {element.author}
                date = {element.publishedAt}
                source={element.source.name}
              />
            </div>
            })}
          </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button disabled={page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button disabled={page +1 > Math.ceil(totalArticles/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    );
  
}
News.defaultProps = {
  country : 'ca',
  pageSize: 18,
  category:'general'

}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category:PropTypes.string
}

export default News;
