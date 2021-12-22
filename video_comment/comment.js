
module.exports = (sequelize, DataTypes) => {

    const Comment = sequelize.define("video_comment", {
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: 'TIMESTAMP',
            allowNull: true,
            defalutValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        recommend: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        report: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        url: {
            type: DataTypes.VARCHAR,
            allowNull: false,
        },
        {
            freezeTableName: true,
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정

        });
    return Comment;
};