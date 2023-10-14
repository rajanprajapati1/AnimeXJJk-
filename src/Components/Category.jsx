import React, { useEffect, useState } from "react";
import { JikanApi, categories } from "../Data/Data";
import Card from "./Card";
import _ from "lodash";

const Category = () => {
  const [AnimeCategories, SetAnimeCategories] = useState([]);
  const [Animedata, setAnimedata] = useState([]);
  const [FilterData, SetFilterData] = useState([]);

  const FetchDataApi = async () => {
    const value = await JikanApi(`top-airing`);
    if (value) {
      setAnimedata(value.results);
      SetFilterData(value.results)
    }
  };
  const debouncedFetchData = _.debounce(FetchDataApi, 1000); 
  useEffect(() => {
    debouncedFetchData();
  }, []);

  const Handlefilter = (name) => {
    const filterdata = Animedata?.filter((value, index) =>
      value?.genres?.some((genre) => genre === name)
    );
    SetFilterData(filterdata);
  };

  return (
    <div className="Category_Page">
      <div className="main">
        <div className="filter_anime">
          <h2>Filter Data </h2>
          <div className="filter_card">
            <div className="lastest_scroll">
              {FilterData !== null ? (
                FilterData?.slice(0, 8).sort(() => Math.random() - 0.5)
                  .map((value, index) => {
                    return <Card value={value} key={index} />;
                  })
              ) : (
                <div className="first"> NO DATA FOUND ON SERVER</div>
              )}
            </div>
          </div>
        </div>
        <div className="filter_options">
          <h2>Category</h2>
          <div className="filter_button">
            {categories?.map((value, index) => {
              return (
                <button key={index} onClick={() => Handlefilter(value?.genres)}>
                  {value?.genres}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
