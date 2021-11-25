import React, { useContext } from "react";
import { DataContext } from "../DataContext/DataContext";
import BlogCard from "../components/BlogCard";
import "./Bollywood.css";

const Food = () => {
    const datas = useContext(DataContext);
    // console.log(datas);
    const filteredData = datas.filter((data) => {
        return (data.category === "food");
    })

    let a = (Math.floor(Math.random() * 10)) % 10;
    const res = filteredData.map((data) => {
        // if(data.category==="bollywood")
        return (

            <BlogCard data={data} key={data.id}/>
        )
    })
    // console.log(res);
    return (
        <>
            <h1 className="main-title">Food</h1>
            <div className="main-container">
                <div className="post-container">
                    {res}
                </div>

                {/* <div className="top-post">
                <div className="top-post-title"><span>Top</span><span> Posts</span></div>
                {datas}

            </div> */}
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
                    {res}
                    <div className="advertisement">
                        <h1>Advertisements</h1>
                    </div>
                </aside>
            </div>
        </>
    )
}
export default Food;