// import React, { Component } from 'react'

// export default class Nav extends Component {

//   render() {
//      const { linkname, linkurl } = this.props;
//     return (
// 			<>
// 				<li className="nav-item">
// 					<a className="nav-link js-scroll-trigger" href={linkurl}>
// 						{linkname}

// 					</a>
// 				</li>

// 			</>
// 		);
//   }
// }

import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ linkurl, linkname }) => {
	return (
		<li className="nav-item">
			<Link className="nav-link js-scroll-trigger" to={linkurl}>
				{linkname}
			</Link>
		</li>
	);
};

export default Nav;
