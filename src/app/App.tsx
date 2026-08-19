import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LazyMotion, domAnimation } from "motion/react";

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <RouterProvider router={router} />
    </LazyMotion>
  );
}
