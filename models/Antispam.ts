import { DataTypes } from 'sequelize';

const Antispam = (sequelize:any) => {
	const Antispam = sequelize.define('antispam', {
		board: {
			type: DataTypes.STRING(58),
			charset: 'utf8',
			allowNull: false,
		},
		thread: {
			type: DataTypes.INTEGER,
			defaultValue: null,
		},
		hash: {
			type: DataTypes.STRING(40),
			collate: 'ascii_bin',
			allowNull: false,
			primaryKey: true,
		},
		created: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		expires: {
			type: DataTypes.INTEGER,
			defaultValue: null,
		},
		passed: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	}, {

	});

	return Antispam;
};

export default Antispam;