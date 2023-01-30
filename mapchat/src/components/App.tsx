import React, { useState } from "react";
import Main from "./Main";
import SignIn from "./SignIn";
import config from "../config.json";

export const App = () => {
  const [name, setName] = useState("");

  if (config.signInEnabled && name === ""){
    return <SignIn setName={setName}/>;
  } else {
    return <Main name={name} />
  }
};
export default App
