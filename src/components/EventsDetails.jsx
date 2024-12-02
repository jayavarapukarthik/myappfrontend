import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./MovDetails.css";
import { useCart } from '../cart/CartContext';
const EventsDetails = ()=>{
    const {mid} = useParams();
    const [events,setEvents] = useState(null);
    const [tickets,setTickets] = useState(1);
    const { addToCart } = useCart();
    const get_events = async ()=>{
        const res = await axios.get(`http://localhost:8015/events/${mid}`);
        const {data} = res;
        setEvents(data);
        setTickets(1);
    }

    useEffect(()=>{
        get_events();
    },[mid]);

    const handleDecrement = ()=>{
        
        if(tickets>1){
            setTickets(prevQuentity => prevQuentity-1);
        }
    }

    const handleIncrement = ()=>{
        if(tickets<events.pqty){
            setTickets(prevQuentity => prevQuentity+1);
        }
    }

    
    if(!events) return (<div>Loading....</div>)
    
    const handleAddToCart = () => {
        addToCart(events, tickets);
    };


    return(
        <>
            <div className="movies-details">
                <img src={events.mimage}></img>
                <h1>{events.mname}</h1>
                <h2><i className="fa fa-rupee"></i> {events.mcost}</h2>
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
export default EventsDetails;