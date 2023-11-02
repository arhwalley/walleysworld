import meme from "./stalin.jpg";
import "./App.css";
import React, { useState } from "react";
function AboutPage() {
  //Loads About Page 
  return(  
     <div className="Biography">
     <p>When I was a wee lad <br/>I'd ask my grandparents 
     <br/>May I please have Bread!</p></div>);
}
function HomePage() {
  return (
    <div className="Landing">
      <p>Welcome to Walley's World Sickos! <br/> Please Enjoy Your Stay</p>
      <img src={meme} />
      <br/>
      <a
        className="App-link"
        href="https://twitch.tv/arhwalley"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live MWF 6pm EST
      </a>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("Home Page"); 
  // Add new Turn Page fun for Home Page and Content see below
  const goToAboutPage = () => setPage("About Page")
  const goToHomePage = () => setPage("Home Page");
  return (
    <div className="App">
      <header className="App-header">
        <div className="Nav-Bar">
        <div className="About-Button"onClick={goToAboutPage}>About Me</div>
        <div className="Home-Button"onClick={goToHomePage}>Home Page </div>
        {/* onClick={goToContentPage}>About Me */}
        </div>

        <div className ="Master-List">
           {page == "About Page" ? <AboutPage /> : <HomePage />}
        </div>
      </header>
    </div>
  );
}

export default App;
