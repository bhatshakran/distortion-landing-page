import React, { useEffect, useRef } from 'react';

import diss from '../images/diss.png';
import girl from '../images/01.png';
import hoverEffect from 'hover-effect/dist/hover-effect.js';
import man from '../images/manwearinhatt.png';
import styled from 'styled-components';

const DistortionWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 800px;
	height: 100%;
	display: flex;
	width: 500px;

	font-family: 'Poppins';
	.image-container {
		width: 580px;
		height: 720px;
		position: absolute;
		bottom: 50px;
	}
	canvas {
		width: 50rem;
		height: 60rem;
	}
	.img {
		width: 700px;
		height: 300px;
		object-fit: cover;
	}
	h1 {
		transform: rotate(-90deg);
		position: absolute;
		left: 600px;
		bottom: 200px;
		font-weight: 900;
		line-height: 37px;
		font-size: 3rem;
	}
	h3 {
		position: absolute;
		left: 580px;
		bottom: 120px;
		width: 180px;
		font-size: 0.7rem;
		transform: rotate(180deg);
		text-transform: uppercase;
	}
`;
const Distortion = () => {
	const distort = useRef(null);
	useEffect(() => {
		new hoverEffect({
			parent: distort.current,
			intensity: 0.2,
			image1: man,
			image2: girl,
			displacementImage: diss,
			imagesRatio: 380 / 300,
		});
	}, []);

	return (
		<DistortionWrapper>
			<div className='image-container' ref={distort}></div>
			<h1>
				LONDON
				<br /> FASHION
				<br /> WEEK
			</h1>
			<h3>Official Sponsor</h3>
		</DistortionWrapper>
	);
};

export default Distortion;
