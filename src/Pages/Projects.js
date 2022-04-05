import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const tempProj = [
	'Top10MoneyTransfers',
	'Top10MobileBanks',
	'Projectools',
	'Top10BusinessBanks',
];
const Projects = () => {
	return (
		<>
			<h2>Projects</h2>
			<div
				style={{
					display: 'flex',
					gap: '20px',
					flexDirection: 'column',
				}}
			>
				{tempProj.map((e, i) => {
					return (
						<Card
							style={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<CardHeader
								style={{
									paddingTop: '0',
								}}
								title={e}
								subheader='desc'
							/>
							<CardActions disableSpacing>
								<IconButton aria-label='add Task'>
									<AddCircleIcon />
								</IconButton>
								<IconButton aria-label='get in'>
									<ArrowCircleRightIcon />
								</IconButton>
							</CardActions>
						</Card>
					);
				})}
			</div>
		</>
	);
};

export default Projects;
