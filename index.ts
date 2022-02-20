import express from 'express';
import { Sequelize } from 'sequelize';

import Antispam from './models/Antispam';

const sequelize = new Sequelize('postgres://alejandro:123qweasd@localhost:5432/mydb', {
  define: {
    underscored: true,
    freezeTableName: true
  }
});

const antispam = Antispam(sequelize);
antispam.sync();

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