import { DataTypes } from 'sequelize';

const User = (sequelize:any) => {
	const User = sequelize.define('user', {
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, {
  
	});

	return User;
};

export default User;