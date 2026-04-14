import { Recipe } from "recipemd";
import ReactJsonView from "@microlink/react-json-view";

const RecipePreview = ({ markdown }: { markdown: string }) => {
  let recipe: object = { Error: "invalid recipe" };

  try {
    recipe = Recipe.parse(markdown);
  } catch (error) {
    if (error instanceof Error) recipe = { Error: error.message };
  }

  return (
    <ReactJsonView
      src={recipe}
      name={false}
      enableClipboard={false}
      displayObjectSize={false}
      displayDataTypes={false}
      displayArrayKey={false}
    />
  );
};

export default RecipePreview;
