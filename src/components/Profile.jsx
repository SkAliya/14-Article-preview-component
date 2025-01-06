import styles from "./Profile.module.css";
import pic from "./avatar-michelle.jpg";
import share from "./icon-share.svg";
import SharePopup from "./SharePopup";

function Profile() {
  return (
    <>
      <div className="profile">
        <img src={pic} alt="profile pic" />
        <div className="data">
          <h2>Michelle Appleton</h2>
          <p>28 Jun 2020</p>
        </div>

        <button className="btn">
          <img src={share} alt="share icon" />
          <SharePopup />
        </button>
      </div>
    </>
  );
}

export default Profile;
