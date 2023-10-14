import { useEffect, useState } from 'react';
import {BiSearch} from 'react-icons/bi'
import Card from '../Components/Card';
import { JikanApi } from '../Data/Data';

const SearchPage = () => {
    const [Showbig,setShowbig] = useState(true);
    const [SearchData,setSearchData] = useState([]);
    const InputHandle =() =>{
        setShowbig(false)
    }
    
    const SearchHandle = async (e) => {
        if (e && e?.key === 'Enter') {
          try {
            const query = e.target.value; 
            const value = await JikanApi(`${query}?page=1`)
            if (value) {
              setSearchData(value?.results);
            } else {
              return false;
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      };
      
      const ClickHandle = async() => {
              const query = document.getElementById('searchInput').value; 
              const value = await JikanApi(`${query}?page=1`)
              if (value) {
                setSearchData(value?.results);
        };
      }
  return (
    <div className='searchpage' >
      <div className={Showbig ? 'searchbar' : ' active'} >
        <input type="text" onFocus={InputHandle} onKeyDown={(e)=>SearchHandle(e)}
         id="searchInput"
         placeholder='Find Your Favourite Anime Eg., Naruto , One Piece' />
         <BiSearch onClick={ClickHandle} />
      </div>
      <div className={Showbig ? 'none' : 'searchresult'} >
         <div className="search_list">
         <div className="lastest_scroll">
         {SearchData?.slice(0,12).map((value,index)=>{
            return <Card value={value} index={index} key={index}/>
         })}
         </div>
         </div>
      </div>
    </div>
  )
}

export default SearchPage
