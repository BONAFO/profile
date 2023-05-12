import { bannerLinkHoverEffect } from "../style effects/hover";
import isMobile from "../style effects/isMobile";
import "../style/main-page/main-page.css";

export default function MainPage() {
  const bannerLinkOpacity = {
    mobile: 1,
    desktop: 0.2,
  };


  return (
    <div>
      <div
            onClick={()=>{
              window.location.href = "/about-me";
            }}
        onMouseEnter={(e) => {
          console.log(e.target.className);
          bannerLinkHoverEffect("about-me", "in");
        }}
        onMouseOut={(e) => {
          bannerLinkHoverEffect("about-me", "out");
        }}
      >
        <div
          className="about-me-cont links-cont"
          style={{
            opacity: isMobile()
              ? bannerLinkOpacity.mobile
              : bannerLinkOpacity.desktop,
          }}
        ></div>
        <div
          className="text-link t-shadow-basic about-me-text"
          style={{
            right: isMobile() ? "5vw" : "2vw",
            bottom: isMobile() ? "53vh" : "58vh",
            opacity: isMobile() ? 1 : 0.5,
          }}
        >
          <h3>ABOUT ME...</h3>
        </div>
      </div>

      <div
        onMouseEnter={(e) => {
          bannerLinkHoverEffect("my-proyects", "in");
        }}
        onMouseLeave={(e) => {
          bannerLinkHoverEffect("my-proyects", "out");
        }}
      >
        <div
          className="my-proyects-cont links-cont"
          onClick={()=>{
            window.location.href = "/my-proyects";
          }}
          style={{
            opacity: isMobile()
              ? bannerLinkOpacity.mobile
              : bannerLinkOpacity.desktop,
          }}
        ></div>

        <div
          className="text-link t-shadow-basic my-proyects-text"
          style={{
            right: isMobile() ? "5vw" : "2vw",
            bottom: isMobile() ? "18vh" : "22vh",
            opacity: isMobile() ? 1 : 0.5,
          }}
        >
          <h3>MY PROYECTS</h3>
        </div>
      </div>
    </div>
  );
}
{
  /* <div
style={{
  position: "absolute",
  float: "left",
  zIndex: 1,
}}
>
<h3 className="main-links about-me-txt t-shadow-basic">
  I'm a programmer from Argentina , living actually in Ushuaia, my
  specialty is ...
</h3>
<h3 className="main-links about-me-link t-shadow-basic">
  more{"=>"}
</h3>
</div> */
}
