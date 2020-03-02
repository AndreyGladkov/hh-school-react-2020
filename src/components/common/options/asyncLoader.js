const asyncLoader = async url => {
  try {
    const response = await fetch(url);
    let citiesResponse = await response.json();
    return citiesResponse;
  } catch (e) {
    alert(
      `Ошибка в получении данных от сервера.
       Проверьте подключение к сети интернет, 
       если сеть исправна, то повторите запрос позже`
    );
  }
};
export default asyncLoader;
