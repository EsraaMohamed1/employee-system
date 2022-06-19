import logo from './logo.svg';
import './App.css';
import Aside from './components/Aside/Aside';

import Navbar from './components/Nav/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
// import Form from './components/Form/Form';


function App() {
  return (
   <>
  {/* <Form></Form> */}
    <Aside></Aside>
   <Navbar></Navbar>
   <Dashboard></Dashboard> 
   </>
  );
}

export default App;
