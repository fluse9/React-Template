import React from 'react';
import { Button } from '../../Components/Buttons';
import { Card } from '../../Components/Cards';
import { Container, Item } from '../../Components/Grid';
import { ThemeContext } from '../../Contexts';
import Typography from '../../Typography';

const Main = () => {
	const themeContext = React.useContext(ThemeContext);

	return (
		<React.Fragment>
			<Container
				direction={'row'}
				wrap={'wrap'}
				justifyContent={'center'}
				alignItems={'center'}
				spacing={2}
			>
				<Item size={8}>
					<Container
						direction={'row'}
						wrap={'wrap'}
						justifyContent={'center'}
						alignItems={'center'}
						spacing={4}
					>
						<Item size={12}>
							<Card
								backgroundColor={themeContext?.palette?.black?.light}
								boxShadow={themeContext?.cssProperties?.boxShadow?.black}
							>
								<div style={{ height: '400px' }} />
							</Card>
						</Item>
						<Item size={4}>
							<Card
								backgroundColor={themeContext?.palette?.black?.light}
								boxShadow={themeContext?.cssProperties?.boxShadow?.black}
							>
								<div style={{ height: '200px' }}>
									<Container direction={'column'} spacing={2} height={100}>
										<Typography
											variant={'h1'}
											color={themeContext?.palette?.primary?.light}
										>
											{31}
										</Typography>
										<Typography
											variant={'h6'}
											color={themeContext?.palette?.primary?.light}
										>
											{'transfers initiated'}
										</Typography>
									</Container>
								</div>
							</Card>
						</Item>
						<Item size={4}>
							<Card
								backgroundColor={themeContext?.palette?.black?.light}
								boxShadow={themeContext?.cssProperties?.boxShadow?.black}
							>
								<div style={{ height: '200px' }}>
									<Container direction={'column'} spacing={2} height={100}>
										<Typography
											variant={'h1'}
											color={themeContext?.palette?.primary?.light}
										>
											{479}
										</Typography>
										<Typography
											variant={'h6'}
											color={themeContext?.palette?.primary?.light}
										>
											{'users have a linked account'}
										</Typography>
									</Container>
								</div>
							</Card>
						</Item>
						<Item size={4}>
							<Card
								backgroundColor={themeContext?.palette?.black?.light}
								boxShadow={themeContext?.cssProperties?.boxShadow?.black}
							>
								<div style={{ height: '200px' }}>
									<Container direction={'column'} spacing={2} height={100}>
										<Typography
											variant={'h1'}
											color={themeContext?.palette?.primary?.light}
										>
											{17}
										</Typography>
										<Typography
											variant={'h6'}
											color={themeContext?.palette?.primary?.light}
										>
											{'account opening referrals'}
										</Typography>
									</Container>
								</div>
							</Card>
						</Item>
					</Container>
				</Item>
				<Item size={4}>
					<Card
						backgroundColor={themeContext?.palette?.black?.light}
						boxShadow={themeContext?.cssProperties?.boxShadow?.black}
					>
						<div style={{ height: '632px' }}>
							<Container direction={'column'} spacing={2} height={66}>
								<Typography
									variant={'h0'}
									color={themeContext?.palette?.accent?.main}
								>
									{4338}
								</Typography>
								<Typography
									variant={'h5'}
									color={themeContext?.palette?.accent?.main}
								>
									{'lives impacted'}
								</Typography>
							</Container>
						</div>
					</Card>
				</Item>
			</Container>
		</React.Fragment>
	);
};

export default Main;
