import {  useEffect, useState } from "react";
import { JikanApi } from "../Data/Data";
import Card from "./Card";
import Carousel from "react-elastic-carousel";
import _ from 'lodash';

const ListPage = () => {
  const [TrendingAnime, SetTrendingAnime] = useState([]);
  const [PopularAnime, SetPopularAnime] = useState([]);
  const [LatestAnime, SetLatestAnime] = useState([]);
  const [fetching, setFetching] = useState(true);

  const fetchData = async (url, setter) => {
    try {
        const value = await JikanApi(url);
        if (value) {
          setter(value.results);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  };
  useEffect(() => {
    const fetchAllData = async () => {
      await fetchData(`top-airing?page=2`, SetTrendingAnime);
      await fetchData(`top-airing?page=3`, SetPopularAnime);
      await fetchData(`top-airing?page=4`, SetLatestAnime);
    };

    fetchAllData(); 

    const interval = setInterval(fetchAllData, 120000);

    return () => clearInterval(interval);
  }, []);

  const  breakPoints=[
    { width: 320, itemsToShow: 1 }, 
    {width : 520 , itemsToShow:5.5}
  ];
  return (
    <div className="listpage">
      <div className="sections">
        <h3>🔥 Trending Anime </h3>
        <div className="lastest_scroll">
          <Carousel  breakPoints={breakPoints}  >
            {TrendingAnime?.map((value, index) => {
              return <Card value={value} index={index} key={index} />;
            })}
          </Carousel>
        </div>
        <div className="Popular_Anime">
          <h3>⚡ Popular Anime</h3>
          <div className="lastest_scroll">
            <Carousel breakPoints={breakPoints} >
            {PopularAnime?.slice(0, 15).map((value, index) => {
              return <Card value={value} key={index} />;
            })}
            </Carousel>
          </div>
        </div>
        <div className="Popular_Anime">
          <h3>⚡ Latest Anime</h3>
          <div className="lastest_scroll">
            <Carousel breakPoints={breakPoints} >        
               {LatestAnime?.slice(0, 15)?.sort(() => Math?.random() - 0.5)?.map((value, index) => {
                return <Card value={value} key={index} />;
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
