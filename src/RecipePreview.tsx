import { useState } from "react";
import { Recipe } from "recipemd";
import ReactJsonView from "@microlink/react-json-view";

const RecipePreview = ({ markdown }: { markdown: string }) => {
  let recipe = null;

  try {
    recipe = Recipe.parse(markdown);
  } catch (error) {
    recipe = { Error: error.message };
  }

  return (
    <ReactJsonView
      src={recipe}
      name={false}
      theme="solarized"
      enableClipboard={false}
      displayObjectSize={false}
      displayDataTypes={false}
      displayArrayKey={false}
    />
  );
};

export default RecipePreview;
