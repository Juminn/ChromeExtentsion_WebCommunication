const { sequelize } = require('../models/index.js')

const driver = () => {
    sequelize.sync().then(() => {
        console.log('�ʱ�ȭ �Ϸ�');
    }).catch((err) => {
        console.error('�ʱ�ȭ ����')
        console.error(err);
    });
};
driver();