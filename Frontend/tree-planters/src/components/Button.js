import React from 'react';
import './Button.css';

function lerpColor(a, b, amount) {
	var ah = parseInt(a.replace(/#/g, ''), 16),
		ar = ah >> 16,
		ag = (ah >> 8) & 0xff,
		ab = ah & 0xff,
		bh = parseInt(b.replace(/#/g, ''), 16),
		br = bh >> 16,
		bg = (bh >> 8) & 0xff,
		bb = bh & 0xff,
		rr = ar + amount * (br - ar),
		rg = ag + amount * (bg - ag),
		rb = ab + amount * (bb - ab);

	return (
		'#' + (((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0).toString(16).slice(1)
	);
}

/* button:hover {
    background-color: #b71c1c;
} */

const Button = ({ onClick, colour, children }) => {
	colour = colour || '#c4c4c4';
	const [bgColour, setBgColour] = React.useState(colour);
	const darkerColour = lerpColor(colour, '#000000', 0.5);
	const makeDarker = () => setBgColour(darkerColour);
	const makeLighter = () => setBgColour(colour);

	return (
		<button
			onClick={onClick}
			className='customButton'
			style={{
				backgroundColor: bgColour,
			}}
			onMouseEnter={makeDarker}
			onMouseLeave={makeLighter}
		>
			{children}
		</button>
	);
};

export default Button;
