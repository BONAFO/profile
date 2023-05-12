import isMobile from "./isMobile";

const bannerLinkReset = () => {
  for (
    let i = 0;
    i < document.getElementsByClassName("links-cont").length;
    i++
  ) {
    document.getElementsByClassName("links-cont")[i].style.opacity = 0.2;
  }
  for (
    let i = 0;
    i < document.getElementsByClassName("text-link").length;
    i++
  ) {
    document.getElementsByClassName("text-link")[i].style.opacity = 0.5;
  }


};




export const bannerLinkHoverEffect = (className, effect) => {
  if (!isMobile()) {
    const background = document.getElementsByClassName(className + "-cont");
    if (background !== undefined) {
      bannerLinkReset();
      switch (effect) {
        case "in":
          document.getElementsByClassName(
            className + "-cont"
          )[0].style.opacity = 1;

          document.getElementsByClassName(
            className + "-text"
          )[0].style.opacity = 1;
          break;
      }
    }
  }     
};
