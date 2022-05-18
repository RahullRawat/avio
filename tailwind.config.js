module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			primary: "#FF3B30",
			white: "#fff",
			gray: "#f7f7f7",
			black: "#111",
		},
		fontFamily: {
			roboto: "Roboto,sans-serif",
		},
		screens: {
			xl: { max: "1280px" },
			// => @media (max-width: 1280px) { ... }

			lg: { max: "1024px" },
			// => @media (max-width: 1024px) { ... }

			md: { max: "768px" },
			// => @media (max-width: 768px) { ... }

			sm: { max: "425px" },
			// => @media (max-width: 425px) { ... }
		},
		extend: {},
	},
	plugins: [],
};
