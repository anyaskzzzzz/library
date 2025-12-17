Веб-приложение на React для каталогизации, поиска и публикации научных материалов. Проект включает интуитивно понятный интерфейс, систему фильтрации и возможность добавления новых статей.

##  Ключевые возможности

###  Главная страница
*   **Популярные статьи**: Кликабельные карточки с превью самых читаемых материалов.
*   **Недавние публикации**: Скроллируемый список последних добавленных статей.
*   **Умный поиск**: Расширенное модальное окно поиска с фильтрацией по дисциплинам и типу доступа.

###  Навигация и разделы
*   **Боковое меню**: Быстрый доступ ко всем разделам сайта.
*   **Документы дисциплин**: Отдельная страница с визуальной сеткой из 6 основных научных направлений (Медицинские, Гуманитарные, Естественные и др.).
*   **Страница статьи**: Полноценный просмотр выбранной статьи с заголовком, метаданными и содержанием.

###  Публикация контента
*   **Добавление статьи**: Всплывающее модальное окно с формой для загрузки новой публикации. Поддерживает:
    *   Загрузку текстового файла.
    *   Указание названия, описания и тегов.
    *   Выбор типа доступа: **Бесплатно** или **Платно** (с указанием стоимости).

###  Дизайн и UX
*   **Адаптивный интерфейс**: Корректное отображение на компьютерах, планшетах и смартфонах.
*   **Согласованная палитра**: Использование фирменных коричневых, бежевых и серых оттенков.
*   **Интерактивные элементы**: Плавные анимации, hover-эффекты, тени для создания глубины.

---

##  Структура проекта и технологии
images/ # Иконки и изображения для статей
src/
   components/ # React-компоненты
         Home.js # Главная страница 
         DocumentsDisciplines.js # Страница "Документы дисциплин"
         ArticlePage.js # Детальный просмотр статьи
         Login.js # Страница входа 
         Documents.js # Страница с документами по подписке
         AllArticles.js # Страница "Все статьи" 
         App.js # Корневой компонент с маршрутизацией

**Стек технологий**:
*   **React 18** – Основной фреймворк для построения интерфейса.
*   **React Router DOM** – Для навигации между страницами.
*   **CSS3** – Кастомные стили без использования сторонних UI-библиотек.
*   **Create React App** – Инструмент для сборки и настройки проекта.

---

## Быстрый старт: как запустить проект у себя

Следуйте этим шагам, чтобы развернуть копию проекта для разработки или тестирования.

### 1. Клонирование и настройка
```bash
# 1. Склонируйте репозиторий
git clone https://github.com/anyaskzzzzz/library.git

# 2. Перейдите в папку проекта
cd library

# 3. Установите все необходимые зависимости
npm install

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
