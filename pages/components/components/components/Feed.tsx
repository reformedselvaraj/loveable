import { forwardRef, useImperativeHandle, useState } from "react";

const Feed = forwardRef(({ activeCategory }: { activeCategory: string }, ref) => {
  const [posts, setPosts] = useState<any[]>([]);

  useImperativeHandle(ref, () => ({
    addNewPost(postData: any) {
      setPosts(prev => [postData, ...prev]);
    }
  }));

  const filtered = activeCategory === "all" 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  return (
    <div>
      {filtered.map((post, idx) => (
        <div key={idx} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
          <strong>{post.category}</strong>
          <p>{post.content}</p>
          {post.image && <img src={post.image} alt="Post" width="100" />}
        </div>
      ))}
    </div>
  );
});

export default Feed;
