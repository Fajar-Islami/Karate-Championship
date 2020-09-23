import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as GoIcons from "react-icons/go";

export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <AiIcons.AiFillHome />,
		cName: "nav-text-F",
	},
	{
		title: "Schedule & Result",
		path: "/schedulesResult",
		icon: <FaIcons.FaCalendarAlt />,
		cName: "nav-text-F",
	},
	{
		title: "Teams",
		path: "/teams",
		icon: <RiIcons.RiTeamLine />,
		cName: "nav-text-F",
	},
	{
		title: "Categories",
		path: "/categories",
		icon: <MdIcons.MdPeopleOutline />,
		cName: "nav-text-F",
	},
	{
		title: "Statistics",
		path: "/statistic",
		icon: <GoIcons.GoGraph />,
		cName: "nav-text-F",
	},
	{
		title: "Medals",
		path: "/medals",
		icon: <FaIcons.FaMedal />,
		cName: "nav-text-F",
	},
	{
		title: "Bracket",
		path: "/bracket",
		icon: <GiIcons.GiCheckboxTree />,
		cName: "nav-text-F",
	},
];
