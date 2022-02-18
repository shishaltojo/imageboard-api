import express from 'express';
import pgPromise, { IMain, IDatabase } from 'pg-promise';

const pgp: IMain = pgPromise();

const db = pgp('postgres://alejandro:123qweasd@localhost:5432/mydb');

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
	db.one('SELECT * FROM dog WHERE id=1')
		.then(data => {
			console.log(data);
		})
		.catch(error => console.error(error));

	res.send({
		data: [
			{
				name: 'Fido',
				breed: 'labrador',
				adopted_at: null,
				birth_date: null,
			}
		],
		message: 'success',
	});
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});