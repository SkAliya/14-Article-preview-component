import Details from "./Details";
import Profile from "./Profile";

function Content({ setIsShow, isShow }) {
  return (
    <div className={`content ${isShow ? "showpop" : ""}`}>
      <Details />
      <Profile setIsShow={setIsShow} isShow={isShow} />
    </div>
  );
}

export default Content;
