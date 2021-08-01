'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, { foreignKey: 'user_id' });
      User.hasMany(models.Comment, { foreignKey: 'user_id' });
      User.belongsToMany(models.Post, { through: models.Comment, as: 'commented_posts', foreignKey: 'user_id', otherKey: 'post_id' });
    }
  };
  User.init({
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });
  return User;
};
