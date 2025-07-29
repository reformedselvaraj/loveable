type HeaderProps = {
  onCreatePost: () => void;
  onCreateReel: () => void;
};

export default function Header({ onCreatePost, onCreateReel }: HeaderProps) {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
      <h1>Lovable App</h1>
      <div>
        <button onClick={onCreatePost} style={{ marginRight: 10 }}>Create Post</button>
        <button onClick={onCreateReel}>Create Reel</button>
      </div>
    </header>
  );
}
