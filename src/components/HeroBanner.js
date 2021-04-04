import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
	position: absolute;
	left: 90px;
	top: 0;
	font-family: 'Poppins';
	width: calc(443px + 100px);
	height: 100%;
	padding: 0;
	h1 {
		font-weight: 900;
		font-size: 9rem;
		letter-spacing: -12px;
		transform: rotate(-90deg);
		position: absolute;
		top: 350px;
		left: -150px;

		&:after {
			content: 'DUALITY';
			position: absolute;
			left: -80px;
			top: 70px;
			color: #fada5f;
			z-index: -1;
			letter-spacing: 20px;
			font-size: 10.5rem;
			font-weight: 500 !important;
			opacity: 0.65;
		}
	}
	h2 {
		position: absolute;
		top: 460px;
		left: 125px;
		transform: rotate(-90deg);
		font-size: 3rem;
		font-weight: 500;
		width: 500px;
		text-transform: uppercase;
	}
	h5 {
		position: absolute;
		top: 600px;
		transform: rotate(-90deg);
		left: 350px;
		font-weight: lighter;
		width: 300px;
	}
	img {
		position: absolute;
		left: 400px;
		top: 500px;
	}
`;
const HeroBanner = () => {
	return (
		<HeroWrapper>
			<h1>TONI&GUY</h1>
			<h2>
				Collection 2021
				<br />
				Duality
			</h2>
			<h5>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
				veniam eaque distinctio adipisci voluptates sequi ducimus inventore,
				ipsa deserunt quis!
			</h5>
		</HeroWrapper>
	);
};

export default HeroBanner;
