
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";
import AddEmployee from "./components/AddEmployee";
function App() {
  return (
    <div>
      <Router>
        <div className="container">

          <Routes>
            <Route path="/" element={<EmployeeComponent/>}/>
            <Route path="/employees" element={<EmployeeComponent/>}/>
            <Route path="/add-employee" element={<AddEmployee/>}/>
            <Route path="/edit-employee/:Id" element={<AddEmployee/>}/>
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
