import meme from "./stalin.jpg";
import "./App.css";
import React, { useState } from "react";
// need a walley
function BlogPage() {
  return (
    <div className="Blog">
      <div className="Posts">
        <p>This is where my post go</p>
      </div>
      <div className="Comments">
        <p>This is where the comments will go</p>
      </div>
    </div>
  );
}

function ContentPage() {
  return (
    <div className="Content">
      <div className="Videos"></div>
      <div className="Stream">
        <p>
          {" "}
          IDK my stream schedule yet but I'd like to program some
          <br />
          like light indicates when I am live on twitch
        </p>
        <a
          className="App-link"
          href="https://twitch.tv/arhwalley"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to see me live
        </a>
      </div>
    </div>
  );
}

function AboutPage() {
  //Loads About Page
  return (
    <div className="Biography">
      <p>
        When I was a wee lad <br />
        I'd ask my grandparents
        <br />
        May I please have Bread!
      </p>
    </div>
  );
}

function HomePage() {
  return (
    <div className="Landing">
      <p>
        Welcome to Walley's World Sickos! <br /> Please Enjoy Your Stay
      </p>
      <img src={meme} />
      <br />
    </div>
  );
}

function App() {
  const [page, setPage] = useState("Home Page");
  // Add new Turn Page fun for Home Page and Content see below
  const goToAboutPage = () => setPage("About Page");
  const goToContentPage = () => setPage("Content Page");
  const goToBlogPage = () => setPage("Blog Page");
  const goToHomePage = () => setPage("Home Page");
  let pageToRender;

  if (page === "About Page") {
    pageToRender = <AboutPage />;
  } else if (page === "Content Page") {
    pageToRender = <ContentPage />;
  } else if (page === "Blog Page") {
    pageToRender = <BlogPage />;
  } else {
    pageToRender = <HomePage />;
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="Nav-Bar">
          <div className="Home-Button" onClick={goToHomePage}>
            Home Page{" "}
          </div>
          <div className="About-Button" onClick={goToAboutPage}>
            About Me
          </div>
          <div className="Content-Button" onClick={goToContentPage}>
            Content
          </div>
          <div className="Blog-Button" onClick={goToBlogPage}>
            Blog
          </div>
        </div>

        <div className="Master-List">{pageToRender}</div>
      </header>
    </div>
  );
}

export default App;
