import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useEffect } from "react";
import Lenis from "lenis";

function App() {
 useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);





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
