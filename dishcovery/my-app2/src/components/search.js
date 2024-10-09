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
    <div className="page">
      <div className="top-bar">
        <div className="title">
          <img src={frame9} alt="Frame 9" />
        </div>
        <div className="menu">
          <a href="#Home" className="home">home</a>
          <a href="#search" className="search">search</a>
          <a href="#generate" className="generate">generate</a>
          <a href="#write" className="write">write</a>
        </div>
        <a href="#profile" className="profile">
          <img src={profilePic} className="photo" alt="Profile" />
          <span id="username" className="user-name">{username}</span>
        </a>
      </div>
      <div className="bet1">

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" className="in-search" placeholder="Enter recipe name to search" />
          <a href="#search" className="search-img">
            <img src={searchImg} alt="Search" />
          </a>
        </div>

        {/* 570+ Indicator in Bottom Right */}
        <div className="text-570">
          <img src={ellipseImg} className="" alt="Ellipse Icon" />
          570+
        </div>

      </div>

      <div className="bet">
        <a href="#salads" className="salads"><img src={saladsImg} alt="Salads" /></a>
        <a href="#dessert" className="dessert"><img src={dessertImg} alt="Dessert" /></a>
        <a href="#snacks" className="snacks"><img src={snacksImg} alt="Snacks" /></a>
        <a href="#meals" className="meals"><img src={mealsImg} alt="Meals" /></a>
        <a href="#pasta" className="pasta"><img src={pastaImg} alt="Pasta" /></a>
      </div>
      <div className="veg-nonveg">
        <a className="veg" href="#veg">
          <img src={vegetarianImg} alt="Vegetarian" className="" />
        </a>
        <a className="non-veg" href="#non-veg">
          <img src={nonVegImg} alt="Non-Vegetarian" className="" />
        </a>
        <a className="vegan" href="#vegan">
          <img src={veganImg} alt="Vegan" className="" />
        </a>
      </div>
    </div>
  );
};

export default Search;
