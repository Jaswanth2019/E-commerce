import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import RequiredAuth from "./RequiredAuth";
import RoutesLayout from "./RoutesLayout";
import { ROUTES_CONFIG } from "./routes";
// I liked this way of mentioning routes , noob developer me   mention routes  like this 
{/* <Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<AboutUs/>}/>
<Route path="/signin" element={<Signin/>} />
<Route path="/register" element={<Register/>} />
<Route path="/register/individual" element={<IndividualRegister/>} />
<Route path="/register/company" element={<CompanyRegister/>} />
<Route path='/company' element={<ContributionDetails/>} />
<Route path='/company/payment' element={<PaymentForm/>} />
<Route path="*" element={<h1>Not Found</h1>} />
<Route path="/collegespecific" element={<Collegespecific />} />
<Route path="/check" element={<SignInemail/>} />
<Route path="/check/otp" element={<OTPInput/>} />
<Route path="/admin" element={<AdminLogin/>} />
<Route path="/profile" element={<Profile/>} />
<Route path='/profile/individualedit' element={<IndividualEdit/>} />
<Route path='/profile/companyedit' element={<CompanyEdit/>} />
<Route path='/company/payments' element={<ContributionPayment/>} />
</Routes> */}
const AppRoutes = () => {
  const routes = createRoutesFromChildren(
    <Route path="/" element={<RoutesLayout />}>
      {ROUTES_CONFIG.map(({ path, element }, index) => (
        <Route
          key={index}
          path={path}
          element={<RequiredAuth>{element}</RequiredAuth>}
        />
      ))}
    </Route>
  );

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
