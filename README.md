# Parser

```
 Парсер (англ. parser; от parse — анализ, разбор), или синтаксический анализатор, — часть программы, преобразующей входные данные (как правило, текст) в некий структурированный формат, нужный для задач последующего их(данных) анализа и использования.
```

[wikipedia.org](https://ru.wikipedia.org/wiki/Синтаксический_анализатор)

## Описание

Парсер рекурсивно проходит по DOM дереву и выбирает те данные которые нам необходимы.
В данном парсере осуществлена настройка на сбор данных с заголовков сайта(от <h1> до <h6>).

_`(следует учитывать, что классическая(прямая) рекурсия порождает цепочку последовательных вызовов (Call stack), что соответственно ведет к наполнению стека вызовов, и т.к стек вызовов браузера достаточно мал, то при его превышении можно получить exception)`_

### Настройка

**`Настройка парсера`** происходит в функции recursy() путем настройки условия (посредством regexp).

### Отправка данных на сервер

Полученные данные можно отправить на сервер.
Оправка данных реализована функцией requestPost() посредством Fetch API методом POST. Данные передаются в формате JSON.
В данном парсере данные отправляются на фэйковый сервер (Fake API for testing and prototyping) [jsonplaceholder](https://jsonplaceholder.typicode.com)

**`Вывод`** данных осуществляется на страницу при нажатии кнопки "GO" которая запускает парсер.

#### Автор

- **Dikiy Roman** - _Pet Project_
