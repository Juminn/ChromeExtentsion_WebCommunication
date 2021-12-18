module.exports = (sequelize, DataTypes) => {

  const Comment = sequelize.define("test_comment", {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
      type: 'TIMESTAMP',
      allowNull: true,
      defalutValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  },{
      timestamps:false,
      freezeTableName:true,
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      
  });
  return Comment;
};