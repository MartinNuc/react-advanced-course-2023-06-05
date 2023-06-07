import axios from "axios";
import { useState, useEffect } from "react";

type JokeResponse = {
  value: string;
}

export function useJoke(category?: string) {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  async function fetchJoke() {
    setIsLoading(true);
    try {
      const response = await axios.get<JokeResponse>(
        `https://api.chucknorris.io/jokes/random?${category ? `category=${category}` : ''}`,
      );
      setJoke(response.data.value);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    joke,
    isLoading,
    fetchNext: fetchJoke,
  };
}
