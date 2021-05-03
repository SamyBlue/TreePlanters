import React from 'react';
import './ContentTiles.css';
import Tile from '../../components/Tile';

const ContentTiles = () => {
	const content = [
		{
			image: 'https://c.stocksy.com/a/u8V100/z9/358044.jpg',
			header: 'Saving the planet, one tree at a time...',
			text: `A typical tree can absorb around 21 kilograms of carbon dioxide per
            year once fully grown. Over a lifetime of 100 years, one tree could
            absorb around a tonne of CO2.`,
			color: '#dbb95f',
		},
		{
			image:
				'https://img.chooseacottage.co.uk/property/rof/840/rofo-11b_21.jpg',
			header: 'Saving the planet, one tree at a time...',
			text: `A typical tree can absorb around 21 kilograms of carbon dioxide per
            year once fully grown. Over a lifetime of 100 years, one tree could
            absorb around a tonne of CO2.`,
			color: '#432e14',
		},
		{
			image:
				'https://assets.weforum.org/article/image/rbMwmoo90af-EroZs1TPRvEZFaOrpXGq7arIzFJsmSI.jpg',
			header: 'Saving the planet, one tree at a time...',
			text: `A typical tree can absorb around 21 kilograms of carbon dioxide per
            year once fully grown. Over a lifetime of 100 years, one tree could
            absorb around a tonne of CO2.`,
			color: '#6cbe30',
		},
	];

	let reversed = true; //Allows tiles to alternate in a nice pattern

	return (
		<div className='ContentTiles'>
			{content.map((tile) => {
				reversed = !reversed;
				return (
					<Tile
						image={tile.image}
						header={tile.header}
						text={tile.text}
						color={tile.color}
						reversed={reversed}
					/>
				);
			})}
		</div>
	);
};

export default ContentTiles;
