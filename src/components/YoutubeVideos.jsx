// 
// src/components/YoutubeVideos.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const YoutubeVideos = () => {
	const [videos, setVideos] = useState([]);
	const API_KEY = "AIzaSyCzQ7x17--3eO97UHd821JRqSrETHaYaG4";

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const response = await axios.get(
					`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`
				);
				setVideos(response.data.items);
			} catch (error) {
				console.error("Error fetching YouTube videos:", error);
			}
		};
		fetchVideos();
	}, [API_KEY]);

	return (
		<div className="youtube-videos container">
			{videos.map((video) => (
				<div key={video.id.videoId} className="video col-sm-12 col-md-4 ">
					<iframe
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${video.id.videoId}`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title={video.snippet.title}
					></iframe>
					<h3>{video.snippet.title}</h3>
                    <p>{video.snippet.description}</p>
				</div>
			))}
		</div>
	);
};

export default YoutubeVideos;
