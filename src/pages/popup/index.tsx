import { createRoot } from "react-dom/client";
import Popup from "./Popup";

function init() {
  const appContainer = document.getElementById("popup");
  if (!appContainer) {
    throw new Error("Can not find #popup");
  }
  const root = createRoot(appContainer);
  root.render(
    <Popup />
  );
}

init();
