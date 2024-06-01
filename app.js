import React, { Suspense, lazy, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/common/HeaderComponent";
import BodyContentComponent from "./src/components/common/BodyComponent";
import FooterComponent from "./src/components/common/FooterComponent";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./src/components/restaurant/restaurants/RestaurantMenu";
import UserClass from "./src/class-components/UserClass";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
const AboutComponent = lazy(() =>
  import("./src/components/common/AboutComponent")
);

const AppLayout = () => {
  return (
    // <StrictMode>
    <Provider store={appStore}>
      <div id="main">
        <HeaderComponent />
        <Outlet />
        {/* <FooterComponent /> */}
      </div>
    </Provider>
    // </StrictMode>
  );
};

const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyContentComponent />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <AboutComponent />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:restaurantId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
