import React, { useState, useEffect } from "react";
import "./App.css";
import {Button, Card }from 'react-bootstrap';


// import { getMovie } from './services/NewsDataApi';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import axios from "axios";
// import NewsDataApi from "./services/NewsDataApi";
//import MyPortfolio from "./components/PortfolioPic";
// import Image from './PortfolioPic/pic-portfolio.jpg';
// import pic-for-portfolio.jpg from "./components";


function App() {
 
  const [data, setData] = useState([])
  const getNews =async () => {
    
    const res = await axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=20717b0b07314318a23cdae8c3825502")
      console.log(res.data)
      const articles= res.data.articles.slice(0,3)
      console.log(articles)
      setData(articles)
  }
   useEffect(()=>{
    getNews()
   },[])

   

  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>


      <div className="container">
        <button className="btn" onClick={getNews}>click for News</button>
      </div>


      <div className="container1">
        <div className="row">
          {
            data.map((value) => {
              return (
                <div className="col-3">
                  <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="value.urlToImage" />
                    <Card.Body>
                      <Card.Title>{value.title}</Card.Title>
                
                      <Card.Text>{value.description} </Card.Text>
                      <Button variant="primary">click for more </Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })
          }

        </div>

      </div>
    </div>



  )
};
export default App;

