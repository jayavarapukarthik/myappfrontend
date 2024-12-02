import React from "react";
import Login from "./Login";
//import Dashboard from "./Dashboard";
//lazy loading
const Dashboard = React.lazy(()=> import("./Dashboard"));
import Error from "./Error";
import Movies from "./Movies";
import Events from "./Events";
import Concerts from "./Concerts";
import { Route,Routes } from "react-router-dom";
import MovDetails from "./MovDetails";
import EventsDetails from "./EventsDetails";
import ConcertsDetails from "./ConcertsDetails";
import CartPage from '../cart/CartPage';
import MainLayout from "../cart/MainLayout";
const Master = ()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                
                <Route path="/dashboard" element={<MainLayout> <Dashboard></Dashboard> </MainLayout>}>
                    <Route path="dashboard/movies" element={<Movies></Movies>}></Route>
                    <Route path="dashboard/events" element={<Events></Events>}></Route>
                    <Route path="dashboard/concerts" element={<Concerts></Concerts>}></Route>
                </Route>
                
                <Route path="/dashboard/movies/:mid" element={<MainLayout> <MovDetails></MovDetails> </MainLayout>}></Route>
                <Route path="/dashboard/events/:mid" element={<MainLayout><EventsDetails></EventsDetails></MainLayout>}></Route>
                <Route path="/dashboard/concerts/:mid" element={<MainLayout><ConcertsDetails></ConcertsDetails></MainLayout>}></Route>
                
                <Route path="/error" element={<Error></Error>}></Route>
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </>
    )
}
export default Master;