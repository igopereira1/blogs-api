const PostService = require('../services/post.service');

const getAllPosts = async (_req, res) => {
  const post = await PostService.getAllPosts();
  return res.status(200).json(post);
};

module.exports = {
  getAllPosts,
}; 