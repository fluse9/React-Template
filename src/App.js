import React from 'react';
import Router from './Router';
import { ThemeContext } from './Contexts';
import useTheme from './Themes/Theme';
import styled from 'styled-components';

const App = () => {
	const theme = useTheme();

	let body = window?.document?.body;
	body.style.backgroundColor = theme?.palette?.white?.main;
	body.style.padding = '8px';

	return (
		<ThemeContext.Provider value={theme}>
			<Router />
		</ThemeContext.Provider>
	);
};

export default App;
