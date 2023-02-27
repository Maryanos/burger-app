import Html5 from "./Html5"
import Css3 from "./Css3"
import JavaScript from "./JavaScript"
import React from "./React"

function Technologies() {
  return (
    <div className="technologies">
      <h1>Technologies Used</h1>
      <div className="technologies__langs">
        <Html5 />
        <Css3 />
        <JavaScript />
        <React />
      </div>
    </div>
  )
}

export default Technologies
