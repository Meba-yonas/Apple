// LeftSide.js
import React from "react";

const LeftSide = ({ imgSrc, description, links }) => (
	<div className="left-side-wrapper col-sm-12 col-md-6">
		<div className="left-side-container">
			<div className="top-logo-wrapper">
				<div className="logo-wrapper">
					<img src={imgSrc} alt="Logo" />
				</div>
			</div>
			<div className="description-wraper white">{description}</div>
			<div className="links-wrapper">
				<ul>
					{links.map((link, index) => (
						<li key={index}>
							<a href={link.href}>
								{link.text}
								{link.sup && <sup>{link.sup}</sup>}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	</div>
);

export default LeftSide;
