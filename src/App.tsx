import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Интерстеллар", genre: "Фантастика" },
    { id: 2, title: "Матрица", genre: "Фантастика" },
    { id: 3, title: "1+1", genre: "Комедия" },
  ]);

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Фантастика");

  const addMovie = () => {
    if (!title.trim()) return;

    setMovies([
      ...movies,
      { id: Date.now(), title: title, genre: genre }
    ]);

    setTitle("");
  };

  const deleteMovie = (id: number) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>🎬 Менеджер фильмов</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск фильма"
      />

      <br /><br />

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название фильма"
      />

      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option>Фантастика</option>
        <option>Комедия</option>
        <option>Боевик</option>
        <option>Ужасы</option>
        <option>Драма</option>
      </select>

      <button onClick={addMovie}>Добавить</button>

      {filteredMovies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Жанр: {movie.genre}</p>
          <button onClick={() => deleteMovie(movie.id)}>Удалить</button>
        </div>
      ))}

      {filteredMovies.length === 0 && <p>Фильм не найден</p>}
    </div>
  );
}

export default App;