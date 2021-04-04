import './styles/global.css';

import * as React from 'react';

import Distortion from './components/Distortion';
import HeroBanner from './components/HeroBanner';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const IndexWrapper = styled.div`
	height: 100vh;
	width: 100%;
	overflow: hidden;
	background-color: rgb(240, 248, 255);
`;
const App = () => {
	return (
		<IndexWrapper>
			<Navbar />
			<HeroBanner />
			<Distortion />
		</IndexWrapper>
	);
};

export default App;
