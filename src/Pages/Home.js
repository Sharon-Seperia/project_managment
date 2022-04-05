import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

const tempProj = [
	'Top10MoneyTransfers',
	'Top10MobileBanks',
	'Projectools',
	'Top10BusinessBanks',
];
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
const home = () => {
	return (
		<>
			<h2>My Project</h2>
			<div style={{ display: 'flex', gap: '20px' }}>
				{tempProj.map((e, i) => {
					return (
						<Button variant='outlined' key={i}>
							{e}
						</Button>
					);
				})}
			</div>
			<h2>Latest Tasks</h2>
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
						</Card>
					);
				})}
			</div>
		</>
	);
};

export default home;
