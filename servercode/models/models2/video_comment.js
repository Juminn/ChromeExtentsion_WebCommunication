module.exports = (sequelize, DataTypes) => {

  const video_comment = sequelize.define("video_comment", {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment_location: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    recommend : {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    report :{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    url :{
      type: DataTypes.STRING,
      allowNull: true,
    },
  },{
      freezeTableName:true,
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
  });
  return video_comment;
};