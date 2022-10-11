import { BrowserRouter } from "react-router-dom";
// import Header from "./components/Header/Header";
import Header from "./components/Molecules/Header/Header"
import Routers from "./routers/Routers";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Header />
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
