import React from "react";
import './main.scss';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {NotFound} from "./pages/NotFound";
import {Category} from "./pages/Category";
import {Recipe} from "./pages/Recipe";

function App() {
  return (
    <>
      <Header/>
      <main className="container content">
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/category/:name" exact component={Category}/>
              <Route path="/meals/:id" exact component={Recipe}/>
              <Route component={NotFound}/>
          </Switch>
      </main>
      <Footer/>
    </>
  );
}

export default App;
