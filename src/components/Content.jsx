import Details from "./Details";
import Profile from "./Profile";
import styles from "./Content.module.css";

function Content() {
  return (
    <div className="content">
      <Details />
      <Profile />
    </div>
  );
}

export default Content;
