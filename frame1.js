import React from "react";
import "frame1.css"; // Add your custom CSS here

const App = () => {
  return (
    <div className="page1 flex flex-col">
      {/* Top Bar */}
      <div className="top-bar flex flex-row justify-between">
        <div className="title w-[384px] h-[107px] ml-4 mt-2">
          <img src="Frame 9.png" alt="Dishcovery Logo" />
        </div>
        <div className="menu inline w-[615px] h-[60px] mt-12 text-3xl">
          <a href="#Home" className="home inline-block w-40 text-center p-3 hover:no-underline hover:bg-black hover:text-white rounded-xl">
            Home
          </a>
          <a href="#search" className="search inline-block w-40 text-center p-3 hover:no-underline hover:bg-black hover:text-white rounded-xl">
            Search
          </a>
          <a href="#generate" className="generate inline-block w-40 text-center p-3 hover:no-underline hover:bg-black hover:text-white rounded-xl">
            Generate
          </a>
          <a href="#write" className="write inline-block w-40 text-center p-3 hover:no-underline hover:bg-black hover:text-white rounded-xl">
            Write
          </a>
        </div>
        <div className="login flex justify-center pt-5 mr-2">
          <a href="#login" className="login-in w-44 text-center pt-3 pb-3 h-16 text-3xl rounded-lg hover:bg-black hover:text-white">
            Log in
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="about flex flex-col">
        <div className="part1 flex flex-row justify-between ml-2 mr-2">
          <div className="icons flex flex-col">
            {[1, 2, 3, 4, 5, 6].map((icon) => (
              <div className="mt-3 ml-3" key={icon}>
                <img src={`icon${icon}.png`} alt={`icon ${icon}`} />
              </div>
            ))}
          </div>
          <div className="middle mt-10">
            <img src="title-dishcovery.png" alt="Dishcovery Title" />
            <br />
            <div className="text-white text-5xl m-8 pl-8">
              Your personal recipe finder,
              <br />
              generator, and forum.
            </div>
          </div>
          <div className="chef">
            <img src="chef.png" alt="Chef" />
          </div>
        </div>

        {/* What Dishcovery Offers Section */}
        <div className="part2">
          <div className="what bg-black text-white text-center rounded-3xl text-4xl ml-2 mr-2 pt-3 pb-6 z-0">
            What Dishcovery Offers
          </div>
        </div>
        <div className="search-generate-upload flex flex-row text-white justify-between z-10">
          {["SEARCH RECIPES", "GENERATE RECIPES", "UPLOAD RECIPES"].map((text, idx) => (
            <div className="rounded-b-3xl ml-10 text-center p-4 w-96" key={idx}>
              <h2 className="text-3xl">{text}</h2>
              <br />
              <div className="text-2xl">
                {text === "SEARCH RECIPES" && "Search through a vast database of recipes by ingredients or cuisine."}
                {text === "GENERATE RECIPES" && "Input your ingredients and get personalized recipes instantly."}
                {text === "UPLOAD RECIPES" && "Contribute to our growing recipe repository by uploading your favorite dishes."}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Recipes Section */}
      <div className="popular flex flex-col bg-white rounded-2xl text-center mt-10 mb-10">
        <br />
        <br />
        <h2 className="text-3xl">Popular Recipes</h2>
        <br />
        <div className="popular-recipes flex flex-row justify-between mb-10">
          {["PASTA", "PANEER TIKKA", "VEG ROLLS"].map((recipe, idx) => (
            <a
              href={`#${recipe.toLowerCase()}-recipe`}
              key={idx}
              className="hover:opacity-75 transition-opacity duration-300 hover:no-underline"
            >
              <div className="flex flex-col w-80 h-80 items-center">
                <div>
                  <img src={`popular-${recipe.toLowerCase().replace(" ", "-")}.png`} alt={recipe} />
                </div>
                <div className="rounded-2xl p-2 w-44 text-xl hover:bg-black hover:text-white">{recipe}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="follow-us flex flex-row justify-between">
        <div className="text-5xl ml-4 text-white mt-4 mb-2">FOLLOW US</div>
        <div className="flex flex-row mt-2 mb-2 mr-4">
          {["mdi_instagram", "mingcute_linkedin-line", "hugeicons_pinterest", "pajamas_twitter"].map((icon, idx) => (
            <a href="@dishcovery" key={idx} className="mr-4">
              <img src={`${icon1}.png`} alt={icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="rights bg-black flex flex-row justify-between text-white">
        <div className="contact ml-12 mt-5">
          <h2 className="text-6xl">Dishcovery...</h2>
          <br />
          <br />
          {["About", "Blog", "Recipe Index", "Contact"].map((link, idx) => (
            <a href={`#${link}`} key={idx} className="hover:no-underline text-4xl ml-4">
              {link}
            </a>
          ))}
        </div>
        <div className="chef-img">
          <img src="chef.png" alt="Footer Chef" />
        </div>
      </div>
      <div className="all-rights text-center bg-black text-white pb-4">© 2024 Dishcovery. All Rights Reserved</div>
    </div>
  );
};

export default App;
