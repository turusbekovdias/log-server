module.exports = (sequelize, Sequelize) => {
    const Logserver = sequelize.define("logserver", {
        title: {
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

    return Logserver;
};
