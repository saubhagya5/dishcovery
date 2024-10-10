import React from "react";
import dishcoveryLogo from './images/Frame 9.png'; // Adjust the path to your image
import titleImage from './images/title-dishcovery.png'; // Adjust the path to your image
import chefImage from './images/chef.png'; // Adjust the path to your image
import popularPasta from './images/popular-pasta.png'; // Adjust the path to your image
import popularPaneerTikka from './images/popular-paneer-tikka.png'; // Adjust the path to your image
import popularVegRolls from './images/popular-veg-rolls.png'; // Adjust the path to your image
import icon1 from './images/icon1.png'; // Adjust the path to your image
import icon2 from './images/icon2.png'; // Adjust the path to your image
import icon3 from './images/icon3.png'; // Adjust the path to your image
import icon4 from './images/icon4.png'; // Adjust the path to your image
import icon5 from './images/icon5.png'; // Adjust the path to your image
import icon6 from './images/icon6.png'; // Adjust the path to your image

const icons = {
  1: icon1,
  2: icon2,
  3: icon3,
  4: icon4,
  5: icon5,
  6: icon6,
};

const popularRecipes = {
  pasta: popularPasta,
  paneer: popularPaneerTikka,
  vegRolls: popularVegRolls,
};

const Home = () => {
  return (
    <div className="page1">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="title">
          <img src={dishcoveryLogo} alt="Dishcovery Logo" />
        </div>
        <div className="menu">
          <a href="#Home" className="home">
            Home
          </a>
          <a href="#search" className="search">
            Search
          </a>
          <a href="#generate" className="generate">
            Generate
          </a>
          <a href="#write" className="write">
            Write
          </a>
        </div>
        <div className="login">
          <a href="#login" className="login-in">
            Log in
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="about">
        <div className="part1">
          <div className="icons">
            {[1, 2, 3, 4, 5, 6].map((icon) => (
              <div className="icon" key={icon}>
                <img src={icons[icon]} alt={`icon ${icon}`} />
              </div>
            ))}
          </div>
          <div className="middle">
            <img src={titleImage} alt="Dishcovery Title" />
            <div className="text-white">
              Your personal recipe finder,
              <br />
              generator, and forum.
            </div>
          </div>
          <div className="chef">
            <img src={chefImage} alt="Chef" />
          </div>
        </div>

        {/* What Dishcovery Offers Section */}
        <div className="part2">
          <div className="what">What Dishcovery Offers</div>
        </div>
        <div className="search-generate-upload">
          {["SEARCH RECIPES", "GENERATE RECIPES", "UPLOAD RECIPES"].map((text, idx) => (
            <div className="offer" key={idx}>
              <h2>{text}</h2>
              <div className="description">
                {text === "SEARCH RECIPES" &&
                  "Search through a vast database of recipes by ingredients or cuisine."}
                {text === "GENERATE RECIPES" &&
                  "Input your ingredients and get personalized recipes instantly."}
                {text === "UPLOAD RECIPES" &&
                  "Contribute to our growing recipe repository by uploading your favorite dishes."}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Recipes Section */}
      <div className="popular">
        <h2>Popular Recipes</h2>
        <div className="popular-recipes">
          {["PASTA", "PANEER TIKKA", "VEG ROLLS"].map((recipe, idx) => (
            <a
              href={`#${recipe.toLowerCase().replace(" ", "-")}-recipe`}
              key={idx}
              className="recipe-link"
            >
              <div className="recipe-item">
                <img
                  src={popularRecipes[recipe.toLowerCase().replace(" ", "")]}
                  alt={recipe}
                />
                <div className="recipe-name">{recipe}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="follow-us">
        <div className="follow-text">FOLLOW US</div>
        <div className="social-icons">
          {["mdi_instagram", "mingcute_linkedin-line", "hugeicons_pinterest", "pajamas_twitter"].map(
            (icon, idx) => (
              <a href="@dishcovery" key={idx} className="social-link">
                <img src={`./images/${icon}.png`} alt={icon} />
              </a>
            )
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="rights">
        <div className="contact">
          <h2>Dishcovery...</h2>
          {["About", "Blog", "Recipe Index", "Contact"].map((link, idx) => (
            <a href={`#${link}`} key={idx} className="footer-link">
              {link}
            </a>
          ))}
        </div>
        <div className="chef-img">
          <img src={chefImage} alt="Footer Chef" />
        </div>
      </div>
      <div className="all-rights">© 2024 Dishcovery. All Rights Reserved</div>
    </div>
  );
};

export default Home;
