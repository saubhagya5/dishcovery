import React from 'react';
import './search.css';
import frame9 from './images/Frame 9.png';
import profilePic from './images/profile.png';
import searchImg from './images/search.png';
import saladsImg from './images/salads.png';
import dessertImg from './images/dessert.png';
import snacksImg from './images/snacks.png';
import mealsImg from './images/meals.png';
import pastaImg from './images/pasta.png';
import vegetarianImg from './images/vegetarian.png';
import nonVegImg from './images/non-veg.png';
import veganImg from './images/vegan.png';
import ellipseImg from './images/Ellipse 2.png';

const Search = () => {
  const username = "HITANSHI"; // Can be replaced with a dynamic value if needed

  return (
    <div className="page flex flex-col">
      <div className="top-bar flex flex-row justify-between">
        <div className="title w-[384px] h-[107px] ml-4 mt-2">
          <img src={frame9} alt="Frame 9" />
        </div>
        <div className="menu inline mt-12 text-3xl">
          <a href="#Home" className="home inline-block w-40 text-center text-black-500 p-3 hover:no-underline hover:bg-black hover:text-white rounded-xl">home</a>
          <a href="#search" className="search inline-block w-40 text-center text-black-500 p-3 hover:no-underline hover:bg-black hover:text-white rounded-xl">search</a>
          <a href="#generate" className="generate inline-block w-40 text-center text-black-500 p-3 hover:no-underline hover:bg-black hover:text-white rounded-xl">generate</a>
          <a href="#write" className="write inline-block w-40 text-center text-black-500 p-3 hover:no-underline hover:bg-black hover:text-white rounded-xl">write</a>
        </div>
        <a href="#profile" className="profile flex flex-row mr-4 mt-4 hover:no-underline">
          <img src={profilePic} className="photo w-16 h-16 mr-4 rounded-full mt-3 ml-2" alt="Profile" />
          <span id="username" className="user-name text-4xl text-white mt-4">{username}</span>
        </a>
      </div>
      <div className="bet1 w-3/4 h-36 mx-auto mt-4 rounded-xl flex flex-col items-center justify-between relative">

        {/* Search Bar */}
        <div className="search-bar flex flex-row w-2/3 max-w-xl h-16 rounded-xl justify-between items-center p-2 border border-gray-300 focus-within:border-blue-500 mt-10">
          <input type="text" className="in-search text-xl p-2 w-full outline-none text-black" placeholder="Enter recipe name to search" />
          <a href="#search" className="search-img w-14 h-14 ml-4 transition-all duration-200 hover:w-16 hover:h-16 flex items-center justify-center">
            <img src={searchImg} alt="Search" />
          </a>
        </div>

        {/* 570+ Indicator in Bottom Right */}
        <div className="text-570 flex flex-row justify-end items-center text-white text-2xl absolute bottom-4 right-4">
          <img src={ellipseImg} className="w-6 h-6 mr-2" alt="Ellipse Icon" />
          570+
        </div>

      </div>

      <div className="bet flex flex-row mt-3">
        <a href="#salads" className="salads pl-20 hover:ml-96 hover:opacity-75"><img src={saladsImg} alt="Salads" /></a>
        <a href="#dessert" className="dessert pl-20 hover:no-underline hover:opacity-75"><img src={dessertImg} alt="Dessert" /></a>
        <a href="#snacks" className="snacks pl-20 hover:no-underline hover:opacity-75"><img src={snacksImg} alt="Snacks" /></a>
        <a href="#meals" className="meals pl-20 hover:no-underline hover:opacity-75"><img src={mealsImg} alt="Meals" /></a>
        <a href="#pasta" className="pasta pl-20 pr-20 hover:no-underline hover:opacity-75"><img src={pastaImg} alt="Pasta" /></a>
      </div>
      <div className="veg-nonveg flex flex-row justify-between mt-8 ml-36 mr-36 space-x-4">
        <a className="veg" href="#veg">
          <img src={vegetarianImg} alt="Vegetarian" className="hover:opacity-75" />
        </a>
        <a className="non-veg" href="#non-veg">
          <img src={nonVegImg} alt="Non-Vegetarian" className="hover:opacity-75" />
        </a>
        <a className="vegan" href="#vegan">
          <img src={veganImg} alt="Vegan" className="hover:opacity-75" />
        </a>
      </div>
    </div>
  );
};

export default Search;
