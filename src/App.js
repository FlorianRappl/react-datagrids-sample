import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const ReactDataGridPage = React.lazy(() => import("./pages/ReactDataGridPage"));
const WijmoPage = React.lazy(() => import("./pages/WijmoPage"));
const SelectPage = () => (
  <div>
    <h1>Select Grid</h1>
    <ul>
      <li>
        <Link to="/react-data-grid">React Data Grid</Link>
      </li>
      <li>
        <Link to="/wijmo">Wijmo</Link>
      </li>
    </ul>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Suspense fallback={<b>Loading ...</b>}>
          <Switch>
            <Route path="/react-data-grid" component={ReactDataGridPage} />
            <Route path="/wijmo" component={WijmoPage} />
            <Route component={SelectPage} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
