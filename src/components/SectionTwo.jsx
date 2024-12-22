import React from "react";

const TitleWrapper = ({ children, className = "" }) => (
	<div className={`title-wraper ${className}`}>{children}</div>
);

const DescriptionWrapper = ({ children }) => (
	<div className="description-wraper">{children}</div>
);

const PriceWrapper = ({ children }) => (
	<div className="price-wrapper">{children}</div>
);

const LinksWrapper = ({ links, className = "" }) => (
	<div className={`links-wrapper ${className}`}>
		<ul>
			{links.map((link, index) => (
				<li key={index}>
					<a href={link.href}>{link.text}</a>
				</li>
			))}
		</ul>
	</div>
);

const SideWrapper = ({ title, description, price, links, className = "" }) => (
	<div className={`col-sm-12 col-md-6 ${className}`}>
		<div className="side-container">
			<TitleWrapper className={className.includes("white") ? "white" : ""}>
				{title}
			</TitleWrapper>
			{description && <DescriptionWrapper>{description}</DescriptionWrapper>}
			{price && <PriceWrapper>{price}</PriceWrapper>}
			<LinksWrapper
				links={links}
				className={className.includes("white") ? "white" : ""}
			/>
		</div>
	</div>
);

const SectionTwo=() => (
	<section className="fourth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<SideWrapper
					title="iPhone 11"
					description="Just the right amount of everything."
					price="From $18.70/mo. or $499 with trade‑in.<sup>1</sup>"
					links={[
						{ href: "", text: "Learn more" },
						{ href: "", text: "Apply now" },
					]}
				/>
				<SideWrapper
					title="Get the latest CDC response to COVID-19."
					links={[{ href: "", text: "Watch the PSA" }]}
					className="right-side-wrapper"
				/>
			</div>
		</div>
	</section>
);

export default SectionTwo;
