import isMobile from "../style effects/isMobile";
import "../style/banner/banner.css";

export default function Banner() {
  const bannerItemsResize = () => {
    if (isMobile()) {
      return {
        width: "25vw",
      };
    } else {
      return {
        fontSize: "2.5vh",
        width: "25vw",
      };
    }
  };

  window.onresize = () => {
    const buttonsItems = document.getElementsByClassName("banner-menu-item");
    const style = bannerItemsResize();

    for (let i = 0; i < buttonsItems.length; i++) {
      Object.keys(style).map(
        (key) => (buttonsItems[i].style[key] = style[key])
      );
    }
  };
  return (
    <div>
      <div className="banner">
        <div className="banner-cont"></div>

        <div className="motto-cont">
          <h3 className="motto motto-pt1 t-shadow-basic">
            IF YOU CAN IMAGINE IT...
          </h3>
          <h3 className="motto motto-pt2 t-shadow-basic">
            ...WE CAN CREATE IT
          </h3>
        </div>
      </div>
      <div>
        <nav className="banner-menu">
          <button
            className="banner-menu-item t-shadow-basic"
            onClick={() => {
              window.location.href = "/";
            }}
            style={bannerItemsResize()}
          >
            HOME
          </button>
          <button
            className="banner-menu-item t-shadow-basic"
            onClick={() => {
              window.location.href = "/about-me";
            }}
            style={bannerItemsResize()}
          >
            ABOUT ME
          </button>
          <button
            className="banner-menu-item t-shadow-basic"
            onClick={() => {
              window.location.href = "/my-proyects";
            }}
            style={bannerItemsResize()}
          >
            MY PROYECTS
          </button>
          <button
            className="banner-menu-item t-shadow-basic"
            onClick={() => {
              window.location.href = "/contact-me";
            }}
            style={bannerItemsResize()}
          >
            CONTACT ME
          </button>
        </nav>
      </div>
    </div>
  );
}
