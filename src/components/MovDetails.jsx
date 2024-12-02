import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./MovDetails.css";
import { useCart } from '../cart/CartContext';
const MovDetails = ()=>{
    const {mid} = useParams();
    const [movies,setMovies] = useState(null);
    const [tickets,setTickets] = useState(1);
    const { addToCart } = useCart();

    const get_movies = async ()=>{
        const res = await axios.get(`http://localhost:8015/movies/${mid}`);
        const {data} = res;
        setMovies(data);
        setTickets(1);
    }

    useEffect(()=>{
        get_movies();
    },[mid]);

    const handleDecrement = ()=>{
        if(tickets>1){
            setTickets(prevQuentity => prevQuentity-1);
        }
    }

    const handleIncrement = ()=>{
        if(tickets<movies.pqty){
            setTickets(prevQuentity => prevQuentity+1);
        }
    }


    const handleAddToCart = () => {
        addToCart(movies, tickets);
    };

    
    if(!movies) return (<div>Loading....</div>)
    
    return(
        <>
            <div className="movies-details">
                <img src={movies.mimage}></img>
                <h1>{movies.mname}</h1>
                <h2><i className="fa fa-rupee"></i> {movies.mcost}</h2>
                <div className="c1">
                    <button onClick={handleDecrement}> - </button> 
                        <p>{tickets}</p> 
                    <button onClick={handleIncrement}> + </button>
                </div>
                <button className="add_to_cart_btn" onClick={handleAddToCart}>Add To Cart</button>
            </div>
        </>
    )
}
export default MovDetails;