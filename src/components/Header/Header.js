import "./styles.scss";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import LoginIcon from "@mui/icons-material/Login";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="search-container">
          <Button
            className="login-button"
            buttonName="Login"
            icon={<LoginIcon />}
          />
          <SearchBar className="search-bar" />
        </div>
        <NavigationBar />
      </header>
    </>
  );
}
