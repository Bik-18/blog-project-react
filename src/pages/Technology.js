import React, { useContext } from "react";
import "./Bollywood.css";
import { DataContext } from "../DataContext/DataContext";
import BlogCard from "../components/BlogCard";


const Technology = () => {
    const datas = useContext(DataContext);
    const filteredData = datas.filter((data) => {
        return (data.category === "tech")
    })
    const top = filteredData.filter((data) => {
        return (data.mark === "top")
    })
    let a = (Math.floor(Math.random() * 10)) % 8;
    const res = filteredData.map((data) => {
        return (<BlogCard data={data} key={data.id}/>)
    })
    const res1 = top.map((data) => {
        return (<BlogCard data={data} key={data.id}/>)
    })
    return (
        <>
            <h1 className="main-title">Technology</h1>
            <div className="main-container">

                <div className="post-container">
                    {res}
                </div>

                <aside>
                    <div className="top-post-title main-title"><span>Top</span><span> Posts</span></div>
                    <img src={filteredData[a].pika} width="100px" height="80px" className="img-top-post" alt="piku" />
                    <div className="yyy">
                        <div className="card-title"> {filteredData[a].title}</div>
                        <div className="card-para"> {filteredData[a].para}</div>
                        <div>
                            <span className="card-keyword">{filteredData[a].key}</span> <span>/ {filteredData[a].datee}</span>
                        </div>
                    </div>
                    {res1}
                    <div className="advertisement">
                        <h1>Advertisements</h1>
                    </div>
                </aside>
            </div>
        </>
    )
}
export default Technology;