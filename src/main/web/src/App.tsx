import React from "react";
import "./App.css";
import { MonthlySpendingAndIncome } from "./components/MonthlySpendingAndIncome";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { FixedMonthlyExpenses } from "./components/FixedMonthlyExpenses";
import { FixedMonthlyEarnings } from "./components/FixedMonthlyEarnings";
import { Home } from "./components/Home";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleMenuClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Header handleMenuOpen={handleMenuOpen} />
        <SideMenu
          isDrawerOpen={isDrawerOpen}
          handleMenuClose={handleMenuClose}
        />
        <header className="App-header">
          <Routes>
            {/* <Route path="/" element={<MonthlySpendingAndIncome />}></Route> */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/spendings" element={<FixedMonthlyExpenses />}></Route>
            <Route path="/earnings" element={<FixedMonthlyEarnings/>}></Route>
          </Routes>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
