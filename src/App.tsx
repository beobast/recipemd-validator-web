import { useState } from "react";
import RecipePreview from "./RecipePreview";

const defaultRecipe = `# Guacamole

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
  const [markdownRecipe, setMarkdownRecipe] = useState(defaultRecipe);
  return (
    <div className="container mx-auto p-4 sm:p-8">
      <h1 className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance">
        RecipeMD Web Validator
      </h1>
      <p className="leading-7 mt-6 mb-12 text-center">
        A simple tool to quickly check your markdown recipe formatting against{" "}
        <a href="https://recipemd.org/" className="underline">
          RecipeMD specification
        </a>
        . Built using{" "}
        <a href="https://github.com/d-k-bo/recipemd-ts/" className="underline">
          recipemd-ts parser
        </a>
        .
      </p>

      <div className="flex flex-col sm:flex-row h-full gap-8">
        <div className="w-full sm:w-1/2 h-[50vh]">
          <p className="mb-2">Enter your markdown recipe here:</p>
          <textarea
            name="recipe-md"
            className="flex w-full h-full border border-black text-sm"
            value={markdownRecipe}
            onChange={(e) => setMarkdownRecipe(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-1/2">
          <p className="mb-2">Check your parsed recipe:</p>
          <RecipePreview markdown={markdownRecipe} />
        </div>
      </div>
    </div>
  );
}
