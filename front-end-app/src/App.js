import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Subject from "./components/Subject";
import Queries from "./components/Queries";
import Exams from "./components/Exams";
import Blogs from "./components/Blogs";
import Profile from "./components/Profile";
// import TextEditor from "./components/TextEditor";

function App() {
  // const [signIn, setsignIn] = useState(false);
  return (
    <>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Subject} />
        <Route path="/queries" component={Queries} />
        <Route path="/exams" component={Exams} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </>
  );
}

export default App;
