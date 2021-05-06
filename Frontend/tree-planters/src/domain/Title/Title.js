import React from 'react';
import './Title.css';
import Lottie from 'react-lottie';
import animationData from '../../lotties/36236-sun-icon.json';
import useScrollPos from '../../hooks/useScrollPos';

const lottieOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
};

const Title = () => {
	const scrollPosition = useScrollPos();

	return (
		<div style={{ position: 'relative', marginTop: '50px' }}>
			<img id='Title' src={'TitleDesign2.png'} alt='Title' />
			<div id='Sun'>
				<Lottie options={lottieOptions} />
			</div>
			<h1 id='Subtitle'>Join our mission to save the worlds trees</h1>
			<img
				style={{ marginTop: `${scrollPosition * 0.4}px` }}
				id='Cloud1'
				src={'Cloud.png'}
				alt='Cloud1'
			/>
			<img
				style={{ marginTop: `${scrollPosition * 0.45}px` }}
				id='Cloud2'
				src={'Cloud.png'}
				alt='Cloud2'
			/>
		</div>
	);
};

export default Title;
