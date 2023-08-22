import { Route } from "react-router-dom/cjs/react-router-dom.min";
import mainpage from "../compoment/mainpage";
import Addtodo from "../app-todo/AddToDo";
import ViewPage from "../ViewPage/viewpage";

const Routes = () => {
  return (
    <>
      <Route path="/" component={mainpage} exact />
      <Route path="/add" component={Addtodo} />
      {/* <Route path="/view/:id" component={ViewPage} exact /> */}
      <Route path="/view/" component={ViewPage} exact />
    </>
  );
};

export default Routes;
