import "./App.css";
import Navbar from "./frontend/Components/Navbar/Navbar";
import SideBar from "./frontend/Components/SideBar/SideBar";
import Router from "./frontend/Routes/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <div className="wrapper">
        <Router />
      </div>
    </div>
  );
}

export default App;
