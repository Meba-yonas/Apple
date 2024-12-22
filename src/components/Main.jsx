// MainSection.js
import React from "react";
import LeftSide from "./Leftside";
import RightSide from "./Rightside";

const MainSection = () => {
	const leftSideProps = {
		imgSrc: "images/icons/arcade.png",
		description: "Agent 8 is a small hero on a big mission.",
		links: [
			{ href: "", text: "Play now", sup: "2" },
			{ href: "", text: "Learn about Apple Arcade" },
		],
	};

	const rightSideProps = {
		title: "Apple Card Monthly Installments",
		description:
			"Pay for your next iPhone over time, interest-free with Apple Card.",
		links: [
			{ href: "", text: "Learn more" },
			{ href: "", text: "Apply now" },
		],
	};

	return (
		<section className="sixth-heghlight-wrapper">
			<div className="container-fluid">
				<div className="row">
					<LeftSide {...leftSideProps} />
					<RightSide {...rightSideProps} />
				</div>
			</div>
		</section>
	);
};

export default MainSection;
