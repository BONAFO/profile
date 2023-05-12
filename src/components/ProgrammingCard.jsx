import isMobile from "../style effects/isMobile";
import "../style/proyects/programming-card.css";

export default function LCard({ lengData, stack, proyectURL }) {
  return (
    <div>
      <br />
      <div
        className="leng-cont rounded"
        onClick={() => {
          window.open(proyectURL, "_blank").focus();
        }}
      >
        <h3
          className="skills-text stack-text t-shadow-basic"
          style={{
            fontSize: isMobile() ? "3vh" : "3vw",
          }}
        >
          {stack}
        </h3>
        {lengData.map((ldata) => {
          return (
            <div
              key={`icon-${ldata.name}`}
              className="leng-icons"
              style={{
                width: isMobile() ? "20vw" : "13vw",
                height: isMobile() ? "11vh" : "25vh",
                backgroundImage: `url("${ldata.icon}")`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
