import HeaderComponent from "./header/header.component";
import SideMenu from "./side-menu/side-menu.component";

const LayoutComponent = () => {
  return (
    <>
      <HeaderComponent />
      <SideMenu
        isOpen={true}
        onCloseSideMenu={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default LayoutComponent;
