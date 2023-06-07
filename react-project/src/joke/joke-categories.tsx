import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function JokeCategories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(response => setCategories(response.data));
  }, []);

  return <ul>
    {categories.map(category => <li key={category}>
      <Link to={category}>{category}</Link>
    </li>)}
  </ul>
}