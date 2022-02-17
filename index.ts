import express from 'express';

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
>('/api/v1/dogs', (req, res) => {
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