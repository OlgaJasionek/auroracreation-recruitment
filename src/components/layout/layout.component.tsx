import { useState } from "react";

import DesctopMenu from "./desktop-menu/desktop-menu.component";
import HeaderComponent from "./header/header.component";
import SideMenu from "./side-menu/side-menu.component";
import TopBar from "./top-bar/top-bar.component";

const LayoutComponent = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openSideMenuHandler = () => {
    setOpenSideMenu(true);
  };

  const closeSideMenuHandler = () => {
    setOpenSideMenu(false);
  };

  return (
    <>
      <TopBar />
      <HeaderComponent onOpenSideMenu={openSideMenuHandler} />
      <SideMenu isOpen={openSideMenu} onCloseSideMenu={closeSideMenuHandler} />
      <DesctopMenu />
    </>
  );
};

export default LayoutComponent;
