import { useParams } from "react-router-dom";
import { useJoke } from "./use-joke";

export function Joke() {
  const {category} = useParams();
  const {joke, isLoading, fetchNext} = useJoke(category);

  return <div>
    <p data-testid="joke">{joke}</p>

    <button disabled={isLoading} onClick={fetchNext}>Load next joke</button>
  </div>
}