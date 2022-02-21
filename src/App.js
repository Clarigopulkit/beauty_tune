import CombineFiles from "./Pages/combineFIles";
import HelloEmma from "./Dashboard/HelloEmma";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import LastestQuotes from "./Dashboard/LastestQuotes";
import FaceTreatment from "./components/Facetreatment"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CombineFiles />}></Route>
          <Route exact path="/dashboard" element={<HelloEmma />}></Route>
          <Route
            exact
            path="/lastestQuotes"
            element={<LastestQuotes />}
          ></Route>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/facetreatment" element={<FaceTreatment/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
