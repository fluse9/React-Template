import React from 'react';
import styled from 'styled-components';

const Card = ({ backgroundColor, boxShadow, children }) => {
	const Card = styled.div`
		background-color: ${backgroundColor};
		border-radius: 8px;
		box-shadow: ${boxShadow};
		padding: 8px;
	`;

	return <Card>{children}</Card>;
};

export default Card;
