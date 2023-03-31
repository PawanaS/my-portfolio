import React, { useState, useEffect } from "react";
import "./App.css";
import {Button, Card }from 'react-bootstrap';
// import {image} from './components/image.jpg';
// import { getNews } from './services/NewsDataApi';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import axios from "axios";
// import { Link } from 'react-router-dom';
// import NewsDataApi from "./services/NewsDataApi";


//---props has no use here---
// function App(props) {
//   const  [data, setData] = useState([])
// console.log(props)

function App() {
 

  const [data, setData] = useState([])

  
   
  const getNews =async () => {
    
    const res = await axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=20717b0b07314318a23cdae8c3825502")
      console.log(res.data)
      const articles= res.data.articles.slice(0,4)
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
        <div>
          {/* <img src={image} alt="my image" /> */}
        
        </div>
        <About />
        <Projects />
        <Contact />
      </main>


      <div className="container1"> 
      <button className="btn" onClick={getNews}>Check out the latest News around the world </button>
      </div>  
      

      <div className="container2" >
        <div className="row">
          {
            data.map((value,i) => {
              return (
                <div className="col-3"key={i}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={value.urlToImage} />
                    <Card.Body className="bg-light">
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

