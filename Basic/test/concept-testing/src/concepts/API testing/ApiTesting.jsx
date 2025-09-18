import { useEffect, useState } from "react";

function ApiTesting() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://goweather.xyz/weather/ny")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Weather in New York</h1>
      <p><strong>Temperature:</strong> {data.temperature}</p>
      <p><strong>Wind:</strong> {data.wind}</p>
      <p><strong>Description:</strong> {data.description}</p>

      <h2>Forecast</h2>
      <ul>
        {data.forecast.map((f, index) => (
          <li key={index}>
            Day {f.day}: {f.temperature}, Wind {f.wind}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiTesting;

