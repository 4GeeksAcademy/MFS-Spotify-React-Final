import React, { useState, useEffect, useRef } from "react";
import Player from "./Player";
import SongList from "./SongList";


//create your first component
const Home = () => {
	const [url] = useState("https://playground.4geeks.com")

	const [songs, setSongs] = useState([
		
			{
				"id": 1,
				"name": "Mario Castle",
				"url": "/sound/files/mario/songs/castle.mp3",
				"category": "category"
			},
			{
				"id": 2,
				"name": "Mario Star",
				"url": "/sound/files/mario/songs/hurry-starman.mp3",
				"category": "category"
			},
			{
				"id": 3,
				"name": "Mario Overworld",
				"url": "/sound/files/mario/songs/overworld.mp3",
				"category": "category"
			},
			{
				"id": 4,
				"name": "Mario Stage 1",
				"url": "/sound/files/mario/songs/stage1.mp3",
				"category": "category"
			},
			{
				"id": 5,
				"name": "Mario Stage 2",
				"url": "/sound/files/mario/songs/stage2.mp3",
				"category": "category"
			},
			{
				"id": 6,
				"name": "Mario Star",
				"url": "/sound/files/mario/songs/starman.mp3",
				"category": "category"
			},
			{
				"id": 7,
				"name": "Mario Underworld",
				"url": "/sound/files/mario/songs/underworld.mp3",
				"category": "category"
			},
			{
				"id": 8,
				"name": "Mario Underwater",
				"url": "/sound/files/mario/songs/underwater.mp3",
				"category": "category"
			},
			{
				"id": 9,
				"name": "Zelda Castle",
				"url": "/sound/files/videogame/songs/zelda_castle.mp3",
				"category": "category"
			},
			{
				"id": 10,
				"name": "Zelda Outworld",
				"url": "/sound/files/videogame/songs/zelda_outworld.mp3",
				"category": "category"
			},
			{
				"id": 11,
				"name": "Zelda Titles",
				"url": "/sound/files/videogame/songs/zelda_title.mp3",
				"category": "category"
			},
			{
				"id": 12,
				"name": "Sonic Brain Zone",
				"url": "/sound/files/videogame/songs/sonic_brain-zone.mp3",
				"category": "category"
			},
			{
				"id": 13,
				"name": "Zelda Link To Past",
				"url": "/sound/files/videogame/songs/zelda_link-to-past.mp3",
				"category": "category"
			},
			{
				"id": 14,
				"name": "Flintstones",
				"url": "/sound/files/cartoons/songs/flintstones.mp3",
				"category": "cartoon"
			},
			{
				"id": 15,
				"name": "power-rangers",
				"url": "/sound/files/cartoons/songs/power-rangers.mp3",
				"category": "cartoon"
			},
			{
				"id": 16,
				"name": "simpsons",
				"url": "/sound/files/cartoons/songs/simpsons.mp3",
				"category": "cartoon"
			},
			{
				"id": 17,
				"name": "south-park",
				"url": "/sound/files/cartoons/songs/south-park.mp3",
				"category": "cartoon"
			},
			{
				"id": 18,
				"name": "thundercats",
				"url": "/sound/files/cartoons/songs/thundercats.mp3",
				"category": "cartoon"
			},
			{
				"id": 19,
				"name": "x-men",
				"url": "/sound/files/cartoons/songs/x-men.mp3",
				"category": "cartoon"
			}
		])
	;

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const audioRef = useRef(null);

	//API rev 1° then
	const getSongs = () => {
		fetch("https://playground.4geeks.com/sound/songs", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (!response.ok) throw new Error("error canciones");
				return response.json();
			})
			.then((data) => {
				setSongs(data.songs || []);
			})
			.catch((error) => {
				console.error(error.message);
			});
	};

	useEffect(() => {
		getSongs();
	}, []);


	const togglePlay = () => {
		if (!audioRef.current) return;
		if (isPlaying) {
			audioRef.current.pause();
		} 
		else {audioRef.current.play();
			
		}
		setIsPlaying(!isPlaying);
	};

	const nextSong = () => {
		setCurrentIndex((prev) => (prev + 1) % songs.length);
	};

	const prevSong = () => {
		setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
	};
	const handleEnd = () => {
  nextSong();
};
	return (

		<div className="container bg-ligth">
			<SongList
				songs={songs}
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
			/>
			<Player
				playing={isPlaying}
				togglePlay={togglePlay}
				nextSong={nextSong}
				prevSong={prevSong}
				song={songs[currentIndex]}
			/>
			<audio
				ref={audioRef}
				src={url + songs[currentIndex]?.url}
				autoPlay={isPlaying}
				onEnded={handleEnd}
			/>
			
		</div>
	);
};

export default Home;


