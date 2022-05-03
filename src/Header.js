import { Icon } from "@iconify/react";
import React from "react";
import locationIcon from "@iconify/icons-mdi/volcano";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Icon icon={locationIcon} className="header-icon" />
        Volcano tracker (Powered by NASA)
      </h1>
      <h2>
        click the icons <Icon icon={locationIcon} className="header-icon" /> on
        the map for aditional information
      </h2>
    </div>
  );
};
export default Header;
