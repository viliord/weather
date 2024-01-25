export const Main = ({ city, onChange, search, weather }) => {
  // форматирование даты
  const format_date = (d) => {
    let months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    let days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  //переводим в Цельсия
  const celsius = () => Math.round(weather.main.temp - 273.15);

  return (
    <main>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={onChange}
          value={city}
          onKeyDown={search}
        />
      </div>
      {typeof weather.main != "undefined" ? (
        <div>
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">{format_date(new Date())}</div>
          </div>
          <div className="weather-box">
            {/* в Кельвинах */}
            {/* <div className="temp">{Math.round(weather.main.temp)}°K</div> */}
            <div className="temp">{celsius()}°C</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

Main.propTypes = Object;
