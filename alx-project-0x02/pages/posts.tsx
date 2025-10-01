import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
        const data = await res.json();
        // Adapter data à notre PostProps
        const formattedPosts: PostProps[] = data.map((post: any) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">📝 Posts</h1>

      {loading ? (
        <p className="text-gray-600">Loading posts...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
