
## Запуск проекта

### `npm start`

## Проделанная работа

- Проект был свёрстан и адаптирован под мобильные и планшетные устройства. В components находится UI библиотека. Написала функцию для адаптива шрифтов.

- Получила данные отзывов из API с помощью React Query. Наполнила контентом карты отзыва. Добавила Skeleton для отображения загрузки данных.

- При загрузке страницы отображается стразу первая страницы, однако, не успела сделать подгрузку при скролле, но добавила кнопки для перехода на слд. и пред. страницы.

- Написала логику раскрытия меню добавления товара с кнопками + и -, возможность вписать вручную количества товара тоже есть. Состояние решила хранить в Redux. Хотя, очевидно, что логику нужно дописывать и делать добавления товара ещё и по id.

-Кол-ва товара меняется над полем с номером.

-Кол-ва товара и номер телефона сохраняются в localStorage.

-Применяется маска для номера телефона.

-Проверки на номер телефона нет, так как планировала сделать валидацию в AsyncThunk, но не дошла до него.

-Помимо этого постаралась сделать оптимизацию страницы с помощью async, memo и useCallback.




