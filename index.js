import { useRef, useState, useEffect } from "react";

const useViewability = (options = {}) => {
	const inViewRef = useRef();
	const [inView, setInView] = useState(false);

	const handler = ([entry]) => setInView(entry.isIntersecting);
	const observer = new IntersectionObserver(handler, options);

	useEffect(() => {
		observer.observe(inViewRef.current);
		return () => observer.disconnect();
	});

	return [inView, inViewRef];
};

export default useViewability;
