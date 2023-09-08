import "./App.css";
import Card from "./components/Card";

// CONTEXT
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <Card />
      <ul className="background bg-[#4e54c8] dark:bg-[#32364f]">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
