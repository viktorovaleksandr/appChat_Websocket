github pages: https://viktorovaleksandr.github.io/appChat_Websocket/


ТЗ:

Интерфейс состоит из списка сообщений и формы отправки сообщения.
Форма содержит два поля для ввода автора и сообщения, а также кнопку отправить.

В списке сообщения отображаются как
автор: сообщение

Например:
Alex: Hello world
Tim: Ahahahah

Формат события для отправки (его же можно назвать пакетом).
{
   type: 'SEND_MESSAGE',
   payload: {
      author: 'Alex',
      message: 'Hello world'
   }
}

Так же необходимо создать node server c WebSocket который будет пересылать сообщения всем подключённым пользователям.
