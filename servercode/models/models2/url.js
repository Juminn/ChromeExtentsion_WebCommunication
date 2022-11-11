module.exports = (sequelize, DataTypes) => {
  
  const url = sequelize.define("url", {
    urls : { //사이트 해당 url 
      type: DataTypes.STRING,
      allowNull: false,
    },
    video_location:{
      type: DataTypes.STRING,
      allowNull:true,
    }
  },{
      freezeTableName:true,
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
  });
  return url;
};