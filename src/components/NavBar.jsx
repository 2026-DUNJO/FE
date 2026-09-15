import { useLocation, useNavigate } from "react-router-dom";

import homeSelect from "../assets/nav/home_select.svg";
import homeUnselect from "../assets/nav/home_unselect.svg";

import searchSelect from "../assets/nav/search_select.svg";
import searchUnselect from "../assets/nav/search_unselect.svg";

import chatSelect from "../assets/nav/chat_select.svg";
import chatUnselect from "../assets/nav/chat_unselect.svg";

import mySelect from "../assets/nav/my_select.svg";
import myUnselect from "../assets/nav/my_unselect.svg";

import {
  NavContainer,
  NavItem,
  NavIcon,
  NavLabel,
} from "../styles/NavBar.styles";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      path: "/home",
      label: "홈",
      selected: homeSelect,
      unselected: homeUnselect,
    },
    {
      path: "/search",
      label: "탐색",
      selected: searchSelect,
      unselected: searchUnselect,
    },
    {
      path: "/chat",
      label: "채팅",
      selected: chatSelect,
      unselected: chatUnselect,
    },
    {
      path: "/my",
      label: "마이",
      selected: mySelect,
      unselected: myUnselect,
    },
  ];

  return (
    <NavContainer>
      {navItems.map((item) => {
        const isActive =
          location.pathname === item.path;

        return (
          <NavItem
            key={item.path}
            type="button"
            onClick={() => navigate(item.path)}
          >
            <NavIcon
              src={
                isActive
                  ? item.selected
                  : item.unselected
              }
              alt=""
            />

            <NavLabel $active={isActive}>
              {item.label}
            </NavLabel>
          </NavItem>
        );
      })}
    </NavContainer>
  );
};

export default NavBar;