import fb from "./icon-facebook.svg";
import twit from "./icon-twitter.svg";
import pint from "./icon-pinterest.svg";
function SharePopup({ isShow }) {
  return (
    <ul className={`list ${isShow ? "showpop" : ""}`}>
      <li>share</li>
      <li>
        <img src={fb} alt="facebook icon" />
      </li>
      <li>
        <img src={twit} alt="twitter icon" />
      </li>
      <li>
        <img src={pint} alt="pintrest icon" />
      </li>
      <div className="arrow"></div>
    </ul>
  );
}

export default SharePopup;
