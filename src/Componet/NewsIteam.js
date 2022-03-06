import React, { Component } from 'react'

export class NewsIteam extends Component {

    render() {
        let { title, description, imageurl, Url,author,publishedAt } = this.props
        return (
            <div>
                <div className="card my-3" >
                {/* style={{ width: '18rem' }} */}
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-danger"> By-{!author?"Unknown":author}  publised-{publishedAt}</small></p>
                        <a href={Url} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsIteam
