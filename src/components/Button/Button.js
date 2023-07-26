import "./styles.scss";
import LoginIcon from "@mui/icons-material/Login";

export default function Button({
  className,
  buttonName = "Button",
  icon = <LoginIcon />,
}) {
  return (
    <button id="button" className={className}>
      {icon}
      {buttonName}
    </button>
  );
}
