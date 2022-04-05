import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DeleteIcon from '@mui/icons-material/Delete';

const tempTasks = [
	{ task: 'fix problems', project: 'Top10MoneyTransfers' },
	{
		task: 'fix',
		project: 'Top10MobileBanks',
	},
	{
		task: 'change all',
		project: 'Projectools',
	},
	{
		task: 'modify',
		project: 'Top10BusinessBanks',
	},
	{ task: 'fix problems', project: 'Top10MoneyTransfers' },
	{
		task: 'fix',
		project: 'Top10MobileBanks',
	},
	{
		task: 'change all',
		project: 'Projectools',
	},
	{
		task: 'modify',
		project: 'Top10BusinessBanks',
	},
	{ task: 'fix problems', project: 'Top10MoneyTransfers' },
	{
		task: 'fix',
		project: 'Top10MobileBanks',
	},
	{
		task: 'change all',
		project: 'Projectools',
	},
	{
		task: 'modify',
		project: 'Top10BusinessBanks',
	},
	{ task: 'fix problems', project: 'Top10MoneyTransfers' },
	{
		task: 'fix',
		project: 'Top10MobileBanks',
	},
	{
		task: 'change all',
		project: 'Projectools',
	},
	{
		task: 'modify',
		project: 'Top10BusinessBanks',
	},
	{ task: 'fix problems', project: 'Top10MoneyTransfers' },
	{
		task: 'fix',
		project: 'Top10MobileBanks',
	},
	{
		task: 'change all',
		project: 'Projectools',
	},
	{
		task: 'modify',
		project: 'Top10BusinessBanks',
	},
	{ task: 'fix problems', project: 'Top10MoneyTransfers' },
	{
		task: 'fix',
		project: 'Top10MobileBanks',
	},
	{
		task: 'change all',
		project: 'Projectools',
	},
	{
		task: 'modify',
		project: 'Top10BusinessBanks',
	},
];
const Tasks = () => {
	return (
		<>
			<h2>Tasks</h2>
			<div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
				{tempTasks.map((e, i) => {
					return (
						<Card style={{ minWidth: '200px' }} key={i}>
							<CardContent
								style={{
									padding: '5px',
									direction: 'rtl',
								}}
							>
								<span
									style={{
										backgroundColor: 'RGB(30,80,160)',
										padding: '5px',
										margin: '5px',
										fontSize: '12px',
										color: 'white',
										borderRadius: '15px',
									}}
								>
									{e.project}
								</span>
							</CardContent>
							<CardHeader
								style={{
									paddingTop: '0',
								}}
								title={e.task}
								subheader='fdsfs'
							/>
							<CardActions disableSpacing>
								<IconButton aria-label='add Task'>
									<DeleteIcon />
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

export default Tasks;
