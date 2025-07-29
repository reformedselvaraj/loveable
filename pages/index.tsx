import { useState, useRef } from "react";
import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import Feed from "../components/Feed";
import CreatePostDialog from "../components/CreatePostDialog";

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [isCreateReelOpen, setIsCreateReelOpen] = useState(false);
  const feedRef = useRef<{ addNewPost: (postData: any) => void }>(null);

  const handleCreatePost = (postData: { content: string; category: string; image?: string }) => {
    if (feedRef.current) {
      feedRef.current.addNewPost(postData);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Header 
        onCreatePost={() => setIsCreatePostOpen(true)} 
        onCreateReel={() => setIsCreateReelOpen(true)} 
      />
      <CategoryTabs 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      <Feed ref={feedRef} activeCategory={activeCategory} />

      <CreatePostDialog
        open={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
        onCreate={handleCreatePost}
      />

      {isCreateReelOpen && (
        <div style={{ marginTop: 20, background: "#eee", padding: 10 }}>
          🎬 Reel creation modal coming soon!
          <button onClick={() => setIsCreateReelOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
