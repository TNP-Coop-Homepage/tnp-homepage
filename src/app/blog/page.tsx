import { getAllBlogPosts, getAllTags } from "@/utils/blog/getBlogPosts";
import BlogPageClient from "./BlogPageClient";
import "../globals.css";

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const tags = getAllTags();

  return <BlogPageClient posts={posts} tags={tags} />;
}
