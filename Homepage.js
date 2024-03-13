import React, { useState, useEffect } from 'react';

const Homepage = () => {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setJokes(data.jokes);
        } else {
          setError('Failed to fetch jokes.');
        }
      })
      .catch((error) => {
        setError('Failed to fetch jokes.');
      });
  }, []);

  return (
    <div>
      <h2>Jokes</h2>
      {error && <p style={{ color: 'red'}}>{error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke) => (
            <tr key={joke.id}>
              <td>{joke.category}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
