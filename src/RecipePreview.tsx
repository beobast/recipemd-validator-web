import { Recipe } from "recipemd";

export default function RecipePreview({ markdown }: { markdown: string }) {
  //const recipe = Recipe.parse(markdown);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: JSON.parse(JSON.stringify(Recipe.parse(markdown))),
      }}
    />
  );
  return <p>{JSON.parse(JSON.stringify(Recipe.parse(markdown)))}</p>;
}
