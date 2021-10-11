import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import utilStyles from "../styles/utils.module.css";

const NavLink = ({ href, children }) => {
	const router = useRouter();

	let className = children.props.className || "";
	if (router.pathname === href) {
		className = `${className} ${utilStyles.active}`;
	}

	return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default NavLink;
