import React from "react";
import HighlightSection from "../../HighlightSection";
import Main from "../../Main"
import Mainsec from "../../Mainsec";
import YoutubeVideos from "../../YoutubeVideos";
import SectionOne from "../../SectionOne"
const Mainn = () => {
	return (
		<>
			<SectionOne />

			<HighlightSection
				sectionClass="first-hightlight-wrapper"
				newAlert={true}
				title="iPad Pro"
				learnMoreLink="#"
				orderLink="#"
				captionLeft="iPad Pro available starting 3.25"
				captionRight="Magic Keyboard coming in May"
			/>
			<HighlightSection
				sectionClass="second-hightlight-wrapper"
				newAlert={true}
				title="MacBook Air"
				description="Twice the speed. Twice the storage."
				price="From $999."
				learnMoreLink="#"
				orderLink="#"
			/>
			<HighlightSection
				sectionClass="third-hightlight-wrapper"
				newAlert={false}
				title="Apple Watch"
				description="The future of health is on your wrist."
				learnMoreLink="#"
				orderLink="#"
			/>
			<Mainsec />
			<Main />
			<YoutubeVideos />
		</>
	);
};

export default Mainn;
