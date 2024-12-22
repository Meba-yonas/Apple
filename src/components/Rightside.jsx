// RightSide.js
import React from "react";

const RightSide = ({ title, description, links }) => (
	<div className="right-side-wrapper col-sm-12 col-md-6">
		<div className="right-side-container">
			<div className="title-wraper">{title}</div>
			<div className="description-wraper">{description}</div>
			<div className="links-wrapper">
				<ul>
					{links.map((link, index) => (
						<li key={index}>
							<a href={link.href}>{link.text}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	</div>
);

export default RightSide;
