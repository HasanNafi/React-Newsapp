import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let style = {
      border: "1px solid #BFBFBF",
      backgroundColor: "white",
      boxShadow: "10px 10px 5px #aaaaaa",
      width: "22rem" , 
      height:"30rem", 
      top:'0px'
    }
 
    let {title,description, imageUrl, newsUrl,author, date,source} = this.props;
    return (
      <div className='my-4'>
        <div className="card" style={style}>
          <div className='d-flex flex-wrap justify-content-end'>
            <span className='position-absolute top-0 p-2 badge  bg-danger' style={{zIndex:'1'}} >{source}</span>
          </div>
          <img style={{height:"12rem"}} src={!imageUrl?"https://static.dw.com/image/60396068_6.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target= "_blank" rel="noreferrer" className="btn btn-sm btn-success rounded-pill">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
