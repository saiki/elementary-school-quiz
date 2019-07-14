import React from 'react';
import { Link } from "react-router-dom";

type HeaderProps = {
	correctCount: number;
}

const Header: React.FunctionComponent<HeaderProps> = (props:HeaderProps) => {
	return (
		<header className="sticky">
			<div className="container">
				<div className="nav-brand">
					<i className="snes-jp-logo brand-logo"></i>
				</div>
				<div>
					<Link to="/history">
						<button className="nes-btn"><i className="nes-icon trophy is-small"></i>{props.correctCount}</button>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
