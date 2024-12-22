// LeftSide.js
import React from "react";

const Lone = ({ title, description, price, links }) => (
	<div className="left-side-wrapper col-sm-12 col-md-6">
		<div className="left-side-container">
			<div className="title-wraper">{title}</div>
			<div className="description-wraper">{description}</div>
			{price && <div className="price-wrapper">{price}</div>}
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

export default Lone;
