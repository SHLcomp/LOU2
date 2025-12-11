import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Lenis from "lenis";

function App() {
    const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);





  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }
  ])
  return (
    < RouterProvider router={router}/>
  );
}

export default App;
