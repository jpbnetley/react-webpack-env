import { initEnvironment } from './utils/env/init'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

initEnvironment()

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
