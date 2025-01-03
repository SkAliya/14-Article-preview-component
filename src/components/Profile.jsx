import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className="profile">
      <img src="images/avatar-michelle.jpg" alt="profile pic" />
      <div className="data">
        <h2>Michelle Appleton</h2>
        <p>28 Jun 2020</p>
      </div>
      <button className="btn">
        <img src="images/icon-share.svg" alt="share icon" />
      </button>
    </div>
  );
}

export default Profile;
