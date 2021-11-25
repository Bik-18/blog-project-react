import React,{ useContext } from "react";
import { DataContext } from "../DataContext/DataContext";
import BlogCard from "../components/BlogCard";
import "./Bollywood.css";

const Hollywood = (props) => {
    const datas = useContext(DataContext);
    console.log(datas);
    const filteredData = datas.filter((data) => {
        return (data.category === "hollywood");
    })
    let a = (Math.floor(Math.random() * 10)) % 9;
    const res = filteredData.map((data) => {
        // if(data.category==="bollywood")
        return (

            <BlogCard data={data} />
        )
    })
    return (
        <>
            <h1 className="main-title">Hollywood</h1>
            <div className="main-container">
                <div className="post-container">
                    {res}
                </div>

                <aside>
                    <div className="top-post-title main-title"><span>Top</span><span> Posts</span></div>
                    <img src={filteredData[a].pika} width="100px" height="80px" className="img-top-post" alt="piku"/>
                    <div className="yyy">
                        <div className="card-title"> {filteredData[a].title}</div>
                        <div className="card-para"> {filteredData[a].para}</div>
                        <div>
                            <span className="card-keyword">{filteredData[a].key}</span> <span>/ {filteredData[a].datee}</span>
                        </div>
                    </div>
                    {res}
                    <div className="advertisement">
                        <h1>Advertisements</h1>
                    </div>
                </aside>
            </div>
        </>
    )

}


export default Hollywood;