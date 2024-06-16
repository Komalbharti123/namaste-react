import RestaurantCard from "./ResturantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = ()=>{
    const [resturantList,setResList] = useState([])

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setfilterRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    console.log("json body",json)
    };
   
    const [searchText,setSearchText]=useState("")
    const [filterRes,setfilterRes]=useState([])
return resturantList.length===0?<Shimmer/> :(
    <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                }}></input>
                <button className="searchButton" onClick={()=>{
                    const filterResList=resturantList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setfilterRes(filterResList)
                }}>search</button>
            </div>
            <button className="filter-btn"
            onClick={()=>{
                const filteredList = resturantList.filter((res)=>res.info.avgRating>4.3);
                setfilterRes(filteredList)
            }}
            >Top Rated Restaurant</button>
        </div>
        <div className="res-container">
           {filterRes.map((restaurant)=>(<RestaurantCard key={restaurant.id} resData={restaurant.info}/>))}
        </div>
    </div>
)
}

export default Body;