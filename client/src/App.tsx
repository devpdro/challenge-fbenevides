import { Routes, Route } from "react-router-dom";

import { makeWelcome, makeSignIn, makeSignUp } from "src/main/factories/pages";
import { PrivateRoute } from "src/route";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={makeSignIn()} />
      <Route path="/registrar" element={makeSignUp()} />

      <Route
        path="/welcome"
        element={<PrivateRoute>{makeWelcome()}</PrivateRoute>}
      />
    </Routes>
  );
};

export default App;
