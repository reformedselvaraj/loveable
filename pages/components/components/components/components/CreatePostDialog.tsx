import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onCreate: (post: { content: string; category: string; image?: string }) => void;
};

export default function CreatePostDialog({ open, onClose, onCreate }: Props) {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("funny");

  if (!open) return null;

  const handleSubmit = () => {
    onCreate({ content, category });
    setContent("");
    setCategory("funny");
    onClose();
  };

  return (
    <div style={{ background: "#ddd", padding: 20, marginTop: 20 }}>
      <h3>Create a new post</h3>
      <input
        type="text"
        placeholder="What's on your mind?"
        value={content}
        onChange={e => setContent(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="funny">Funny</option>
        <option value="inspiring">Inspiring</option>
        <option value="serious">Serious</option>
      </select>
      <br /><br />
      <button onClick={handleSubmit}>Post</button>
      <button onClick={onClose} style={{ marginLeft: 10 }}>Cancel</button>
    </div>
  );
}
