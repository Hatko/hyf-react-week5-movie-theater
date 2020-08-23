import React from "react";
import { useUser } from "../context/UserContext";

export const Profile = () => {
  const {
    user: { name },
    setUser,
  } = useUser();

  return (
    <div>
      {name}
      <div>
        <button
          onClick={() => {
            setUser((user) => ({ ...user, isLoggedIn: false }));
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
