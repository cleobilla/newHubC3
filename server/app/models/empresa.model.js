module.exports = (sequelize, Sequelize) => {
    const Empresa = sequelize.define("novaTabEmpresa", {
	// Campos criados automaticamente
	//id
	nome: {
	    allowNull: false,
	    type: Sequelize.STRING
	},
	telefone: {
	    allowNull: false,
	    type: Sequelize.STRING
	},
	url: {
	    allowNull: true,
	    type: Sequelize.STRING
	},
	facebook: {
	    allowNull: true,
	    type: Sequelize.STRING
	},
	twitter: {
	    allowNull: true,
	    type: Sequelize.STRING
	},
	whatsapp: {
	    allowNull: true,
	    type: Sequelize.STRING
	},
	linkedin: {
	    allowNull: true,
	    type: Sequelize.STRING
	},
	instagram: {
	    allowNull: true,
	    type: Sequelize.STRING
	},
	endereco: {
	    allowNull: true,
	    type: Sequelize.STRING
	},
	bairro: {
	    allowNull: true,
	    type: Sequelize.STRING
	},
	data: {
	    allowNull: true,
	    type: Sequelize.BLOB('long')
	},
	logoNome: {
	    allowNull: true,
	    type: Sequelize.STRING
	},
	createdAt: {
            allowNull: true,
            type: Sequelize.DATE
	},
	updatedAt: {
            allowNull: true,
            type: Sequelize.DATE
	}
    });
    return Empresa;
};

