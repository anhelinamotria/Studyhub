# StudyHub

**StudyHub** — веб-застосунок-помічник студента: розклад пар, дедлайни лабораторних, оголошення старости та матеріали групи в одному місці.

Автор: Мотря Ангеліна Васильівна, ІПЗ, І курс, УжНУ · Дисципліна «Веб-технології та веб-дизайн».

| Лабораторна | Що зроблено                                          |
| ----------- | ---------------------------------------------------- |
| 1           | Аналіз аналогів, ідея, мокапи                        |
| 2           | Фінальний дизайн (`design/`, `screenshots/`)         |
| 3           | Каркас React-проєкту, інструменти якості коду, тести |

## Стек

- **React 19** + **React Router 7** — інтерфейс і маршрутизація
- **Vite 6** — збирач (bundler) і dev-сервер
- **ESLint 9** (flat config) — статичний аналіз коду
- **Prettier 3** — автоматичне форматування
- **Husky 9** + **lint-staged** — git-hooks: перевірка коду перед комітом і пушем
- **Cypress 14** — unit / компонентні тести (Component Testing) та e2e-тести

## Запуск

```bash
npm install          # встановити залежності (+ активувати git-hooks)
npm run dev          # http://localhost:5173
npm run lint         # ESLint
npm run format       # Prettier
npm run test:unit    # компонентні та unit-тести (Cypress)
npm run test:e2e     # e2e-тести (scripts/e2e.js сам запускає і зупиняє dev-сервер)
npm run build        # production-збірка в dist/
```

Тестовий вхід: будь-яка пошта `@student.uzhnu.edu.ua` і пароль від 8 символів.

## Git-hooks

- **pre-commit** → `lint-staged`: ESLint (--fix) і Prettier лише для змінених файлів
- **pre-push** → `npm run lint`: код із помилками не потрапить на GitHub

## Структура

```
studyhub/
├── .husky/
│   ├── pre-commit
│   └── pre-push
├── cypress/
│   ├── e2e/
│   │   ├── auth.cy.js
│   │   └── navigation.cy.js
│   ├── fixtures/
│   │   └── user.json
│   └── support/
│       ├── commands.js
│       ├── component-index.html
│       ├── component.js
│       └── e2e.js
├── design/
├── public/
│   └── favicon.svg
├── screenshots/
├── scripts/
│   └── e2e.js
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   └── AppRoutes.jsx
│   ├── components/
│   │   ├── schedule/
│   │   │   └── LessonRow.jsx
│   │   ├── ui/
│   │   │   ├── Button.cy.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── ProgressBar.cy.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   ├── StatCard.jsx
│   │   │   ├── Tag.cy.jsx
│   │   │   └── Tag.jsx
│   │   ├── DeadlineItem.cy.jsx
│   │   ├── DeadlineItem.jsx
│   │   └── Sidebar.jsx
│   ├── features/
│   │   └── auth/
│   │       ├── AuthContext.js
│   │       ├── AuthProvider.jsx
│   │       ├── ProtectedRoute.jsx
│   │       └── useAuth.js
│   ├── hooks/
│   │   └── useFetch.js
│   ├── layouts/
│   │   ├── AppLayout.jsx
│   │   └── AuthLayout.jsx
│   ├── pages/
│   │   ├── DashboardPage.jsx
│   │   ├── DeadlinesPage.jsx
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── MaterialsPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── SchedulePage.jsx
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── mockData.js
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   ├── deadline.js
│   │   ├── utils.cy.js
│   │   ├── validation.js
│   │   └── week.js
│   └── main.jsx
├── .editorconfig
├── .gitignore
├── .prettierignore
├── .prettierrc
├── cypress.config.js
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Архітектура

Шарова структура з виділенням функціональних модулів (features):

| Шар           | Відповідальність                                                                       |
| ------------- | -------------------------------------------------------------------------------------- |
| `app/`        | точка складання: провайдери, маршрути                                                  |
| `pages/`      | сторінки (по одній на маршрут), лише компонують інші шари                              |
| `layouts/`    | каркаси сторінок: з боковим меню / для авторизації                                     |
| `components/` | перевикористовувані компоненти; `ui/` — базові елементи дизайн-системи                 |
| `features/`   | закінчена функціональність з власним станом (`auth`: контекст, хук, захищений маршрут) |
| `hooks/`      | загальні React-хуки                                                                    |
| `services/`   | робота з даними (зараз mock, далі — бекенд і Moodle API)                               |
| `utils/`      | чисті функції без React — легко покриваються unit-тестами                              |
| `styles/`     | глобальні стилі та токени дизайн-системи                                               |

Залежності йдуть лише «згори вниз»: `pages → features/components → hooks/services → utils`.
Компонентні тести лежать поруч із компонентом (`*.cy.jsx`), e2e — у `cypress/e2e`.
