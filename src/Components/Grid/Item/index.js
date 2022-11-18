import React from 'react';
import styled from 'styled-components';

const Item = ({ size, spacing, children }) => {
	const Item = styled.div`
		width: calc(${(size / 12) * 100}% - ${4 * spacing}px);
	`;

	return <Item>{children}</Item>;
};

export default Item;
