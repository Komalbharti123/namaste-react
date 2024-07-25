import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu =()=>{

    const [resInfo,setResInfo]=useState(null);

    const {resId}=useParams()

    console.log("useParams",resId)

    useEffect(()=>{
        fetchData();

    },[])

    

     fetchData =async()=>{
        const data=await fetch(MENU_API+resId)
        const json=await data.json();
        setResInfo(json.data) 
    }

    if(resInfo===null) return <Shimmer/>
    console.log("resInfo",resInfo)

    const {name,cuisines,costForTwoMessage}=resInfo.cards[2].card.card.info
    const {itemCards}=resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card

    console.log("name",itemCards)
    return (
       <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(",")}-{costForTwoMessage}</p>
        <h2>{costForTwoMessage}</h2>
        <ul>
            {itemCards.map((itemcard)=>(
                   <li key={itemcard.card.info.id}>{itemcard.card.info.name}-Rs.{itemcard.card.info.price/100}-{itemcard.card.info.id}</li>
            ))}
            
        </ul>

       </div>
    )
}

export default RestaurantMenu;