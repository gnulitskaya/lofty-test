//===========================Задание 1===========================================
// XMLHttpRequest
const requestURL = 'https://jsonplaceholder.typicode.com/users';
const xhr = new XMLHttpRequest();

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    // передаем необходмие параметры
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');

    // проверка на наличие ошибок
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      reject(xhr.response)
    }

    // преобразование json в строку для отправки на сервер
    xhr.send(JSON.stringify(body));
  })
}

// Fetch
// function sendRequest(method, url, body = null) {
//   const headers = {
//       'content-Type': 'application/json'
//   }

//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers
//   }).then(response => {
//     if (response.ok) {
//       return response.json()
//     }
//     return response.json().then(
//       err => {
//         throw new Error(err);
//       }
//     )
//   })
// }

const body = {
  userName: 'Lera',
  userPassword: 'jddsj$s7Rv'
}

sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))

//===========================Задание 2===========================================
// Переписать Promise на Async/Await
const URL_LINK = '/i/1.json';
const URL_LINK_SECOND = '/i/2.json';

// Ставим async
const getJson = async (url) => {
  // Указываем await
  const response = await fetch(url);
  const json = await response.json();

  if (json.key) {
    let response_second = await fetch(URL_LINK_SECOND);
    let json_second = await response_second.json();
    return json_second.key_second;
  }

  throw new Error('Ошибка!');
};

getJson(URL_LINK)
.then((value) => console.log(value))
.catch((error) => console.log('Ошибка! ', error));

//===========================Задание 3===========================================
// Реализовать функцию для кэширования результата выполнения асинхронной функции

// Первый аргумент - асинхронная функция
// Второй аргумент - время кэша в секундах
const memoize = (func, timeout) => {
    const cache = {};
  
    return async (...args) => {
      // проверка есть ли у нас аргументы 
      // и не изменились ли они
      // + не завершилось ли время кэша 
      if (
        !cache['finalArgs'] ||
        args.some((arg, i) => arg !== finalArgs[i]) ||
        Date.now() - cache['finalDate'] > timeout
      ) {
        // кешируем значения
        cache['finalArgs'] = args;
        cache['finalResult'] = await func(...args);
        cache['finalDate'] = Date.now();
      }

      // возвращаем закешируемое (последнее) значение  
      return cache['finalResult'];
    };
};

// FOR TESTS
// let count = 0;

// const getData = () => Promise.resolve(++count);
// const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// const getJsonMemoize = memoize(getData, 1000);

// (async () => {
//   console.log(await getJsonMemoize()); // 1
//   console.log(await getJsonMemoize()); // 1
//   await sleep(3000);
//   console.log(await getJsonMemoize()); // 2
// })();