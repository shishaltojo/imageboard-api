import express from 'express';
import { Sequelize } from 'sequelize';

import User from './models/User';

const sequelize = new Sequelize('postgres://alejandro:123qweasd@localhost:5432/mydb');

const user = User(sequelize);
user.sync()
	.then(() => console.log('User table created'))
	.catch((error:any) => console.error(error));

const app = express();

app.get('/', (req, res) => {
	sequelize.authenticate()
		.then(() => {
			console.log('Connection has been established successfully.');
		})
		.catch(error => {
			console.error('Unable to connect to the database:', error);
		});
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});