import pic from "./avatar-michelle.jpg";
import share from "./icon-share.svg";
import SharePopup from "./SharePopup";

function Profile({ setIsShow, isShow }) {
  return (
    <>
      <div className="profile">
        <img src={pic} alt="profile pic" />
        <div className="data">
          <h2>Michelle Appleton</h2>
          <p>28 Jun 2020</p>
        </div>

        <button
          className={`btn ${isShow ? "showpop" : ""}`}
          onClick={() => setIsShow((s) => !s)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-9 -8 37 35">
            <path
              className="iconShare"
              fill="#6E8098"
              d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Profile;
