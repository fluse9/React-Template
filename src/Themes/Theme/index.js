const useTheme = () => {
	const palette = {
		primary: {
			dark: 'rgb(28, 50, 109)',
			main: 'rgb(70, 101, 174)',
			light: 'rgb(0, 139, 224)',
		},
		secondary: {
			dark: 'rgb(55, 120, 58)',
			main: 'rgb(31, 196, 40)',
			light: 'rgb(40, 247, 51)',
		},
		tertiary: {
			dark: 'rgb(196, 45, 141)',
			main: 'rgb(247, 57, 176)',
			light: 'rgb(249, 132, 206)',
		},
		accent: {
			dark: 'rgb(196, 26, 26)',
			main: 'rgb(228, 29, 30)',
			light: 'rgb(247, 32, 32)',
		},
		info: {
			main: 'rgb(52, 132, 240)',
		},
		success: {
			main: 'rgb(113, 201, 69)',
		},
		warning: {
			main: 'rgb(236, 181, 85)',
		},
		error: {
			main: 'rgb(225, 45, 45)',
		},
		white: {
			main: 'rgb(255, 255, 255)',
		},
		black: {
			black: 'rgb(0, 0, 0)',
			dark: 'rgb(21, 27, 31)',
			main: 'rgb(31, 41, 46)',
			light: 'rgb(39, 52, 59)',
		},
		gray: {
			dark: 'rgb(65, 80, 88)',
			main: 'rgb(200, 205, 208)',
			light: 'rgb(242, 242, 243)',
		},
	};

	const cssProperties = {
		boxShadow: {
			black: `0px 8px 32px 0px ${palette?.black?.dark}`,
			dark: `${palette?.gray?.main} 0px 19px 38px, ${palette?.black?.light} 0px 15px 12px;`,
			main: `${palette?.gray?.main} 0px 50px 100px -20px, ${palette?.black?.light} 0px 30px 60px -30px`,
			light: `0px 8px 32px 0px ${palette?.gray?.main}`,
		},
	};

	const theme = {
		palette: palette,
		cssProperties: cssProperties,
	};

	return theme;
};

export default useTheme;
