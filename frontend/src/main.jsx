import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Styles/index.css";
import PrivateRoutes from "./components/PrivateRoutes.jsx";
import HomeScreen from "../screens/HomeScreen.jsx";
import LoginScreen from "../screens/LoginScreen.jsx";
import RegisterScreen from "../screens/RegisterScreen.jsx";
import ProfileScreen from "../screens/ProfileScreen.jsx";
import AdminRoutes from "./components/AdminRoutes.jsx";
import AdminDashboard from "../screens/AdminDashboard.jsx";
import AddOrder from "../screens/AddOrder.jsx";
import AddFeedbackScreen from "../screens/AddFeedbackScreen.jsx";
import EditFeedbackScreen from "../screens/EditFeedbackScreen.jsx";
import ViewFeedbackScreen from "../screens/ViewFeedbackScreen.jsx";
import AddLubricant from "../screens/AddLubricant.jsx";
import ViewLubricant from "../screens/ViewLubricant.jsx";
import AddInquiryScreen from "../screens/AddInquiryScreen.jsx";
import AddRecords from "../screens/AddRecords.jsx";
import View from "../screens/ViewOrder.jsx";
import AddEquipment from "../screens/AddEquipment.jsx";
import ViewEquipment from "../screens/ViewEquipment.jsx";
import RecordList from "../screens/RecordList.jsx";
import ViewFeedbackAdmin from "../screens/ViewFeedbackAdmin.jsx";
import EditInquiryScreen from '../screens/EditInquiryScreen.jsx';
import ViewInquiryScreen from '../screens/ViewInquiryScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />

      {/* tharindu routes */}
      <Route path='/listlubricant/add' element={<AddLubricant />} />
      <Route path='/listlubricant/view' element={<ViewLubricant />} />

      <Route path="/register" element={<RegisterScreen />} />

      {/* sumeth routes */}
      <Route path="/orders/add" element={<AddOrder />} />
      <Route path="/orders/View" element={<View />} />

      {/* sewmini routes */}
      <Route path='/addfeedback' element={<AddFeedbackScreen />} />
      <Route path='/editfeedback' element={<EditFeedbackScreen />} />
      <Route path='/viewfeedback' element={<ViewFeedbackScreen />} />
      <Route path='/viewfeedbackadmin' element={<ViewFeedbackAdmin />} />
      <Route path='/inquire' element={<AddInquiryScreen />} />
      <Route path='/editinquire' element={<EditInquiryScreen />} />
      <Route path='/viewinquire' element={<ViewInquiryScreen />} />


      {/* Private routes */}
      <Route path="" element={<PrivateRoutes />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>

      {/* keshika routes */}
      <Route path="/admin/equipments/add" element={<AddEquipment />} />
      <Route path="/admin/equipments/" element={<ViewEquipment />} />


      <Route path='/admin/records/add' element={<AddRecords />} />
      <Route path='/admin/records/list' element={<RecordList />} />


      {/* Admin routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      <Route path="" element={<AdminRoutes />}>
      </Route>
      {/* Admin routes */}
      <Route path='' element={<AdminRoutes />}>
        <Route path='/admin' element={<AdminDashboard />} />
      </Route>





    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
