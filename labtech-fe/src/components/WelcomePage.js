import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';

const WelcomePage = () => {
  const { state } = useAuth();
  useEffect(()=>{
console.log(state)
},[])

  return (
    <div>
      <h2>Welcome !</h2>
      {/* Your beautiful welcome page content */}
    </div>
  );
};
export default WelcomePage;
