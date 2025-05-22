// @ts-nocheck

import { Link } from "react-router";
import pkg from "@syncfusion/ej2-react-navigations";
import NavItems from "./NavItems";

const { SidebarComponent } = pkg;

const MobileSidebar = () => {
  let sidebar;

  const toggleSidebar = () => {
    if (sidebar) sidebar.toggle();
  };

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img
            src="/assets/icons/logo.svg"
            alt="Logo"
            className="size-[30px]"
          />
          <h1>Vigtuor</h1>
        </Link>

        <button onClick={toggleSidebar}>
          <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
        </button>
      </header>

      <SidebarComponent
        width={270}
        ref={(el) => (sidebar = el)}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      >
        <NavItems handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
