import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ()=>{
    return(
        <>
            <div className="dashboard-menu">
                <Link to="dashboard/movies">Movies</Link>
                <Link to="dashboard/events">Events</Link>
                <Link to="dashboard/concerts">Concerts</Link>
            </div>
            
            <br></br><br></br>

            <Outlet></Outlet>
            
        </>
    )
}
export default Dashboard;