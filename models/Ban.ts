import { DataTypes } from 'sequelize';

const Ban = (sequelize:any) => {
  const Ban = sequelize.define('ban', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    ipStart: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false
    },
    ipEnd: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false
    },
    created: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    expires: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: null
    },
    board: {
      type: DataTypes.STRING(58),
      defaultValue: null
    },
    creator: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reason:{
      type: DataTypes.TEXT
    },
    seen: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    post: {
      type: DataTypes.BLOB
    }
  }, {
    indexes: [
      {
        fields: ['expires']
      },
      {
        fields: ['ip_start', 'ip_end']
      }
    ]
  });

  return Ban;
};

export default Ban;