import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Success from "./Pages/Success";
import Signup from "./components/Signup/index";
import Login from "./components/Login/index";
const App = () => {
  // const user = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
			  <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;