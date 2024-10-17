import { Outlet } from "react-router-dom";
import InventoryProvider from "../InventoryProvider";
import Header from './Header';
import Menus from "./Menus";

const Layout = () => {
  return (
    <>
        <Header></Header>
        <Menus></Menus>
        <InventoryProvider>
            <Outlet />
        </InventoryProvider>
    </>
  )
};

export default Layout;
