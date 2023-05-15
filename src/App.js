import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  return (
    <div>
      <Header
        setOpenLogin={setOpenLogin}
        setOpenRegister={setOpenRegister}
      ></Header>
      
      <Main
        openLogin={openLogin}
        openRegister={openRegister}
        setOpenLogin={setOpenLogin}
        setOpenRegister={setOpenRegister}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
