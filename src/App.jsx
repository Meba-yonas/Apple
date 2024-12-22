// import { Component } from "react";
import Header from "./components/Header";
import "../resource/css/styles.css";
import Mainn from "./components/pages/Mainn/Mainn.jsx";
import "./App.css"
import Mac from "./components/pages/Mac/Mac";
import Watch from "./components/pages/Watch/Watch";
import Ipad from "./components/pages/Ipad/Ipad";
import Iphone from "./components/pages/Iphone/Iphone.jsx";

import Music from "./components/pages/Music/Music";
import Airpods from "./components/pages/Airpods/Airpods";
import FourOFour from "./components/pages/404/FourOFour.jsx";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Sharedlayout from "./components/pages/sharedlayout/Sharedlayout.jsx";
// import SectionThree from "./components/SectionThree";

// export default class App extends Component {
// 	render() {
// 		return(
//         <>
//     <Header/>
//     <SectionOne/>
//         </>)
// 	}
// }
const App = () => {
	// const thirdHighlightProps = {
	// 	wrapperClass: "fourth-heghlight-wrapper",
	// 	logo: "../resource/images/icons/apple-tv-logo.png",
	// 	image: "",
	// 	description: `With the Always-On Retina display. 
    //         You’ve never seen a watch like this.`,
    //     desc_two:`Get letaset CDC `+ <br/> + ` Covid response`,    
	// 	links: [
	// 		{ url: "", text: "Learn more" },
	// 		{ url: "", text: "Buy" },
	// 	],
	// };

	// const highlightSections = [
	// 	{
	// 		wrapperClass: "sixth-heghlight-wrapper",
	// 		title: "iPhone 11",
	// 		description: "Just the right amount of everything.",
	// 		price: "From $18.70/mo. or $499 with trade‑in.<sup>1</sup>",
	// 		links: [
	// 			{ url: "", text: "Learn more" },
	// 			{ url: "", text: "Apply now" },
	// 		],
	// 		isLeft: true,
	// 	},
	// 	{
	// 		wrapperClass: "sixth-heghlight-wrapper",
	// 		title: "Apple Card Monthly Installments",
	// 		description:
	// 			"Pay for your next iPhone over time, interest-free with Apple Card.",
	// 		links: [
	// 			{ url: "", text: "Learn more" },
	// 			{ url: "", text: "Apply now" },
	// 		],
	// 		isLeft: false,
	// 	},
	// 	{
	// 		wrapperClass: "sixth-heghlight-wrapper",
	// 		logo: "images/icons/arcade.png",
	// 		description: "Agent 8 is a small hero on a big mission.",
	// 		links: [
	// 			{ url: "", text: "Play now", sup: "2" },
	// 			{ url: "", text: "Learn about Apple Arcade" },
	// 		],
	// 		linkClass: "white",
	// 		isLeft: true,
	// 	},
	// 	{
	// 		wrapperClass: "sixth-heghlight-wrapper",
	// 		title: "Get the latest CDC response to COVID-19.",
	// 		links: [{ url: "", text: "Watch the PSA" }],
	// 		linkClass: "white",
	// 		isLeft: false,
	// 	},
	// ];


	return (
		<>
			{/* <Header /> */}
			<Routes>
				<Route path="/" element={<Sharedlayout />}>
					<Route path="/" element={<Mainn />} />
					<Route path="/Mac" element={<Mac />} />
					<Route path="/iphone" element={<Iphone />} />
					<Route path="/Ipad" element={<Ipad />} />
					<Route path="/Watch" element={<Watch />} />
					<Route path="/AirPods" element={<Airpods />} />
					<Route path="/Music" element={<Music />} />
					<Route path="*" element={<FourOFour />} />
				</Route>
			</Routes>

			{/* <div>
				<SectionTwo {...thirdHighlightProps} />
			</div> */}
			{/* <div>
				<SectionTwo/>
			</div> */}
			{/* <div>
				{highlightSections.map((section, index) => (
					<SectionThree key={index} {...section} />
				))}
			</div> */}

			{/* <Footer /> */}
		</>
	);
};

export default App;
