import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import ThemeApp from 'styles/theme'
import { Routes } from 'routes/Routes'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

// App pages
import Home from 'pages/home'
import Shop from 'pages/shop'
import Cart from 'pages/cart'
import Login from 'pages/login'
import SignUp from 'pages/register'
import NotAuth from 'pages/notAuth'
import Profile from 'pages/profile'
import AboutUs from 'pages/aboutUs'
import Product from 'pages/product'
import Wishlist from 'pages/wishlist'
import NotFound from 'pages/notFound'
import Dashboard from 'pages/dashboard/dashboard'
import AppLayout from 'layouts/AppLayout'
import DashboardLayout from 'layouts/dashboardLayout'
import Test from 'pages/test'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* MAIN APP PAGES */}
      <Route path={Routes.home} element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path={Routes.shop} element={<Shop />} />
        <Route path={Routes.cart} element={<Cart />} />
        <Route path={Routes.aboutUs} element={<AboutUs />} />
        <Route path={`${Routes.product}:id`} element={<Product />} />
        <Route path={Routes.profile} element={<Profile />} />
        <Route path={Routes.notAuth} element={<NotAuth />} />
        <Route path={Routes.wishlist} element={<Wishlist />} />
        <Route path={Routes.test} element={<Test />} />
        <Route path={Routes.notFound} element={<NotFound />} />

        {/* APP LOG PAGES */}
        <Route path={Routes.login} element={<Login />} />
        <Route path={Routes.register} element={<SignUp />} />
      </Route>

      {/* DASHBOARD PAGES */}
      <Route path={Routes.dashboard} element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Route>,
  ),
)

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ThemeApp>
      <RouterProvider router={router} />
    </ThemeApp>
  )
}

export default App
