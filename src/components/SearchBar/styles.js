import styled, { css, keyframes } from "styled-components";
import { COLOR } from "../../styles/colors";
import SearchIcon from "@mui/icons-material/Search";
export const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 5px;
  background: "#222831";
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ hover }) =>
    hover &&
    css`
      width: 20%;
    `}
`;
export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 80.5%;
  height: 42.5px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 2rem;
  border-radius: 50px;
  padding: 0 30px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  font-size: 16px;
  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

const fadedIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
export const IconMagnifyingGlass = styled(SearchIcon)`
  height: 1.25rem;
  width: 1.25rem;
  z-index: 10;
  animation: ${fadedIn} 1s linear;
  color: ${COLOR.fourth};
`;
