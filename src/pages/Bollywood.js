import { useContext } from "react";
import { DataContext } from "../DataContext/DataContext";
import BlogCard from "../components/BlogCard";
import "./Bollywood.css";



const Bollywood = (props) => {
    const datas = useContext(DataContext);
    // console.log(datas);

    const filteredData = datas.filter((data) => {
        return (data.category === "bollywood");
    })

    const top = filteredData.filter((data) => {
        return (data.mark === "top");
    })
    let a = (Math.floor(Math.random() * 10)) % 10;
    const res = filteredData.map((data) => {
        // if(data.category==="bollywood")
        return (

            <BlogCard data={data} key={data.id}/>
        )
    })

    const res1 = top.map((data) => {
        // if(data.category==="bollywood")
        return (

            <BlogCard data={data} key={data.id}/>
        )
    })
    return (
        <>
            <h1 className="main-title">Bollywood</h1>
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
                    {res1}
                    <div className="advertisement">
                        <h1>Advertisements</h1>
                    </div>
                </aside>
            </div>

        </>
    )
}
export default Bollywood;