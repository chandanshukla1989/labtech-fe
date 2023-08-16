import React, { useEffect } from "react";
import { useAuth } from "./AuthContext";

const WelcomePage = () => {
  const { state } = useAuth();

  return (
    <div>
      {/* state.user.username, now reads from context */}
      <h2>Welcome {state.user.userName}!</h2>
      {/* Your beautiful welcome page content */}
    </div>
  );
};
export default WelcomePage;
