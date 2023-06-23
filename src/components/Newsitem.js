import React from 'react'

const Newsitem =(props)=> {
    let {title,description,imageurl,newsUrl,Author,date,source}=props;
    return (
      <div className='container my-3'>
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '-15px',
            top: '-12px'
          }}>
            <span className="position-absolute top-0 badge rounded-pill bg-danger">
                    {source}
                  <span className="visually-hidden">unread messages</span>
              </span>

          </div>
                  
            <img src={!imageurl?"https://i.imgur.com/TnxcegF.png":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">
                  {title}
                </h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {Author?Author:"Unknown"} On {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Details</a>
            </div>
        </div>
      </div>
    )
}
export default Newsitem