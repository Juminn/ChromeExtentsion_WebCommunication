module.exports = (sequelize, DataTypes) => {

  const Comment = sequelize.define("ScrollComment", {
    comment_ID: {
      type: DataTypes.VARCHAR(50),
      allowNull: false,
      primaryKey: true,
    },
    user_ID: {
      type: DataTypes.VARCHAR(50),
      allowNull: false,
      foreignKey: true,
    },
    comment: {
      type: DataTypes.VARCHAR(255),
      allowNull: false,
    },
    scroll_location: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    recommend: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    report: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.VARCHAR(255),
      allowNull: false,
    },
  },{
      timestamps:false,
      freezeTableName:true,
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      
  });
  return Comment;
};