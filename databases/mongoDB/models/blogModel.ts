import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true, lowercase: true, unique: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    video: { type: String, required: true },
    tags: [{ type: String }],
    categories: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
