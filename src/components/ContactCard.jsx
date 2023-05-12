import isMobile from "../style effects/isMobile";
import "../style/contact/contact.css";
export default function ContactCard({ method}) {

const showIcon=()=>{
    if(method.icon !== undefined){
        return <img
        className="contact-img"
        style={{
          width: isMobile() ? "14vh" : "13vw",
        }}
        src={method.icon}
        alt=""
      />
    }else{
      return  <h3
          className="t-shadow-basic contact-text"
          style={{
            fontSize: isMobile() ? "4vh" : "3vw",
          }}
        >
          {method.text}
        </h3>
    }
}
  return (
    <div>
      <div className="contact-cont rounded"
      onClick={()=>{
        if(method.link !== undefined){
            window.open(method.link, "_blank").focus();
        }
      }}
      style={{
        cursor : method.text !== undefined ? ("text") : ("pointer")
      }}>
        <h3
          className="t-shadow-basic contact-text"
          style={{
            fontSize: isMobile() ? "4vh" : "3vw",
          }}
        >
          {method.name}
        </h3>
        <br />
        {showIcon()}
      </div>
    </div>
  );
}
