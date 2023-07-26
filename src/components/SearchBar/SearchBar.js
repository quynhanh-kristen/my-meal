import { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { Container, IconMagnifyingGlass, SearchInput } from "./styles.js";

export default function SearchBar({ className }) {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);
  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}
      className={className}
    >
      <SearchInput
        ref={targetRef}
        showSearchInput={showSearchInput}
        placeholder="Enter recipes, dish, meal,..."
      />
      {showSearchInput ? <></> : <IconMagnifyingGlass />}
    </Container>
  );
}
