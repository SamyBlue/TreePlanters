import React from 'react';

const useScrollPos = () => {
	const [scrollPosition, setScrollPosition] = React.useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
    }, []);
    return scrollPosition
};

export default useScrollPos;
