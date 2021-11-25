import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DataProvider } from "./DataContext/DataContext";



import NavBar from "./components/NavBar";
import Bollywood from "./pages/Bollywood";
import Fitness from "./pages/Fitness";
import Food from "./pages/Food";
import Hollywood from "./pages/Hollywood";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import ErrorPage from "./pages/ErrorPage";
import './App.css';

function App() {
  // const [datas, setData] = useState([
  //   { id: 1, title: "the picture of mountain", para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use", category: "bollywood", pika: "./images/nat-pic-6.jpg", key: "Travel", starmark: "latest", datee: "August 21 2021" },
  //   { id: 2, title: "the picture of mountain", para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use", category: "bollywood", pika: "./images/nat-pic-3.jpg", key: "Tech", starmark: "latest", datee: "August 21 2021" },
  //   { id: 3, title: "the picture of mountain", para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use", category: "bollywood", pika: "./images/nat-pic-6.jpg", key: "Style", starmark: "latest", datee: "August 21 2021" },
  //   { id: 4, title: "the picture of mountain", para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use", category: "bollywood", pika: "./images/nat-pic-3.jpg", key: "Travel", starmark: "xxx", datee: "August 21 2021" },
  //   { id: 5, title: "ras malai", para: 29, category: "hollywood", pika: "./images/nat-pic-6.jpg", starmark: "xxx", datee: "August 21 2021" }
  // ]);

  return (

    <>
      <DataProvider>
        <main>
          <BrowserRouter>
            
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home  />
              </Route>

              <Route exact path="/bollywood">
                <Bollywood  />
              </Route>

              <Route exact path="/fitness">
                <Fitness  />
              </Route>
              
              <Route exact path="/hollywood">
                <Hollywood />
              </Route>

              <Route exact path="/technology">
                <Technology />
              </Route>
              
              <Route exact path="/food">
                <Food />
              </Route>
              
              <Route component={ErrorPage} />
            </Switch>
          </BrowserRouter>
        </main>
      </DataProvider>
    </>

  );
}

export default App;
