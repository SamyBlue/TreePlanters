import React from "react";
import "./ContentTiles.css";
import Tile from "../../components/Tile";

const ContentTiles = () => {
	const content = [
		{
			image: "nature1.gif",
			header: "There are more trees than people...",
			text: `A study has found that there are over 3 trillion trees on Earth – which is 422 times as many as there are people. That figure sounds pretty impressive, until you consider that since the start of human civilization (about 11,700 years ago) the total number of trees on Earth has fallen by around 46%.`,
			color: "#214034",
		},
		{
			image:
				"https://media4.giphy.com/media/DCgQCpNAN7JvMh4Eko/giphy.gif?cid=ecf05e47117bx738zo1xghuse44se3ulg0d6nf443ewt8yu7&rid=giphy.gif",
			header: "Trees release chemicals that can make us happier...",
			text: `It’s been proven that just looking at trees can make us feel happier, less stressed and more creative. That’s partly because they release chemicals called phytoncides. Research has shown that when we breathe them in, it can have amazing effects, reducing blood pressure, lowering anxiety levels and increasing pain threshold – and they can even boost our levels of anti-cancer proteins.`,
			color: "#432e14",
		},
		{
			image:
				"https://media0.giphy.com/media/kAC9RyL05kwYuJK7ju/giphy.gif?cid=790b76113f919753fae00a17d350dba4ef96b211c5ed99ae&rid=giphy.gif",
			header: "Some trees don’t have a growth ceiling...",
			text: `In fact, they’ll only stop growing when their highest leaves start dying of thirst. That happens when the atmospheric pressure at such a high altitude stops them moving nutrients and water from the roots all the way up to the leaves.`,
			color: "#6cbe30",
		},
	];

	let reversed = true; //Allows tiles to alternate in a nice pattern

	return (
		<div className="ContentTiles">
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
