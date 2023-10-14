import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MyContext } from "../Utils/ContextApi";
import { JikanApi } from "../Data/Data";

const SliderC = () => {
  
  const [PopularAnime,SetPopularAnime] = useState([]);
  useEffect(()=>{
    const fetchApi = async() =>{
       const value = await JikanApi(`top-airing?page=1`);
       if(value){
        SetPopularAnime(value?.results)
       }
    }
    fetchApi();
  },[])
  
  const {settings } = useContext(MyContext);
  return (
    <div className="main_Slider">
      <Slider {...settings}>
       {PopularAnime?.map((value,index)=>{
        return(<>
          <div key={value?.id} className="Flex_Slider" >
                <div style={{ flex: "2"}}>

          <img
            src={value?.image}
            alt={value?.title}
            className="slider_style"
                    />
                </div>
                <div key={index} className="slider_Details" >
                <h3 ><span>{"#" +`${index+1}`}</span>{value?.title}</h3>
                <p>Lorem ipsumutem dolor consequuntur suscipit dolores deleniti ducimus doloribus odit magni officiis sapiente est consectetur, quam pariatur nulla debitis omnis.</p>
                <Link to={`/watch/${value?.id}`}>
                <button className="btn_sl">Click To Watch</button>
                </Link>
              </div>
        </div>
        
        </>)
       })}
      </Slider>
    </div>
  );
};

export default SliderC;
