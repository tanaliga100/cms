import React, { Dispatch, SetStateAction } from "react";

interface Props {
  isNonMobile: boolean;
  drawerWidth: string;
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}
const Sidebar: React.FC<Props> = ({ ...props }) => {
  return <div>Sidebar</div>;
};

export default Sidebar;
