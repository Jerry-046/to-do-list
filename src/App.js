import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./routes/routes";
import "./styles/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
