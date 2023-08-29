import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Routes/Main";
import Adult from "./Routes/Adult";
import Child from "./Routes/Child";
import Reference from "./Routes/Reference";
import ImgTest from "./Routes/Imgtest";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/adult">
          <Adult />
        </Route>
        <Route path="/child">
          <Child />
        </Route>
        <Route path="/reference">
          <Reference />
        </Route>
        <Route path="/imgtest">
          <ImgTest />
        </Route>
        <Route path="">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
