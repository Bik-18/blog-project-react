import React from "react";
import "./BlogCard.css";




const BlogCard = (props) => {
    
    const { title, para, pika,key,datee } = props.data;
    // console.log(props.data);
    return (
        <div className="blog-card">
            <div className="pika">
                <img src={pika} alt="imagex" />
            </div>
            <div className="container">
                <div className="card-title"> {title}</div>
                <div className="card-para"> {para}</div>
                <div>
                <span className="card-keyword">{key}</span> <span>/ {datee}</span>
                </div>
            </div>
        </div>
    );
}


export default BlogCard;