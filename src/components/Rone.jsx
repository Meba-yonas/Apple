// RightSide.js
import React from "react";

const Rone = ({ title, description, links, whiteText }) => (
	<div
		className={`right-side-wrapper col-sm-12 col-md-6 ${
			whiteText ? "white" : ""
		}`}
	>
		<div className="right-side-container">
			<div className={`title-wraper ${whiteText ? "white" : ""}`}>{title}</div>
			{description && <div className="description-wraper">{description}</div>}
			<div className={`links-wrapper ${whiteText ? "white" : ""}`}>
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

export default Rone;
