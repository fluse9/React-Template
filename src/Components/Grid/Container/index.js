import React from 'react';
import styled from 'styled-components';

const Container = ({
	direction = 'row',
	wrap = 'wrap',
	justifyContent = 'center',
	alignItems = 'center',
	spacing = 0,
	height,
	padding = 0,
	children,
}) => {
	const Container = styled.div`
		display: flex;
		flex-flow: ${direction} ${wrap};
		justify-content: ${justifyContent};
		align-items: ${alignItems};
		gap: ${4 * spacing}px;
		height: ${height}%;
	`;

	return (
		<Container>
			{React.Children?.map(children, (child) => {
				if (!React.isValidElement(child)) return null;

				return React.cloneElement(child, {
					...child.props,
					spacing: spacing,
				});
			})}
		</Container>
	);
};

export default Container;
