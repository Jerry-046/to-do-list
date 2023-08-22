import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
  return (
    <>
      <div className="nav_bar">
        To-do-v1
        <div className="menu_items">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/add">
            <div>Add To-Do</div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
