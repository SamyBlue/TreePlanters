import React from 'react';
import './Tile.css';

const Tile = ({ image, header, text, reversed }) => {
	const imageTile = (
		<div className='Tile' style={{ backgroundColor: '#6cbe30' }}>
			<img src={image} alt='Nature' />
		</div>
	);

	const textTile = (
		<div className='Tile' style={{ backgroundColor: '#dbb95f' }}>
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
