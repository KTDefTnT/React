import { useContext } from "react";
import { ThemeContext } from "./const";

export default function FunctionPage () {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.className}>
      FunctionPage
      </div>
  );
}