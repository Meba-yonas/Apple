// MainSection.js
import React from "react";
import Lone from "./Lone";
import Rone from "./Rone";

const MainSection = () => {
	const leftSidePropsOne = {
		title: "iPhone 11",
		description: "Just the right amount of everything.",
		price: "From $18.70/mo. or $499 with trade‑in.<sup>1</sup>",
		links: [
			{ href: "", text: "Learn more" },
			{ href: "", text: "Apply now" },
		],
	};

	const rightSidePropsOne = {
		title: "Get the latest CDC response to COVID-19.",
		links: [{ href: "", text: "Watch the PSA" }],
		whiteText: true,
	};

	return (
		<section className="fourth-heghlight-wrapper">
			<div className="container-fluid">
				<div className="row">
					<Lone {...leftSidePropsOne} />
					<Rone {...rightSidePropsOne} />
				</div>
			</div>
		</section>
	);
};

export default MainSection;
