import React from 'react';
import './Tile.css';
import { Parallax } from 'react-parallax';

const Tile = ({ image, header, text, color, reversed }) => {
	const imageTile = (
		<Parallax bgImage={image} strength={800} className = 'Tile'>
			<div />
		</Parallax>
	);

	const textTile = (
		<div className='Tile' style={{ backgroundColor: color }}>
			<h2 className='TileText'>{header}</h2>
			<p className='TileText'>{text}</p>
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
