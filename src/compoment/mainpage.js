import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./navbar";
import { FaRegEye } from "react-icons/fa";

const mainpage = () => {
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  return (
    <>
      <Navbar />
      <div className="todo_container">
        <h3>Your To Do:</h3>
        {getTodo.map((el, index) => (
          <>
            <div className="single_todo">
              {el}
              {/* <Link to={`/view/${index}`}> */}
              <Link to={`/view?id=${index}`}>
                <FaRegEye size={"1.4rem"} />
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default mainpage;
