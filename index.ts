import express from 'express';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://alejandro:123qweasd@localhost:5432/mydb');

const app = express();

interface Dog {
  name: string;
  breed: 'labrador' | 'poodle' | 'pug';
  adopted_at: Date | null;
  birth_date: Date | null;
}

app.get<
  Record<string, never>,
  { data: Dog[], message: string },
  Record<string, never>,
  { page: number, limit: number, breed: 'labrador' | 'poodle' | 'pug' }
>('/', (req, res) => {
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