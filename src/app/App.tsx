import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";
import { Loader } from "../components/shared/Loader";

export default function App() {
  return (
    <>
      <Loader />
      <RouterProvider router={router} />
      <Toaster position="bottom-right" richColors />
    </>
  );
}
