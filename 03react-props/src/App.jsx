import React, { useState } from "react";

function App() {
    const [modal, setModal] = useState("test")

    function modalClick() {
        setModal("hi")
    }

  return (
    <div>
      <h3>props</h3>
      <p>Lorem ipsum dolor</p>
      {modal}
      <ChildComp />
      <button onClick={}></button>
    </div>
  );
}

function Childcomp() {
  return <div>childComp</div>;
}

export default App;
