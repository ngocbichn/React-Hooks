import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Routers from "./routers/Routers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
