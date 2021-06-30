module.exports = (sequelize, Sequelize) => {
    const Fivehundred = sequelize.define("fivehundred", {
        status: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },
        logstatus: {
            type: Sequelize.STRING
        }
    });

    return Fivehundred;
};
