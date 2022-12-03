import { GlobalStyle } from "./styles/GlobalStyle";
import { RoutesMain as Routes } from "./routes";
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <>
      <ToastContainer/>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
