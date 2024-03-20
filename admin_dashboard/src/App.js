//import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import Rmaterials from "./pages/inventory/Rmaterials";
import Products from "./pages/products/Product";
import Supplier from "./pages/supplier/Supplier";
import Users from "./pages/users/Users";
import Employee from "./pages/employees/Employee";
import Daytask from "./pages/daytask/Daytask";
import Leaves from "./pages/leaves/Leaves";
import Transaction from "./pages/transaction/Transaction";
import Expense from "./pages/expense/Expense";
import Invoice from "./pages/invoice/Invoice";
import Report from "./pages/reports/Report";
import Attendence from "./pages/attendence/Attendence";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/home" element={<Home />} />

            <Route path="/inventory" element={<Rmaterials />} />
            <Route path="/product" element={<Products />} />
            <Route path="/supplier" element={<Supplier />} />
            <Route path="/users" element={<Users />} />
            <Route path="/employees" element={<Employee />} />
            <Route path="/attendence" element={<Attendence />} />
            <Route path="/daytask" element={<Daytask />} />
            <Route path="/leaves" element={<Leaves />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/report" element={<Report />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
