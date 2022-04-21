import React, { useEffect, useRef, useState } from "react";
import WhyCard from "../components/WhyCard";
import { whyData } from "../data/Data";
import gsap from "gsap";
import "../styles/CleanCode.css";
import background from "../assets/images/xray.jpg";
import Circle from "../assets/images/mask-circle.png";
import MaskTest from "../assets/images/mask-test.png";

const CleanCode = () => {
  const [showBackground, setShowBackground] = useState({ show: false });

  const handleClick = () => {
    setShowBackground(showBackground.show ? { show: false } : { show: true });
    if (showBackground.show) {
      document.getElementById("code__xray").style.display = "block";
    } else {
      document.getElementById("code__xray").style.display = "none";
    }
  };

  return (
    <section className="section section--code" id="code">
      <div className="container"></div>

      {/* <div class="text-content">
        <h1>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua.
        </h1>
      </div> */}

      {/* <div class="mask-container">
        <div class="mask">
          <div class="mask-content">
            <h1>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </h1>
          </div>
        </div>
      </div> */}

      <div className="code" onClick={handleClick}>
        <div
          id="code__xray"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="code__quote-wrapper">
          <blockquote className="code--quote">
            “Clean code always looks like it was written by <br></br>
            <span className="red">someone who cares.”</span>
          </blockquote>
          <h4 className="code--robert">― Robert C. Martin</h4>
          <h4 className="code--author">Author of Clean Code</h4>
        </div>

        <div className="code--words">meticulousness</div>
        <div className="code--words">easy to read, easey to change</div>
        <div className="code--words">keep it simple</div>
        <div className="code--words">don't repeat your self</div>
        <div className="code--words">naming conventions</div>
        <div className="code--words">clear and concise</div>
        <div className="code--words">consistent</div>
        <div className="code--words">uncomplicate</div>
        <div className="code--words">BEM (Block-Element-Modifier)</div>

        <WhyCard
          titleOne={whyData.code.titleOne}
          textOne={whyData.code.textOne}
          titleTwo={whyData.code.titleTwo}
          textTwo={whyData.code.textTwo}
          titleThree={whyData.code.titleThree}
          textThree={whyData.code.textThree}
          titleFour={whyData.code.titleFour}
          textFour={whyData.code.textFour}
          observation={whyData.code.observation}
          bottom={whyData.code.bottom}
          left={whyData.code.left}
        />
      </div>

      {/* </div> */}
    </section>
  );
};

export default CleanCode;
