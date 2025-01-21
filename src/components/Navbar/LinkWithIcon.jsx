import React from "react";
import "./LinkWithIcon.css";
import { NavLink } from "react-router-dom";

const LinkWithIcon = ({ title, link, emoji }) => {
  return (
    //NavLink는 자동으로 active 클래스 추가됨(네브바에서 사용), href => to
    <NavLink to={link} className="align_center">
      {title} <img src={emoji} alt="" className="link_emoji" />
    </NavLink>
  );
};

export default LinkWithIcon;
