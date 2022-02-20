import { DataTypes } from 'sequelize';

const AntiSpam = (sequelize:any) => {
  const AntiSpam = sequelize.define('anti_spam', {
    board: {
      type: DataTypes.STRING(58),
      charset: 'utf8',
      allowNull: false
    },
    thread: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    hash: {
      type: DataTypes.STRING(40),
      collate: 'ascii_bin',
      allowNull: false,
      primaryKey: true
    },
    created: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expires: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    passed: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    indexes: [
      {
        fields: ['board', 'thread']
      },
      {
        fields: ['expires']
      }
    ]
  });

  return AntiSpam;
};

export default AntiSpam;