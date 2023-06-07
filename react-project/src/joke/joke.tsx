import axios from "axios";
import { useEffect, useState } from "react"

type JokeResponse = {
  value: string;
}

export function Joke() {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  async function fetchJoke() {
    setIsLoading(true);
    try {
      const response = await axios.get<JokeResponse>('https://api.chucknorris.io/jokes/random')
      setJoke(response.data.value);
    } finally {
      setIsLoading(false);
    }
  }

  return <div>
    <p data-testid="joke">{joke}</p>

    <button disabled={isLoading} onClick={fetchJoke}>Load next joke</button>
  </div>
}