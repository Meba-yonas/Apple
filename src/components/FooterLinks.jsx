import React from "react";

const FooterLinks = ({ title, links }) => {
    
	return (
		<div className="col-sm-12 col-md">
			<h3>{title}</h3>
			<ul>
				{links.map((link, index) => (
					<li key={index}>
						<a href="#">{link}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterLinks;
