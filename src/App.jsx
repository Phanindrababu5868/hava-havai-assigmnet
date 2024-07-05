import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AirPorts from "./components/AirPorts";

import AirPortDetails from "./components/AirPortDetails";

import AppLayOut from "./AppLayOut";

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <AirPorts />,
      },
      {
        path: "/:id",
        element: <AirPortDetails />,
      },
    ],
  },
]);

function App() {
  // return (
  //   <>
  //     <AppLayOut />
  //     {/* <Header />
  //     <div style={{ display: "flex" }}>
  //       <SideBar />
  //     </div> */}
  //   </>
  // );
  return <RouterProvider router={router} />;
}

export default App;
