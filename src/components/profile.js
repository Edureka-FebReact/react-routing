import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let {username} = useParams();
  return (
    <div>
      <h1>This is the profile page for {username}</h1>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go back to About page
      </button>
    </div>
  );
}
export default Profile;
