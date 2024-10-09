import './home.css';
import React from "react";
import dishcoveryLogo from './images/Frame 9.png';
import titleImage from './images/title-dishcovery.png';
import chefImage from './images/chef.png';
import popularPasta from './images/popular_pasta.png';
import popularPanneerTikka from './images/popular-panneer-tikka.png';
import popularVegRolls from './images/popular-vegrolls.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon5 from './images/icon5.png';
import icon6 from './images/icon6.png';
import mdiInstagram from './images/mdi_instagram.png';
import mingcuteLinkedinLine from './images/mingcute_linkedin-line.png';
import hugeiconsPinterest from './images/hugeicons_pinterest.png';
import pajamasTwitter from './images/pajamas_twitter.png';


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
  panneer: popularPanneerTikka,
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
  <div className="search-recipe rounded-b-3xl text-center p-4">
    <h className="text-3xl">SEARCH RECIPES</h>
    <br />
    <br />
    <div className="text-2xl">
      {[
        "Search through a vast database of recipes by ingredients or cuisine.",
        "Find exactly what you're craving with ease.",
        "Make your Dishcovery today!",
      ].map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  </div>
  <div className="generate-recipe rounded-b-3xl text-center p-4">
    <h className="text-3xl">GENERATE RECIPES</h>
    <br />
    <br />
    <div className="text-2xl">
      {[
        "Input your ingredients and",
        "get personalized recipes",
        "instantly. Ideal for creating",
        "meals with what's on hand.",
        "without thinking too much",
        "about it!",
      ].map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  </div>
  <div className="upload-recipe rounded-b-3xl text-center p-4">
    <h className="text-3xl">UPLOAD RECIPES</h>
    <br />
    <br />
    <div className="text-2xl">
      {[
        "Contribute to our growing recipe",
        "repository by uploading",
        "your favorite dishes.",
        "Help enhance the search",
        "algorithm and provide users",
        "with more diverse culinary options!",
      ].map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  </div>
</div>

      </div>

      {/* Popular Recipes Section */}
      {/* Popular Recipes Section */}
      <div className="popular">
        <h2>Popular Recipes</h2>
        <div className="popular-recipes">
          <a
            href="#pasta-recipe"
            className="recipe-link"
          >
            <div className="recipe-item popular-pasta">
              <img
                src={require('./images/popular_pasta.png')} // Directly importing the image
                alt="PASTA"
                style={{ width: '100%', borderRadius: '15px' }}
              />
              <div className="recipe-name">PASTA</div>
            </div>
          </a>
          <a
            href="#panneer-tikka-recipe"
            className="recipe-link"
          >
            <div className="recipe-item popular-panneer-tikka">
              <img
                src={require('./images/popular-panneer-tikka.png')} // Directly importing the image
                alt="PANEER TIKKA"
                style={{ width: '100%', borderRadius: '15px' }}
              />
              <div className="recipe-name">PANEER TIKKA</div>
            </div>
          </a>
          <a
            href="#veg-rolls-recipe"
            className="recipe-link"
          >
            <div className="recipe-item popular-veg-rolls">
              <img
                src={require('./images/popular-vegrolls.png')} // Directly importing the image
                alt="VEG ROLLS"
                style={{ width: '100%', borderRadius: '15px' }}
              />
              <div className="recipe-name">VEG ROLLS</div>
            </div>
          </a>
        </div>
      </div>



      {/* Follow Us Section */}
      <div className="follow-us">
        <div className="follow-text">FOLLOW US</div>
        <div className="social-icons">
  {[
    { icon: mdiInstagram, alt: "Instagram", link: "@dishcovery-instagram" },
    { icon: mingcuteLinkedinLine, alt: "LinkedIn", link: "@dishcovery-linkedin" },
    { icon: hugeiconsPinterest, alt: "Pinterest", link: "@dishcovery-pinterest" },
    { icon: pajamasTwitter, alt: "Twitter", link: "@dishcovery-twitter" }
  ].map((social, idx) => (
    <a href={social.link} key={idx} className="social-link">
      <img src={social.icon} alt={social.alt} />
    </a>
  ))}
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
