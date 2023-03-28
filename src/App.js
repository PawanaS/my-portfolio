import React, { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [name, setName] = useState("Pawana(Paula)");
  const [title, setTitle] = useState("Web Developer");
  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo dui eget nisi euismod luctus. Aliquam tincidunt dolor mauris, eget gravida quam sodales et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ut ligula velit."
  );

  useEffect(() => {
    document.title = `${name} | Portfolio`;
  }, []);

  return (
    <div className="App">
      <header>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </header>
      <main>
        <section>
       
          <h3>About Me</h3>
          <p>{about}</p>
        </section>
            {/* <img className="img" src="pic-for-portfolio.jpg" width="200" height="200"></img> */}
        <section>
     
          <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </section>
        <section>
          <h3>Projects</h3>
          <ul>
            <li>
              <a href="#">Project 1</a>
            </li>
            <li>
              <a href="#">Project 2</a>
            </li>
            <li>
              <a href="#">Project 3</a>
            </li>
          </ul>
        </section>
        <section>
          <h3>Contact Me</h3>
          <ul>
            <li>Email: panna.na@gmail.com</li>
            <li>Phone: 4436301829</li>
            <li>
              LinkedIn:{" "}
              <a href="#">link to LinkedIn</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;