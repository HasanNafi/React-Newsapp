import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class newsComponent extends Component {
  
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
    let url = "https://newsapi.org/v2/top-headlines?country=ca&apiKey=9b1c21b08f5d42b39f926095076b871d&page=1&pageSize=9";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles:parseData.articles,totalArticles:parseData.totalResults})
   

  }
  handlePreviousClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=ca&apiKey=9b1c21b08f5d42b39f926095076b871d&page=${this.state.page-1}&pageSize=9`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page-1,
      articles:parseData.articles
    })
  }
  handleNextClick = async ()=>{
  
    if(this.state.page +1 > Math.ceil(this.state.totalArticles/9)){
       
    }
    else{
      console.log("else")
      let url = `https://newsapi.org/v2/top-headlines?country=ca&apiKey=9b1c21b08f5d42b39f926095076b871d&page=${this.state.page+1} &pageSize=9`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page+1,
        articles:parseData.articles
      })
    }
    
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="my-3">News Daily - top headline</h2>
        <div className="row">
        {this.state.articles.map((element) => {
          return <div className="col-md-4" key = {element.url}>
          <NewsItem
            title={element.title?element.title.slice(0, 45):""}
            description={element.description?element.description.slice(0,88):""}
            imageUrl= {element.urlToImage}
            newsUrl = {element.url}
          />
        </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default newsComponent;
