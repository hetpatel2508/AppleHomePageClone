import Navbar from "./Components/Nav/Navbar.jsx";
import Content_body from "./Components/Content/Content_body.jsx";
import GridContent from "./Components/Grid Content/GridContent.jsx";
import React from "react";
import './App.css'
import VideoRun from "./Components/Video/VideoRun.jsx";

function App() {
  const [navToggle, setNavToggle] = React.useState(false);

  return (
    <>
      <Navbar Toggle={navToggle} setToggle={setNavToggle}></Navbar>

      {
        navToggle ? null :
          <>
            <Content_body></Content_body>
            <VideoRun />
            <GridContent></GridContent>
          </>
      }

    </>
  )
}

export default App