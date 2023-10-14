import React, { createContext, useState } from 'react';

const MyContext = createContext();

const ContextApi = ({ children }) => {
  const [myState, setMyState] = useState('default value');
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 500,
    autoplay: true, 
    autoplaySpeed: 2000,
    easing: 'ease',
  };


  return (
    <MyContext.Provider value={{ myState, setMyState ,settings }}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, ContextApi };
