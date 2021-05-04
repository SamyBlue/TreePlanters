import React from 'react';
import './Tile.css';
import { Parallax } from 'react-parallax';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Tile = ({ image, header, text, color, reversed }) => {
	const { width } = useWindowDimensions();

	const imageTile =
		width > 750 ? (
			<Parallax bgImage={image} strength={500} className='Tile'>
				<div style={{ height: '450px' }} />
			</Parallax>
		) : (
			<div className='Tile'>
				<img src={image} alt='Nature' />
			</div>
		); //turns off parallax for mobile devices

	const textTile = (
		<div className='Tile' style={{ backgroundColor: color }}>
			<h2
				className='TileText'
				style={{ fontFamily: 'Lucida Handwriting', fontSize: 'xx-large' }}
			>
				{header}
			</h2>
			<p
				className='TileText'
				style={{ fontSize: 'large', position: 'relative', top: '-80px' }}
			>
				{text}
			</p>
			{/* Need to fix text positioning on smaller screens and vertically center*/}
		</div>
	);

	if (!reversed) {
		return (
			<React.Fragment>
				{imageTile}
				{textTile}
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				{textTile}
				{imageTile}
			</React.Fragment>
		);
	}
};

export default Tile;
