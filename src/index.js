import { createRoot } from "react-dom/client";
import CounterApp from "./CounterApp";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<CounterApp value={100} />);
