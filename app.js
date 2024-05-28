import React, { Suspense, lazy, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './src/components/common/HeaderComponent';
import BodyContentComponent from './src/components/common/BodyComponent';
import FooterComponent from './src/components/common/FooterComponent';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import RestaurantMenu from './src/components/restaurant/restaurants/RestaurantMenu';
import UserClass from './src/class-components/UserClass';
import { Provider } from 'react-redux';
import appStore from './src/utils/appStore';
const AboutComponent = lazy(() => import('./src/components/common/AboutComponent'))
const CrossOriginTestComponent = () => {

    const swiggy_public_image_url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7";
    const script_url = "https://unpkg.com/react@18.3.1/umd/react.development.js";
    return (
        <>
            {/* <img src={swiggy_public_image_url} /> */}
            <script crossOrigin='' src={script_url} />
        </>
    )
}
const AppLayout = () => {
    return (
        <StrictMode>

            <Provider store={appStore}>
                <div id='main'>
                    <HeaderComponent />
                    <Outlet />
                    <FooterComponent />
                </div>
            </Provider>
        </StrictMode>

    )
}

const router = createBrowserRouter(
    [
        {
            path: '',
            element: <AppLayout />,
            children: [
                {
                    path: '/',
                    element: <BodyContentComponent />
                },
                {
                    path: '/about',
                    element: < Suspense >
                        <AboutComponent />
                    </Suspense >
                },
                {
                    path: 'restaurants/:restaurantId',
                    element: <RestaurantMenu />
                }
            ]
        },
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <RouterProvider router={router} />
    </>
)