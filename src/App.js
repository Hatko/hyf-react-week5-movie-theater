import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { MovieRouter } from "./components/MovieRouter";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { UserContext, useUser } from "./context/UserContext";

const fetchMe = () => {
  return {
    name: "Tiago",
    age: 19,
    occupation: "React Dev",
    isLoggedIn: true,
  };
};

const BrowserApp = () => {
  const {
    user: { isLoggedIn },
  } = useUser();

  if (!isLoggedIn) {
    return <div>Logged out</div>;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path={"/profile"}>
          <Profile />
        </Route>
        <Route path={"/movies"}>
          <MovieRouter />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = fetchMe();
    setUser(user);
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserApp />
      </UserContext.Provider>
    </div>
  );
}

export default App;
