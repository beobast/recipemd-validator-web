import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import RecipePreview from "./RecipePreview";

const defaultRecipe = `
# Guacamole

Some people call it guac.

*sauce, vegan*

**4 Servings, 200g**

---

- *1* avocado
- *.5 teaspoon* salt
- *1 1/2 pinches* red pepper flakes
- lemon juice

---

Remove flesh from avocado and roughly mash with fork. Season to taste
with salt, pepper and lemon juice.
`;

export default function App() {
  const [postContent, setPostContent] = useState(defaultRecipe);
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 h-1/2">
        <textarea
          className="flex w-full h-full"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>
      <div className="w-full sm:w-1/2 h-1/2">
        <RecipePreview markdown={postContent} />
      </div>
    </div>
  );
}
