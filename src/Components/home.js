import React, { useState } from "react";
export default function home(){
  // let slideIndex = 0;
  // showSlides();

  // const showSlides = () => {
  //     let i;
  //     let slides = document.getElementsByClassName("mySlides");
  //     for (i = 0; i < slides.length; i++) {
  //         slides[i].style.display = "none";
  //     }
  //     slideIndex++;
  //     if (slideIndex > slides.length) {
  //         slideIndex = 1
  //     }
  //     slides[slideIndex - 1].style.display = "block";
  //     setTimeout(showSlides, 3000); // Change image every 3 seconds
  // }

  // const [slide , setslide] = useState(None);


  return (
    <>
      <div className="main">
        <div className="search_section">
          <form className="search_part" method="POST" action="SearchReasults.php">
            <h1>
              Find a home you'll <label>love</label>
            </h1>
            <div className="search">
              <i className="fa-solid fa-location-dot fa-flip"></i>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Your Location"
                value=""
              />
              <i className="fa-solid fa-children"></i>
              <select name="fo" id="fo">
                <option value="all">For All</option>
                <option value="boys">Boys</option>
                <option value="girls">Girls</option>
                <option value="family">Family</option>
              </select>
              <i className="fa-solid fa-indian-rupee-sign"></i>
              <input
                type="number"
                name="budget"
                placeholder="Budget"
                id="budget"
                value=""
              />
              <select name="spec" id="">
                <option value="">Choose Room</option>
                <option value="1R">1R</option>
                <option value="1RK">1RK</option>
                <option value="1BHK">1BHK</option>
                <option value="2BHK">2BHK</option>
                <option value="3BHK">3BHK</option>
              </select>
              <button type="submit">Search</button>
            </div>
            <div className="anim">
              <h1 data-text="Lets_Go_With_Homie's...">
                Lets_Go_With_Homie's...
              </h1>
            </div>
          </form>
          <div className="slider_part">
            <div className="slid">
                <div className="slideshow-container">
                        <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img src="images/slide_1.jfif" alt="" />
                        </div>

                        <div className="mySlides fade">
                        <div className="numbertext">2 / 3</div>
                        <img src="images/slide_2.jfif" alt="" />
                        </div>

                        <div className="mySlides fade">
                        <div className="numbertext">3 / 3</div>
                        <img src="images/slide_3.jfif" alt="" />
                        </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cards">
        <h1>Popular Properties</h1>
        <div className="content">
          <a href="details.php" className="card">
            <div className="item">
              <img src="logo.svg" alt="Hello" />
            </div>
            <div className="info">
              <h3>
                <i className="fa-solid fa-house"></i> <label>1BHK</label>
              </h3>
              <h3>
                <i className="fa-solid fa-children"></i> <label>Boys</label>
              </h3>
              <h3>
                <i className="fa-solid fa-check-to-slot"></i> Status :
                <label>'; Avilable Now </label>
              </h3>
              <h4>
                <i className="fa-solid fa-location-dot fa-flip"></i>Prime Location
              </h4>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
