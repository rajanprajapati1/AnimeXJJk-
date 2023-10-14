import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import TopBanner from "../Components/TopBanner";
import Footer from "../Components/Footer";
import "../styles/New.css";
import { JikanApi } from "../Data/Data";


const WatchPage = () => {
  const { id } = useParams();
  const [RecievData,SetRecievData] = useState([]);
  const [animename,setanimename] = useState();
  const [currentEpisode, setCurrentEpisode] = useState(null);

  useEffect(() => {

    const fetEpisodedata = async()=>{
      const anime = await JikanApi(`info/${id}`);
      if(anime){
          SetRecievData(anime?.episodes)
          setanimename(anime)
      }
    }
    fetEpisodedata();
  }, [id]);
  const handleEpisodeClick = (episode) => {
    const getepisode =async()=>{
        const anime = await JikanApi(`watch/${episode?.id}?server=gogocdn`);
        if(anime){
          setCurrentEpisode(anime?.sources[0]);
        }
    }
    getepisode();
   setCurrentEpisode(episode)
  };
  return (
    <>
      <TopBanner />
      <Navbar />
      <div className="Watch_Page">
        <span className="hierchy">{`${`HOME >  ${1}  > ${animename?.title}`}`}</span>
        <div className="watch_box">
          <div className="episodes_Section">
            <h3>Episodes</h3>
            <div className="episodes_column">
              {RecievData?.length > 0 ? (
                RecievData.map((episode, index) => (
                  <div
                    style={{ cursor: "pointer" }}
                    className="episodes_card"
                    key={index}
                    onClick={() => handleEpisodeClick(episode)}
                  >
                    <h1>{episode?.number}{episode?.episodes}</h1>
                  </div>
                ))
              ) : (
                <div> No episodes found </div>
              )}
            </div>
          </div>
          <div className="video_player">
            <div className="video_box">
              <ReactPlayer
                url={
                  currentEpisode
                    ? currentEpisode?.url
                    : (<div style={{color:'black'}}>SERVER ERROR</div>)
                }
                controls
                playing
                volume={0.5}
                width="99%"
                height="auto"
              />
            </div>
            <div className="video_play_Details">
              <div className="VD_EPIDOSE_dETAILS">
                <span>
                  You are watching 👻 Episode{" "}
                  {currentEpisode?.number}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default WatchPage;
