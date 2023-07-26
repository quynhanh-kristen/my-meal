import "./styles.scss";
import logo from "../../assets/img/Logo.png";
export default function NavigationBar() {
  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <div>
          <span>Home</span>
          <span>Category</span>
          <span>Specials</span>
          <span>Blog</span>
          <span>About</span>
        </div>
      </nav>
    </>
  );
}
