import React from "react";

const HighlightSection = ({
	sectionClass,
	newAlert,
	title,
	description,
	price,
	learnMoreLink,
	orderLink,
	captionLeft,
	captionRight,
}) => {
	return (
		<section className={sectionClass}>
			<div className="container">
				{newAlert && <div className="new-alert">New</div>}
				<div className="title-wraper bold black">{title}</div>
				{description && (
					<div className="description-wrapper black">{description}</div>
				)}
				{price && <div className="price-wrapper grey">{price}</div>}
				<div className="links-wrapper">
					<ul>
						<li>
							<a href={learnMoreLink}>Learn more</a>
						</li>
						<li>
							<a href={orderLink}>Order</a>
						</li>
					</ul>
				</div>
				{(captionLeft || captionRight) && (
					<div className="ipod-caption row">
						{captionLeft && (
							<div className="col-sm-12 col-md-6 text-md-right">
								{captionLeft}
							</div>
						)}
						{captionRight && (
							<div className="col-sm-12 col-md-6 text-md-left">
								{captionRight}
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	);
};

export default HighlightSection;
