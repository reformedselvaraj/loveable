type CategoryTabsProps = {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
};

const categories = ["all", "funny", "inspiring", "serious"];

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div style={{ marginBottom: 20 }}>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          style={{
            marginRight: 8,
            fontWeight: activeCategory === cat ? "bold" : "normal"
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
