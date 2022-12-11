import { GlobalStyle } from "./styles/GlobalStyle";
import { RoutesMain as Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext.jsx";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
