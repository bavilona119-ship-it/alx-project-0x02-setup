import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">📝 Posts</h1>

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
    </div>
  );
}

// ✅ getStaticProps pour le data fetching
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: { posts },
  };
}
