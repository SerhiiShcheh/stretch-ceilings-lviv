import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Landing = lazy(() =>
  import(
    /* webpackChunkName: 'editor' */
    /* webpackPrefetch: true */
    "@pages/landing"
  )
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
      </Switch>
    </Router>
  );
}

export default App;
