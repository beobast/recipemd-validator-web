import { useState } from "react";
import RecipePreview from "./RecipePreview.tsx";

const defaultRecipe = `
# Title

desc

---
---

`;

export default function App() {
  const [postContent, setPostContent] = useState(defaultRecipe);
  return (
    <>
      <label>
        Enter some markdown:
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </label>
      <hr />
      <RecipePreview markdown={postContent} />
    </>
  );
}
