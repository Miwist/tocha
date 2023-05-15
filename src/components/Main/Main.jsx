import React from "react";
import BannerTelegram from "../Banner/BannerTelegram";
import ConnectionStep from "../ConnectionStep/ConnectionStep";
import LoginModal from "../Form/LoginModal";
import RegisterModal from "../Form/RegisterModal";
import Rates from "../Rates/Rates";
import Reviews from "../Reviews/Reviews";
import TelegramChat from "../TelegramChat/TelegramChat";
import TochaOnline from "../TochaOnline/TochaOnline";
import "./Main.module.scss";

const Main = ({openLogin, openRegister, setOpenLogin, setOpenRegister}) => {
  return (
    <main>
             {openLogin && (<LoginModal setOpenLogin={setOpenLogin} ></LoginModal>)}
        {openRegister && (<RegisterModal setOpenRegister={setOpenRegister}></RegisterModal>)}
      <TelegramChat></TelegramChat>
      <TochaOnline></TochaOnline>
      <Rates></Rates>
      <ConnectionStep></ConnectionStep>
      <Reviews></Reviews>
      <BannerTelegram></BannerTelegram>
   
    </main>
  );
};

export default Main;
