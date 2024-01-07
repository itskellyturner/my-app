import HomePage from "./Components/Home/HomePage";
import BookingPage from "./Components/Booking/BookingPage";
import OrderPage from "./Components/Order/OrderPage";
import MenuPage from "./Components/Menu/MenuPage";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./Components/Context/AppContext";
import Confirmation from "./Components/Booking/Confirmation";
import Header from "./Components/Header/Header";


function App() {
  return (
    <AppProvider>
        <img className="bg" alt="Site Background" src={require('../src/assets/images/table.jpeg')}/>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
            <Route path="/order" element={<OrderPage />}></Route>
            <Route path="/book" element={<BookingPage />}></Route>
            <Route path="/confirmation" element={<Confirmation />}></Route>
          </Routes>
        </div>
    </AppProvider>
  );
};

export default App;
