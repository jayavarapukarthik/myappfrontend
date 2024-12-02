import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./MovDetails.css";
import { useCart } from '../cart/CartContext';
const ConcertsDetails = ()=>{
    const {mid} = useParams();
    const [concerts,setConcerts] = useState(null);
    const [tickets,setTickets] = useState(1);
    const { addToCart } = useCart();
    const get_concerts = async ()=>{
        const res = await axios.get(`http://localhost:8015/concerts/${mid}`);
        const {data} = res;
        setConcerts(data);
        setTickets(1);
    }

    useEffect(()=>{
        get_concerts();
    },[mid]);

    const handleDecrement = ()=>{
        
        if(tickets>1){
            setTickets(prevQuentity => prevQuentity-1);
        }
    }

    const handleIncrement = ()=>{
        if(tickets<concerts.pqty){
            setTickets(prevQuentity => prevQuentity+1);
        }
    }

    
    if(!concerts) return (<div>Loading....</div>)
    
    const handleAddToCart = () => {
        addToCart(concerts, tickets);
    };


    return(
        <>
            <div className="movies-details">
                <img src={concerts.mimage}></img>
                <h1>{concerts.mname}</h1>
                <h2><i className="fa fa-rupee"></i> {concerts.mcost}</h2>
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
export default ConcertsDetails;












