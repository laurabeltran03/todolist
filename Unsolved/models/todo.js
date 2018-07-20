module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("todos", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Todo;
};
