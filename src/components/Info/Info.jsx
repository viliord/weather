import { useState } from "react";
import { Main } from "../Main/Main";
import axios from "axios";


console.log(import.meta.env.VITE_API_KEY);
// доступ к API сервиса погоды
//const API_KEY = "b99029904b0075626a99a6fc2ebb32d6";

export const Info = () => {
  // действия при изменении города в поле ввода
  const [city, setCity] = useState("");

  // действия с данными погоды
  const [weather, setWeather] = useState({});

  // обработчик, который срабатывает когда нажата клавиша Enter
  const search = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=${import.meta.env.VITE_API_KEY}&lang`
        )
        .then((response) => {
          setWeather(response.data);
          setCity("");
        })
        .catch((error) => {
          console.log("error", error);
        });
      // fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=${API_KEY}&lang`
      // ) // отправляем запрос
      //   .then((res) => res.json()) // ответ преобразуем в json
      //   .then((result) => {
      //     // работаем с результатом
      //     setWeather(result);
      //     setCity("");
      //     console.log(result);
      //   });
    }
  };

  // JSX разметка
  return (
    <div
      className={
        typeof weather.main != "undefined" //меняем классы по Кельвину
          ? weather.main.temp >= 290
            ? "app"
            : weather.main.temp < 290 && weather.main.temp >= 275.15
            ? "app warm"
            : "app cold"
          : "app"
      }
    >
      <Main
        city={city}
        onChange={(e) => setCity(e.target.value)}
        search={search}
        weather={weather}
      />
    </div>
  );
};
