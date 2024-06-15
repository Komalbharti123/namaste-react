import {CDN_URL} from "../utils/constants"

const RestaurantCard=(props)=>{
    const {resData} = props; 
    console.log("props",resData)
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime
    }=resData
    return(
    <div className="res-card" style={{backgroundColor:"#cec3c3"}}>
      <img className="res-logo" src={CDN_URL+cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
   </div>
    )
}

export default RestaurantCard;