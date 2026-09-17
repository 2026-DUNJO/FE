import {
  useEffect,
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import api from "../api/axios";

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
  NavNotificationBadge,
} from "../styles/NavBar.styles";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [
    notificationCount,
    setNotificationCount,
  ] = useState(0);

  // =========================================
  // 채팅 알림 개수 조회
  // =========================================

  const fetchNotificationCount =
    async () => {
      try {
        const [
          friendsResponse,
          requestsResponse,
        ] = await Promise.all([
          api.get("/friendships"),

          api.get(
            "/invitations/received"
          ),
        ]);

        const friends =
          Array.isArray(
            friendsResponse.data
          )
            ? friendsResponse.data
            : [];

        const requests =
          Array.isArray(
            requestsResponse.data
          )
            ? requestsResponse.data
            : [];

        // -------------------------------------
        // 안 읽은 곡 전체 개수
        // -------------------------------------

        const unreadMessages =
          friends.reduce(
            (total, friendship) =>
              total +
              Number(
                friendship.unreadCount ||
                  0
              ),
            0
          );

        // -------------------------------------
        // 받은 요청 개수
        // -------------------------------------

        const pendingRequests =
          requests.length;

        // -------------------------------------
        // 최종 NavBar 알림
        // -------------------------------------

        setNotificationCount(
          unreadMessages +
            pendingRequests
        );
      } catch (error) {
        console.error(
          "NavBar 알림 조회 실패:",
          error.response?.data ||
            error
        );

        setNotificationCount(0);
      }
    };

/* ==============================
   NavBar 알림 Polling
   5초마다 새 알림 확인
============================== */

useEffect(() => {
  // 페이지 들어오자마자 바로 조회
  fetchNotificationCount();

  // 이후 5초마다 조회
  const intervalId = setInterval(() => {
    fetchNotificationCount();
  }, 5000);

  return () => {
    clearInterval(intervalId);
  };
}, [location.pathname]);

  const navItems = [
    {
      path: "/home",
      label: "홈",
      selected:
        homeSelect,
      unselected:
        homeUnselect,
    },

    {
      path: "/search",
      label: "탐색",
      selected:
        searchSelect,
      unselected:
        searchUnselect,
    },

    {
      path: "/chat",
      label: "채팅",
      selected:
        chatSelect,
      unselected:
        chatUnselect,
    },

    {
      path: "/my",
      label: "마이",
      selected:
        mySelect,
      unselected:
        myUnselect,
    },
  ];

  return (
    <NavContainer>
      {navItems.map(
        (item) => {
          const isActive =
            location.pathname ===
              item.path ||
            (
              item.path ===
                "/chat" &&
              location.pathname.startsWith(
                "/chat/"
              )
            );

          const isChat =
            item.path ===
            "/chat";

          return (
            <NavItem
              key={item.path}
              type="button"
              onClick={() =>
                navigate(
                  item.path
                )
              }
            >
              <NavIcon
                src={
                  isActive
                    ? item.selected
                    : item.unselected
                }
                alt=""
              />

              {isChat &&
                notificationCount >
                  0 && (
                  <NavNotificationBadge>
                    {notificationCount >
                    99
                      ? "99+"
                      : notificationCount}
                  </NavNotificationBadge>
                )}

              <NavLabel
                $active={
                  isActive
                }
              >
                {item.label}
              </NavLabel>
            </NavItem>
          );
        }
      )}
    </NavContainer>
  );
};

export default NavBar;