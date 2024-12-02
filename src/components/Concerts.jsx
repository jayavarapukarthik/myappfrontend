import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Movies.css";
const Concerts = ()=>{
    
    const navigate = useNavigate();

    const [movies,setMovies] = useState([]);

    const get_movies = async ()=>{
        const result = await axios.get(`http://localhost:8015/concerts`);
        const {data} = result;
        console.log(data);
        setMovies(data);
    }
    
    useEffect(()=>{
        get_movies();
    },[]);


    const fetch_details = (element)=>{
        navigate(`/dashboard/concerts/${element.mid}`) 
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
export default Concerts;