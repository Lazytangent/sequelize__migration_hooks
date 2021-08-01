'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.hasMany(models.Comment, { foreignKey: 'post_id' });
      Post.belongsTo(models.User, { foreignKey: 'user_id' });
      Post.belongsToMany(models.User, { through: models.Comment, as: 'users_commented', foreignKey: 'post_id', otherKey: 'user_id' });
    }
  };
  Post.init({
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
    underscored: true,
  });
  return Post;
};
