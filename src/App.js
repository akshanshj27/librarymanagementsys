import { useState } from "react";

import Login from "./components/Account/Login";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(null);
  const onLogin = (user) => {
    console.log(user);
    setUser(user);
  };

  return (
    <>
      {user ? (
        <Home />
      ) : (
        <div className="app-wrapper login">
          <Login onLogin={onLogin} />
        </div>
      )}
    </>
  );
}

export default App;
