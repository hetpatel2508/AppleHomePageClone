import Navbar from "./Components/Nav/Navbar.jsx";
import Content_body from "./Components/Content/Content_body.jsx";
import GridContent from "./Components/Grid Content/GridContent.jsx";
import React from "react";
import './App.css'

function App() {
  const [navToggle, setNavToggle] = React.useState(false);

  return (
    <>
      <Navbar Toggle={navToggle} setToggle={setNavToggle}></Navbar>

      {
        navToggle ? null :
          <>
            <Content_body></Content_body>
            <GridContent></GridContent>
          </>
      }

    </>
  )
}

export default App