import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./Components/Blog";
import About from "./Components/About";
import CreateBlog from "./Components/CreateBlog";
import Login from "./Components/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/blogs/:blogId">
            <Blog />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/admin">
            <CreateBlog />
          </Route>
          <Route path="/">
            <Body />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
