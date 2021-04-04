import { MenuOutline } from 'react-ionicons';
import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
	width: 90px;
	display: flex;
	flex-direction: column;
	height: 100vh;

	justify-content: flex-start;
	.hamburger {
		margin: 0 auto;
		font-size: 2.5rem;
		cursor: pointer;

		&:hover {
			path {
				stroke: orangered;
			}
		}
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 100%;
		li {
			transform: rotate(-90deg);
			font-family: 'Poppins';
			cursor: pointer;
			font-size: 0.8rem;
			&:hover {
				color: orangered;
			}
		}
	}
`;

const Navbar = () => {
	return (
		<NavbarWrapper>
			<div className='hamburger'>
				<MenuOutline />
			</div>

			<ul>
				<li>Facebook</li>
				<li>Instagram</li>
				<li>LinkedIn</li>
			</ul>
		</NavbarWrapper>
	);
};

export default Navbar;
