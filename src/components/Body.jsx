import RestaurantCard from "./ResturantCard"
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

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
    setfilterRes(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    };

    const [searchText,setSearchText]=useState("")
const [filterRes,setfilterRes]=useState([])

const onlineStatus = useOnlineStatus();

if(onlineStatus===false){
    return(
        <h1>You are offline. Please check your internet connection</h1>
    )
}

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
            
        {filterRes.map((restaurant)=>(<Link key={restaurant.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant.info}/></Link>))}
        </div>
    </div>
)
}

export default Body;