import React from "react";
import "./BlogCard.css";




const BlogCard = (props) => {

    const { title, para, pika, key, datee, link } = props.data;
    // console.log(props.data);
    return (
        <>
            <div className="blog-card">
                <div className="pika">
                    <img src={pika} alt="imagex" />
                </div>
                <div className="container">
                    <div className="card-title"> {title}</div>
                    <div className="card-para"> {para}</div>
                    <div>
                        <span className="card-keyword">{key}</span>
                        <span>/ {datee}</span>
                        <span className="link-container-btn"><a href={link} target="_blank" rel="noreferrer"> <button>Link</button></a> </span>
                    </div>
                    {/* <div className="link-container-btn">
                        <button>Link</button>
                    </div> */}
                </div>

            </div>

        </>

    );
}


export default BlogCard;