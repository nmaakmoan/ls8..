import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const movies = [
    { id: 1, title: "Интерстеллар", genre: "Фантастика" },
    { id: 2, title: "Матрица", genre: "Фантастика" },
    { id: 3, title: "1+1", genre: "Комедия" },
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>🎬 Менеджер фильмов</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск фильма..."
      />

      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Жанр: {movie.genre}</p>
          </div>
        ))
      ) : (
        <p>Фильм не найден</p>
      )}
    </div>
  );
}

export default App;