import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class newsComponent extends Component {
  static defaultProps = {
    country : 'ca',
    pageSize: 18,
    category:'general'

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string
  }
  
  capitalizeFirstLetter =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    console.log("this is a constructor from news component")
    this.state = {
        articles: [],
        loading:true,
        page:1,
        totalResults: 0,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - DailyNews`;
   
  }
  async componentDidMount(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(70);
    console.log(parseData);
    this.setState({
      articles:parseData.articles,
      totalArticles:parseData.totalResults,
      loading:false
    })
    this.props.setProgress(100);
    
  }

  fetchMoreData = async () => {
    this.setState({page:this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalArticles:parseData.totalResults
    })
    
  }

  render() {
    return (
      <>
        <h2 className="my-3 text-center" id="headline">Top ({this.capitalizeFirstLetter(this.props.category)}) Headlines - Canada</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.dataLength? <Spinner/>:""}
        >
        <div className="container">
          <div className="row">
            {this.state.articles.map((element,index) => {
              return <div className="col-md-4" key = {index}>
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
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    );
  }
}

export default newsComponent;
