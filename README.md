# Tea Shop

Интернет-магазин чая.

## Deployment & Live Demo

[Deploy](https://teaonlinestore.netlify.app/)

<img src='/src/assets/preview.png' alt='preview'>

## Technologies Used

- Typescript
- React
- React-Redux, Redux Toolkit (createAsyncThunk для асинхронных запросов)
- SCSS (Sass)
- Custom React Hooks
- React-router-dom
- Vite
- ESLint, Prettier
- Netlify

## Features

- Список товаров с указанием изображений и информации
- Сортировка выдачи по типу чая, названию, цене, рейтингу
- Поиск чая
- Пагинация
- Возможность выбора веса товара при добавлении в корзину и вычисление его цены в зависимости от веса
- Кастомный хук useFetchTea для получения данных о конкретном чае с помощью его id
- Кастомный хук useAddToCart для добавления чая в корзину
- Собственный UI

## More details

### Routing

- Главная страница с товарами
- Страница корзины
- Страница конкретного чая
- Страница "Not found"

### State Management

- slices для организации состояний
- createAsyncThunk для запросов к API

### Loading & Error Handling

- Скелетон при загрузке товаров
- Спиннер при загрузке страницы товара и корзины
- Сообщение, если товары не найдены

### Performance Optimizations

- Lazy Loading страниц

### Styling and Responsiveness

- Адаптивная вёрстка до 360px ширины экрана (SCSS-модули)
- Миксины
- Раскрывающийся список при клике

## How to start project

in the project directory enter:

```js
npm install
```

and then run in dev mode:

```js
npm run dev
```

build the project:

```js
npm run build
```

production mode:

```js
npm run serve
```
