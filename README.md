# 🧩 Row Manager App

Приложение для управления строками и их значениями — реализовано с использованием **Feature-Sliced Design**, `Zustand` для состояния и `Prettier + ESLint` для чистоты кода.

## 🚀 Стек

- **React**
- **TypeScript**
- **Zustand** — глобальное состояние
- **Feature-Sliced Design** — архитектура
- **Prettier + ESLint** — автоформатирование и линтинг

## 📁 Структура проекта

```
src/
│
├── app/             # Инициализация приложения
├── pages/           # Страницы
├── widgets/         # Умные блоки (например, RowManager)
├── features/        # CRUD-логика строк
├── entities/        # Сущности: Row, Value
├── shared/          # Общие UI-компоненты, утилиты, конфиги
```

## ⚙️ Скрипты

```bash
# Установка зависимостей
npm install

# Запуск проекта
npm run dev

# Линтинг + форматирование
npm run lint
npm run format
```

## 🧠 Концепции

- **Состояние строк (`rows`)** — хранится в Zustand
- **UI-форма** для создания/редактирования — локальный `useState` (можно заменить на UI-слой)
- **Отделение логики и представления**:
  - `features/row-crud` содержит бизнес-логику
  - `entities/row` — только структура и отрисовка строки
  - `widgets/RowManager` управляет поведением

## 🧼 Форматирование и линтинг

- `.prettierrc.json` — конфигурация форматирования
- `eslint.config.ts` — Flat config + Prettier integration

```bash
# Применить форматирование
npx prettier src --write

# Проверить eslint
npx eslint src --ext .ts,.tsx
```

---

## 📦 TODO

- [ ] Добавить тесты
- [ ] Подключить CI (например, GitHub Actions)
- [ ] Расширить структуру rows (например, теги, статусы)

