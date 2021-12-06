// Parser заголовков сайта.

const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

function parser() {
  let textNodes = [];
  function recursy(param) {
    param.childNodes.forEach(node => {
      if (node.nodeName.match(/^H\d/)) {
        const obj = {
          header: node.nodeName,
          content: node.textContent.trim()
        };
        textNodes.push(obj);
      } else {
        recursy(node);
      }
    });
  }
  recursy(body);
  requestPost(textNodes);
}

// POST запрос на поддельный API для тестирования.
function requestPost(nod) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(nod)
  })
  .then(response => response.json(nod))
  .then(json => showRequest(json));
}

// Функция выводит ответ парсера на стрницу.
function showRequest(obj) {
  console.log(obj);
  let out = '';
    for (let key in obj) {
      if (obj[key].content) {
        out += `Заголовок ${key} : ${obj[key].content} <br>`;
      } else {
        out += `${key} : ${obj[key]} <br>`;
      }
    }
  content.innerHTML = `<p class="out">Ответ парсера: </p><p>${out}</p>`;
}

// Вешаем обработчик события "onclick" на кнопку "GO"
btn.addEventListener('click', parser);