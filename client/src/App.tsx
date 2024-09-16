import { Routes, Route } from "react-router-dom";

import { makeWelcome, makeSignIn, makeSignUp } from "src/main/factories/pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={makeSignIn()} />
      <Route path="/registrar" element={makeSignUp()} />

      <Route path="/welcome" element={<>{makeWelcome()}</>} />
    </Routes>
  );
};

export default App;
