import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Восстановление пути после редиректа с 404.html (для GitHub Pages)
const redirect = sessionStorage.getItem('redirect');
if (redirect) {
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, '', redirect);
}

createRoot(document.getElementById("root")!).render(<App />);
