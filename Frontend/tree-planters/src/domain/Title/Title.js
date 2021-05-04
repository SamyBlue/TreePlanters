import React from 'react';
import './Title.css';
import Lottie from 'react-lottie';
import animationData from '../../lotties/36236-sun-icon.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
};

const Title = () => {
	return (
		<div>
			<img id='Title' src={'TitleDesign.png'} alt='Nature' />
			<div id='Sun'>
				<Lottie  options={defaultOptions} />
			</div>
			<h1 id='Subtitle'>Join our mission to save the worlds trees</h1>
		</div>
	);
};

export default Title;
