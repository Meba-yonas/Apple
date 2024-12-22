import React from "react";

const FooterInfo = ({ text, link, linkText }) => {
	return (
		<p>
			{text}
			<a href={link} target="_blank" rel="noopener noreferrer">
				{linkText}
			</a>
		</p>
	);
};

export default FooterInfo;
