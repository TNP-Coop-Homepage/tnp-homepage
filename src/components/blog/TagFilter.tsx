import styles from "./TagFilter.module.css";

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagChange: (selectedTags: string[]) => void;
}

export default function TagFilter({
  tags,
  selectedTags,
  onTagChange,
}: TagFilterProps) {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagChange(selectedTags.filter((t) => t !== tag));
    } else {
      onTagChange([...selectedTags, tag]);
    }
  };

  return (
    <div className={styles.tagList}>
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`${styles.tag} ${isSelected ? styles.selectedTag : ""}`}
            type="button"
          >
            #{tag}
          </button>
        );
      })}
    </div>
  );
}
