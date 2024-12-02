import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Movies.css";
const Events = ()=>{
    const navigate = useNavigate();

    const [movies,setMovies] = useState([]);

    const get_movies = async ()=>{
        const result = await axios.get(`http://localhost:8015/events`);
        const {data} = result;
        console.log(data);
        setMovies(data);
    }
    
    useEffect(()=>{
        get_movies();
    },[]);

    const fetch_details = (element)=>{
        navigate(`/dashboard/events/${element.mid}`) 
    }
    
    return(
        <>
            <div className="parent">
                {
                   movies.map((element,index)=>{
                      return(<div className="child" key={index} onClick={()=> fetch_details(element)}>
                          <img src={element.mimage}></img>
                          <h5>{element.mname}</h5>
                          <h6>{element.mcost}</h6>
                      </div>
                    )}) 
                    
                }
            </div>
        </>
    )
}
export default Events;