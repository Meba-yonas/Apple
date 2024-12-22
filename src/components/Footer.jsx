import React, { useEffect } from "react";
import $ from "jquery";
import flag from "../../resource/images/icons/16.png";
import FooterLinks from "./FooterLinks";
import FooterInfo from "./FooterInfo";

export default function Footer() {
	useEffect(() => {
		const handleResize = () => {
			if ($(window).width() > 768) {
				$(".footer-links-wrapper ul").css("display", "block");
			} else {
				$(".footer-links-wrapper ul").css("display", "");
			}
		};

		$(".footer-links-wrapper h3").click(function () {
			if ($(window).width() <= 768) {
				$(this).next("ul").slideToggle();
				$(this).toggleClass("expanded");
			}
		});

		$(window).on("resize", handleResize);

		return () => {
			$(window).off("resize", handleResize);
			$(".footer-links-wrapper h3").off("click");
		};
	}, []);

	const footerLinksData = [
		{
			title: "Shop and Learn",
			links: [
				"Mac",
				"iPad",
				"iPhone",
				"Watch",
				"TV",
				"Music",
				"AirPods",
				"HomePod",
				"iPod touch",
				"Accessories",
				"Gift Cards",
			],
		},
		{
			title: "Services",
			links: [
				"Apple Music",
				"Apple News+",
				"Apple TV+",
				"Apple Arcade",
				"Apple Card",
				"iCloud",
			],
		},
		{
			title: "Account",
			links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
		},
		{
			title: "Apple Store",
			links: [
				"Find a Store",
				"Genius Bar",
				"Today at Apple",
				"Apple Camp",
				"Field Trip",
				"Apple Store App",
				"Refurbished and Clearance",
				"Financing",
				"Apple Trade In",
				"Order Status",
				"Shopping Help",
			],
		},
		{
			title: "For Business",
			links: ["Apple and Business", "Shop for Business"],
		},
		{
			title: "For Education",
			links: ["Apple and Education", "Shop for College"],
		},
		{
			title: "For Healthcare",
			links: [
				"Apple and Healthcare",
				"Health on Apple Watch",
				"Health Records on iPhone",
			],
		},
		{
			title: "For Government",
			links: ["Apple and Government", "Shop for Government"],
		},
		{
			title: "Apple Values",
			links: [
				"Accessibility",
				"Environment",
				"Privacy",
				"Supplier Responsibility",
			],
            
		},
		{
			title: "About Apple",
			links: [
				"Newsroom",
				"Apple Leadership",
				"Career Opportunities",
				"Investors",
				"Ethics & Compliance",
				"Events",
				"Contact Apple",
			],
		},
	];

	const footerInfoData = [
		{
			text: `1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and shipping not included. Additional Apple Card Monthly Installments terms are in the Customer Agreement. Additional iPhone Payments terms are here.`,
			link: "https://www.apple.com/legal/sales-support/iphoneinstallments_us/",
			linkText: "here",
		},
		{
			text: `2. Subscription required.\n\nMagic Keyboard sold separately.\n\nApple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.`,
			link: "https://www.apple.com/promo/",
			linkText: "terms",
		},
	];

	return (
		<footer className="footer-wrapper">
			<div className="container">
				<div className="upper-text-container">
					{footerInfoData.map((info, index) => (
						<FooterInfo
							key={index}
							text={info.text}
							link={info.link}
							linkText={info.linkText}
						/>
					))}
				</div>
				<div className="footer-links-wrapper row">
					{footerLinksData.map((section, index) => (
						<FooterLinks
							key={index}
							title={section.title}
							links={section.links}
						/>
					))}
				</div>
				<div className="my-apple-wrapper">
					More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
					<a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
				</div>
				<div className="copyright-wrapper row">
					<div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
						Copyright &copy; 2020 Apple Inc. All rights reserved.
					</div>
					<div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
						<ul>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Terms of Use</a>
							</li>
							<li>
								<a href="#">Sales and Refunds</a>
							</li>
							<li>
								<a href="#">Legal</a>
							</li>
							<li>
								<a href="#">Site Map</a>
							</li>
						</ul>
					</div>
					<div className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
						<div className="flag-wrapper">
							<img src={flag} alt="United States" />
						</div>
						<div className="footer-country-name">United States</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
