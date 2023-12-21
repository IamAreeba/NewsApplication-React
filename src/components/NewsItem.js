import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props   // Using JS destructuring


    return (
      <div className='my-3'>

        <div className="card my-3" >
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
            <span className="badge rounded-pill bg-danger" > {source} </span>

          </div>


          <img src={imgUrl ? imgUrl : "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small class="text-muted">By {author} on {date}</small></p>
            {/* <p className="card-text"><small class="text-success">By {author} on {date}</small></p> */}
            <a href={newsUrl} target="_blank" className="btn btn-dark">Readmore</a>
          </div>
        </div>

      </div>
    )
  }
}

export default NewsItem
