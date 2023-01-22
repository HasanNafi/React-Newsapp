import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class newsComponent extends Component {
  static defaultProps = {
    country : 'ca',
    pageSize: 9,
    category:'general'

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string
  }
  
  constructor(){
    super();
    console.log("this is a constructor from news component")
    this.state = {
        articles: [],
        loading:false,
        page:1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=9b1c21b08f5d42b39f926095076b871d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles:parseData.articles,
      totalArticles:parseData.totalResults,
      loading:false
    })
   

  }
  handlePreviousClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=9b1c21b08f5d42b39f926095076b871d&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page-1,
      articles:parseData.articles,
      loading:false
    })
  }
  handleNextClick = async ()=>{
  
    if(!(this.state.page +1 > Math.ceil(this.state.totalArticles/this.props.pageSize))){
      console.log("else")
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=9b1c21b08f5d42b39f926095076b871d&page=${this.state.page+1} &pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page+1,
        articles:parseData.articles,
        loading: false
      })
    }
    
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="my-3 text-center">Top Headlines - Canada</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element) => {
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
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default newsComponent;
