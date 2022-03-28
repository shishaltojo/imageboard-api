import { DataTypes } from 'sequelize';

const Board = (sequelize:any) => {
  const Board = sequelize.define('board', {
    uri: {
      type: DataTypes.STRING(58),
      charset: 'utf8',
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    subtitle: {
      type: DataTypes.STRING(255)
    }
  }, {

  })
};

export default Board;