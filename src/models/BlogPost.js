module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    title: DataTypes.STRING,
    content: DataTypes.DATE,
    userId: { type: DataTypes.INTEGER, foreignKey: true, },
    published: DataTypes.STRING,
    updated: DataTypes.DATE,
  },
    {
      timestamps: true,
      tableName: 'blogPost',
      underscored: true,
    });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};