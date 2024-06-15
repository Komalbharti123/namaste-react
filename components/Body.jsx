import RestaurantCard from "./ResturantCard";
import { useState,useEffect } from "react";


const Body = ()=>{
    const [resturantList,setResList] = useState([])

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    console.log("json",json)
    setResList(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    console.log("cards",json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants.info)
    };
   

return (
    <div className="body">
        <div className="filter">
            <button className="filter-btn"
            onClick={()=>{
                const filteredList = resturantList.filter((res)=>res.info.avgRating>4.3);
                setResList(filteredList)
            }}
            >Top Rated Restaurant</button>
        </div>
        <div className="res-container">
           {resturantList.map((restaurant)=>(<RestaurantCard key={restaurant.id} resData={restaurant.info}/>))}
        </div>
    </div>
)
}

export default Body;