import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import { NameForm } from './components/form/NameForm';
import { DynamicTable } from './components/table/DynamicTable';
import User, { UserComponent } from './components/User';
import Intro from './components/Intro';
import { GroceryList } from './components/GroceryList';
import Login from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />}/>
          <Route path="/name-form" element={<NameForm />} />
          <Route path="/users" element={<DynamicTable />} />
          <Route path="/users/:id" element={<UserComponent />} />
          <Route path="/grocery" element={<GroceryList />} />
          <Route path="/login" element={<Login />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
