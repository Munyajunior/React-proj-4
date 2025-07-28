import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Recipe(props) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Claud Recommends:</h2>
      <Markdown remarkPlugins={[remarkGfm]}>{props.recipe}</Markdown>
    </section>
  );
}
