
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import SignUp from "./Pages/SignUp";
import List from "./Pages/List";
import LogIn from "./Pages/LogIn";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
    <NavBar />
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<AboutUs/>} path="/AboutUs"/>
        <Route element={<ContactUs/>} path="/ContactUs"/>
        <Route element={<SignUp/>} path="/SignUp"/>
        <Route element={<LogIn/>} path="/LogIn"/>
        <Route element={<List/>} path="/List"/>
      </Routes>
    <Footer />
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
