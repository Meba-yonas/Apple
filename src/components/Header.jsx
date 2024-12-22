
// import React, { Component } from 'react'
// import Nav from './Nav'
// export default class Header extends Component {
//   render() {
//     return (
// 			<div>
// 				<div className="nav-wrapper fixed-top">
// 					<div className="container">
// 						<nav className="navbar navbar-toggleable-sm navbar-expand-md">
// 							<button
// 								className="navbar-toggler navbar-toggler-right"
// 								type="button"
// 								data-toggle="collapse"
// 								data-target=".navbar-collapse"
// 							>
// 								☰
// 							</button>
// 							<a className="navbar-brand mx-auto" href="#">
// 								<img src="images/icons/logo-sm.png" />
// 							</a>
// 							<div className="navbar-collapse collapse">
// 								<ul className="navbar-nav nav-justified w-100 nav-fill">
// 									<Nav linkurl="/mac" linkname="macc" />
									
// 									<Nav linkurl="/iphone" linkname="iphone" />
// 									<Nav linkurl="/ipad" linkname="ipad" />
// 									<Nav linkurl="/watch" linkname="Wacth" />
// 									<Nav linkurl="/tv" linkname="Tv" />
// 									<Nav linkurl="/music" linkname="Music" />
// 									<Nav linkurl="/support" linkname="Support" />
									
									
									
// 									<li className="nav-item">
// 										<a className="nav-link js-scroll-trigger" href="/search/">
// 											<img src="images/icons/search-icon-sm.png" />
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link js-scroll-trigger" href="/cart/">
// 											<img src="images/icons/cart-sm.png" />
// 										</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</nav>
// 					</div>
// 				</div>
// 			</div>
// 		);
//   }
// }
// import { useState } from "react";
// import React from "react";
// import Nav from "./Nav";
// import logo from "../../resource/images/icons/logo-sm.png"; 
// import searchIcon from "../../resource/images/icons/search-icon-sm.png"; 
// import cartIcon from "../../resource/images/icons/cart-sm.png"; 

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);

// 	const toggleNavbar = () => {
// 		setIsOpen(!isOpen);

//     };
// 	return (
// 		<div className="nav-wrapper fixed-top">
// 			<div className="container">
// 				<nav className="navbar navbar-toggleable-sm navbar-expand-md">
// 					<button
// 						className="navbar-toggler navbar-toggler-right"
// 						type="button"
// 						onClick={toggleNavbar}
// 					>
// 						☰
// 					</button>
// 					<a className="navbar-brand mx-auto" href="#">
// 						<img src={logo} alt="Logo" />
// 					</a>
// 					<div className={`navbar-collapse collapse ${isOpen ? "show" : ""}`}>
// 						<ul className="navbar-nav nav-justified w-100 nav-fill">
// 							{["Mac", "iPhone", "iPad", "Watch", "TV", "Music", "Support"].map(
// 								(item, index) => (
// 									<Nav
// 										key={index}
// 										linkurl={`/${item.toLowerCase()}`}
// 										linkname={item}
// 										isDropdown={true}
// 									/>
// 								)
// 							)}
// 							<li className="nav-item">
// 								<a className="nav-link js-scroll-trigger" href="/search/">
// 									<img src={searchIcon} alt="Search" />
// 								</a>
// 							</li>
// 							<li className="nav-item">
// 								<a className="nav-link js-scroll-trigger" href="/cart/">
// 									<img src={cartIcon} alt="Cart" />
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</nav>
// 			</div>
// 		</div>
// 	);
// };

// export default Header;

import React, { useState } from "react";
import Nav from "./Nav";
import logo from "../../resource/images/icons/logo-sm.png";
import searchIcon from "../../resource/images/icons/search-icon-sm.png";
import cartIcon from "../../resource/images/icons/cart-sm.png";
import '../../resource/css/styles.css'
import { Link } from "react-router-dom";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeFlyout, setActiveFlyout] = useState(null);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	const handleMouseEnter = (index) => {
		setActiveFlyout(index);
	};

	const handleMouseLeave = () => {
		setActiveFlyout(null);
	};

	const navItems = ["Mac", "iPhone", "iPad", "Watch", "TV", "Music", "Support"];

	return (
		<div className="nav-wrapper fixed-top">
			<div className="container">
				<nav className="navbar navbar-toggleable-sm navbar-expand-md">
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						onClick={toggleNavbar}
					>
						☰
					</button>
					<Link className="navbar-brand mx-auto" to={'/'}>
						<img src={logo} alt="Logo" />
					</Link>
					<div
						className={`navbar-collapse  collapse ${
							isOpen ? "show" : ""
						}`}
						
					>
						<ul className="navbar-nav nav-justified w-100 nav-fill">
							{navItems.map((item, index) => (
								<li
									className="nav-item"
									onMouseEnter={() => handleMouseEnter(index)}
									onMouseLeave={handleMouseLeave}
									key={index}
								>
									<Nav linkurl={`/${item.toLowerCase()}`} linkname={item} />
									{activeFlyout === index && (
										<div className=" flyout-menu d-flex">
                                            <div className="col-6">
                                                <h5>{item}</h5>
                                                
                                            </div>
											<ul>
												<li>
													<Link href="#">Subitem 1 for {item}</Link>
												</li>
												<li>
													<Link href="#">Subitem 2 for {item}</Link>
												</li>
												<li>
													<Link href="#">Subitem 3 for {item}</Link>
												</li>
											</ul>
										</div>
									)}
								</li>
							))}
							<li className="nav-item">
								<Link className="nav-link js-scroll-trigger" to="/search/">
									<img src={searchIcon} alt="Search" />
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link js-scroll-trigger" to="/cart/">
									<img src={cartIcon} alt="Cart" />
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
