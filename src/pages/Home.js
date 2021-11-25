import React, { useContext } from "react";
import "./Home.css";
import { DataContext } from "../DataContext/DataContext";
import "./Bollywood.css";
import BlogCard from "../components/BlogCard";


const Home = (props) => {
    const datas = useContext(DataContext);
    const picData = datas.filter((data) => {
        return (data.category === "nature")
    })
    let a = (Math.floor(Math.random() * 10)) % 5, b = (Math.floor(Math.random() * 10)) % 5, c = (Math.floor(Math.random() * 10)) % 5;


    const theLatest = datas.filter((data) => {
        return (data.mark === "latest");
    })
    const res = theLatest.map((data => {
        return (<BlogCard data={data} key={data.id} />)
    }))
    const topPost = datas.filter((data) => {
        return (data.mark === "top");
    })
    const res1 = topPost.map((data) => {
        return (<BlogCard data={data} key={data.id} />)
    })

    let e = (Math.floor(Math.random() * 10)) % topPost.length;
    // console.log(a + " " + b + " " + c);
    return (
        <>

            <div className="home-image-container">
                <div className="image-1">
                    <img src={picData[a].pika} alt="piku" />
                </div>
                <div className="image-2">
                    <div className="img1">
                        <img src={picData[b].pika} alt="piku" />
                    </div>
                    <div className="img2">
                        <img src={picData[c].pika} alt="piku" />
                    </div>
                </div>
            </div>
            <div className="top-post-title main-title"><span>Latest</span><span> Articles</span></div>
            <div className="the-latest">
                {res}
            </div>
            <aside>
                <div className="top-post-title main-title"><span>Top</span><span> Posts</span></div>
                <img src={topPost[e].pika} width="100px" height="80px" className="img-top-post" alt="piku" />
                <div className="yyy">
                    <div className="card-title"> {topPost[e].title}</div>
                    <div className="card-para"> {topPost[e].para}</div>
                    <div>
                        <span className="card-keyword">{topPost[e].key}</span> <span>/ {topPost[e].datee}</span>
                    </div>
                </div>
                {res1}
                <div className="advertisement">
                    <h1>Advertisements</h1>
                </div>
            </aside>


            {/* <div className="latest-stories-container"> */}
            <div className="latest-stories-xxx">
                <div className="top-post-title main-title">Latest Stories</div>
                <div className="latest-stories-container">
                    {res}

                </div>
            </div>
            {/* </div> */}

        </>
    )
}
export default Home;