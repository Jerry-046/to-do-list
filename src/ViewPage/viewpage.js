import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../compoment/navbar";
//import { useParams } from "react-router-dom/cjs/react-router-dom";

const ViewPage = () => {
  const history = useHistory();

  // const getParams = useParams();
  // const getID = getParams.id;

  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  const getLocation = useLocation();
  const getURLParams = new URLSearchParams(getLocation.search);
  const getID = getURLParams.get("id");
  const getData = getStorage[getID];

  const goBack = () => {
    history.push("/");
  };

  const deleteTodo = () => {
    getStorage.splice(getID, 1);
    localStorage.setItem("todo", JSON.stringify(getStorage));
    history.replace("/");
  };
  return (
    <>
      <Navbar />
      <div className="todo_container">
        <div
          style={{
            background: "#e7e7e7",
            padding: "1rem",
            borderRadius: "0.7rem",
            paddingLeft: "2rem",
            fontSize: "1rem",
          }}
        >
          {getData}
        </div>
      </div>
      <button onClick={goBack}>Go Back</button>
      <button onClick={deleteTodo}>Delete</button>
    </>
  );
};

export default ViewPage;
