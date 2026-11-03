  import { createRoot } from "react-dom/client";
  import App, { router } from "./app/App.tsx";
  import "./styles/index.css";

  // Every route is prerendered at build time. Wait until the router has loaded
  // the matched page so React swaps in identical markup with no blank frame.
  function mount() {
    createRoot(document.getElementById("root")!).render(<App />);
  }

  if (router.state.initialized) mount();
  else {
    const unsubscribe = router.subscribe((state) => {
      if (!state.initialized) return;
      unsubscribe();
      mount();
    });
  }
