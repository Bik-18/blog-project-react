import React from "react";
import BlogCard from "./BlogCard";
import "./BlogCard.css";




const LatestStories = (props) => {
    const filteredData = props.datas.filter((data) => {
        return (data.mark === "latest");
    })

    const datas = filteredData.map((data) => {
        // if(data.category==="bollywood")
        return (

            <BlogCard data={data} />
        )
    })

    return (
        <>
            {datas}
        </>
    );
}


export default LatestStories;