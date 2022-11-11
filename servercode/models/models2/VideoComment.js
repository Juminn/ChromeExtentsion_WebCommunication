module.exports = (sequelize, DataTypes) => {

  const Video_Comment = sequelize.define("Video_Comment", {
    comment_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true,
    },
    user_ID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date:{
      type: DataTypes.DATE,
      allowNull: true,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: true,
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
      allowNull:true,
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
  return Video_Comment;
};