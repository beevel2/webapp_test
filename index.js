function writeIndex(){
    document.open()
    document.write("<!DOCTYPE html>"+"<html>"+"<head>"+'<meta name="viewport" content="width=device-width, initial-scale=1.0">'+"<script src='https://telegram.org/js/telegram-web-app.js'></script>"+"<script src='index.js'></script>"+"<style>"+"html, body {"+"  height: 100%;"+"  margin: 0;"+"  display: flex;"+"  justify-content: center;"+"  align-items: center;"+"}"+""+"button {"+"  background: none;"+"  font-size: inherit;"+"  border: none;"+"  text-align: left;"+"  text-decoration: underline;"+"}"+""+"#telegram-webapp {"+"  background-color: #FFFFFF;"+"  color: #000000;"+"  width: 300px;"+"  display: flex;"+"  flex-direction: column;"+"  justify-content: flex-start;"+"  align-items: center;"+"  text-align: left;"+"  content: '';"+"  margin-top: auto;"+"}"+""+"li{"+"    padding: 10px;"+"    font-size: x-large;"+"}"+""+"a{"+"    color: inherit;"+"}"+""+"#telegram-webapp.dark-theme {"+"  background-color: #000000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.blue-theme {"+"  background-color: #0078FF;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.red-theme {"+"  background-color: #FF0000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.green-theme {"+"  background-color: #00FF00;"+"  color: #000000;"+"}"+"</style>"+"</head>"+"<body id='telegram-webapp'>"+"  <div>"+"    <h1>Какой у вас вопрос?</h1>"+"    <ul>"+"        <!-- <li><a href='doesnt_work.html'>🚫 Не работает VPN</a></li> -->"+"        <li><button type='button' onclick='writeDoesntWork()'>🚫 Не работает VPN</button></li>"+"        <li><button type='button' onclick='writeLimits()'>🔗 Есть ли у вас лимиты?</button></li>"+"        <li><button type='button' onclick='writeApps()'>📱 Какие приложения можно использовать?</button></li>"+"        <li><button type='button' onclick='writeRef()'>🎁 Наша реферальная система</button></li>"+"        <li><button type='button' onclick='writeWork()'>🖥 Какие приложения и сайты работают?</button></li>"+"        <li><button type='button' onclick='writeDiff()'>❓ В чем отличие от других сервисов?</button></li>"+"        <li><button type='button' onclick='writeTransfer()'>🔀 Как перенести подписку из другого сервиса?</button></li>"+""+"    </ul>"+"  </div>"+""+"<script>"+"// Function to switch between dark, blue, red, and green themes"+"function switchTheme(theme) {"+"  const element = document.getElementById('telegram-webapp');"+""+"  // Remove existing theme class"+"  element.classList.remove('dark-theme', 'blue-theme', 'red-theme', 'green-theme');"+""+"  // Add the selected theme class"+"  element.classList.add(theme);"+"}"+""+"// Get the user's selected colors from Telegram"+"const userBgColor = window.Telegram.WebApp.themeParams.bg_color;"+"const userTextColor = window.Telegram.WebApp.themeParams.text_color;"+""+"// Set the user's colors as the background and text colors in the webapp"+"const telegramWebApp = document.getElementById('telegram-webapp');"+"telegramWebApp.style.backgroundColor = userBgColor;"+"telegramWebApp.style.color = userTextColor;"+"</script>"+"</body>"+"</html>")
    document.close()
    var scripts = document.getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
      var scriptContent = scripts[i].innerText;
      eval(scriptContent);
    }
}


function writeDoesntWork(){
    document.open()
    document.write("<!DOCTYPE html>"+"<html>"+"<head>"+'<meta name="viewport" content="width=device-width, initial-scale=1.0">'+"<script src='https://telegram.org/js/telegram-web-app.js'></script>"+"<script src='index.js'></script>"+"<style>"+'button {background: none;font-size: inherit;border: none;text-align: left;text-decoration: underline;}'+"html, body {"+"  height: 100%;"+"  margin: 0;"+"  display: flex;"+"  justify-content: center;"+"  align-items: center;"+"}"+""+"#telegram-webapp {"+"  background-color: #FFFFFF;"+"  color: #000000;"+"  width: 300px;"+"  display: flex;"+"  flex-direction: column;"+"  justify-content: flex-start;"+"  align-items: flex-start;"+"  text-align: left;"+"  content: '';"+"  margin-top: auto;"+"}"+""+"li{"+"    padding: 10px;"+"    text-decoration: none;"+"}"+""+"a{"+"    text-decoration: none;"+"    color: inherit;"+"}"+""+"#telegram-webapp.dark-theme {"+"  background-color: #000000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.blue-theme {"+"  background-color: #0078FF;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.red-theme {"+"  background-color: #FF0000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.green-theme {"+"  background-color: #00FF00;"+"  color: #000000;"+"}"+""+"h1{"+"  font-size: xx-large;"+"}"+""+"p {"+"  font-size: large;"+"  text-align: left;"+"}"+""+"b {"+"  font-size: large;"+"}"+""+"a {"+"  font-size: x-large;"+"}"+""+"footer{"+"  padding: 30px;"+"}"+"</style>"+"</head>"+"<body id='telegram-webapp'>"+"  <div>"+"    <h1>Не работает VPN</h1>"+""+"    <p>Если возникают проблемы с подключением приложения Outline к серверу, рекомендуется попробовать следующие решения:</p>"+""+"    <p>1. Проверьте наличие актуального ключа и даты его деактивации.</p>"+"      "+"    <p>2. Удалите другие VPN-приложения, так как они могут вступать в конфликт между собой.</p>"+"      "+"    <p>3. Полностью закройте приложение и затем снова откройте его.</p>"+"      "+"    <p>4. Перезагрузите свое устройство.</p>"+""+"    <pre>"+""+"    </pre>"+"      "+"    <b>В большинстве случаев, одно из этих решений поможет исправить проблему с подключением приложения Outline к серверу.</b></p>"+"  "+"    <p>Если ни одно решение не помогло - обратитесь в службу поддержки</p>"+'<button type=button" onclick="writeIndex()">🔙Назад</button>'+"  </div>"+""+""+"  <footer></footer>"+"<script>"+"// Function to switch between dark, blue, red, and green themes"+"function switchTheme(theme) {"+"  const element = document.getElementById('telegram-webapp');"+""+"  // Remove existing theme class"+"  element.classList.remove('dark-theme', 'blue-theme', 'red-theme', 'green-theme');"+""+"  // Add the selected theme class"+"  element.classList.add(theme);"+"}"+""+"// Get the user's selected colors from Telegram"+"const userBgColor = window.Telegram.WebApp.themeParams.bg_color;"+"const userTextColor = window.Telegram.WebApp.themeParams.text_color;"+""+"// Set the user's colors as the background and text colors in the webapp"+"const telegramWebApp = document.getElementById('telegram-webapp');"+"telegramWebApp.style.backgroundColor = userBgColor;"+"telegramWebApp.style.color = userTextColor;"+"</script>"+"</body>"+"</html>")
    document.close()
    var scripts = document.getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
      var scriptContent = scripts[i].innerText;
      eval(scriptContent);
    }
}


function writeApps(){
    document.open()
    document.write("<!DOCTYPE html>"+"<html>"+"<head>"+'<meta name="viewport" content="width=device-width, initial-scale=1.0">'+"<script src='https://telegram.org/js/telegram-web-app.js'></script>"+"<script src='index.js'></script>"+""+"<style>"+"html, body {"+"  height: 100%;"+"  margin: 0;"+"  display: flex;"+"  justify-content: center;"+"  align-items: center;"+"}"+""+"button {"+"  background: none;"+"  font-size: inherit;"+"  border: none;"+"  text-align: left;"+"  text-decoration: underline;"+"}"+""+"#telegram-webapp {"+"  background-color: #FFFFFF;"+"  color: #000000;"+"  width: 300px;"+"  display: flex;"+"  flex-direction: column;"+"  justify-content: flex-start;"+"  align-items: flex-start;"+"  text-align: left;"+"  content: '';"+"  margin-top: auto;"+"}"+""+"li{"+"    padding: 10px;"+"    text-decoration: none;"+"}"+""+"a{"+"    text-decoration: none;"+"    color: inherit;"+"}"+""+"#telegram-webapp.dark-theme {"+"  background-color: #000000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.blue-theme {"+"  background-color: #0078FF;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.red-theme {"+"  background-color: #FF0000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.green-theme {"+"  background-color: #00FF00;"+"  color: #000000;"+"}"+""+"h1{"+"  font-size: xx-large;"+"}"+""+"p {"+"  font-size: large;"+"  text-align: left;"+"}"+""+"b {"+"  font-size: large;"+"}"+""+"a {"+"  font-size: x-large;"+"}"+""+"footer{"+"  padding: 30px;"+"}"+"</style>"+"</head>"+"<body id='telegram-webapp'>"+"  <div>"+"    <h1>Приложения, поддерживающие наши ключи</h1>"+"    <p>    "+"        Вы можете выбрать из различных приложений-клиентов, поддерживающих протокол Shadowsocks, включая следующие:"+"    </p>"+""+"    <p>    "+"    <b>Outline</b>"+"    <br><br>- Легкое и удобное приложение с простой настройкой в один клик"+"    <br>- Полностью бесплатно и доступно на различных платформах: iOS, MacOS, Android и Windows"+"    <br>- Может быть не всегда стабильным и иногда требует перезагрузки приложения или устройства"+"    </p>"+""+"    <p>   "+"    <b>OneClick</b>"+"    <br><br>- Также простое в использовании приложение, бесплатное и стабильное"+"    <br>- Доступно только для платформ iOS и Android, английская версия может вызвать затруднения при настройке"+"    </p>"+""+"    <p>"+"    <b>Spectre</b>"+"    <br><br>- Еще одно простое в использовании приложение, бесплатное и стабильное"+"    <br>- Доступно только для платформы iOS, английская версия"+"    </p>"+""+"    <p>"+"    <b>Shadowsocks</b>"+"    <br><br>- Стабильное и бесплатное приложение, предлагает настройки для использования VPN только с определенными приложениями"+"    <br>- Доступно только для платформы Android, может вызвать затруднения при настройке"+"    </p>"+""+"    <p>"+"    <b>"+"        Shadowrocket"+"    </b>"+"    <br><br>- Стабильное приложение с возможностью настройки использования VPN только с определенными приложениями"+"    <br>- Платное приложение (249 рублей), доступно на платформах iOS и MacOS"+"    </p>"+"    <button type='button' onclick='writeIndex()'>🔙Назад</button>"+"  </div>"+""+""+"  <footer></footer>"+"<script>"+"// Function to switch between dark, blue, red, and green themes"+"function switchTheme(theme) {"+"  const element = document.getElementById('telegram-webapp');"+""+"  // Remove existing theme class"+"  element.classList.remove('dark-theme', 'blue-theme', 'red-theme', 'green-theme');"+""+"  // Add the selected theme class"+"  element.classList.add(theme);"+"}"+""+"// Get the user's selected colors from Telegram"+"const userBgColor = window.Telegram.WebApp.themeParams.bg_color;"+"const userTextColor = window.Telegram.WebApp.themeParams.text_color;"+""+"// Set the user's colors as the background and text colors in the webapp"+"const telegramWebApp = document.getElementById('telegram-webapp');"+"telegramWebApp.style.backgroundColor = userBgColor;"+"telegramWebApp.style.color = userTextColor;"+"</script>"+"</body>"+"</html>")
    document.close()
    var scripts = document.getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
      var scriptContent = scripts[i].innerText;
      eval(scriptContent);
    }
}


function writeDiff(){
    document.open()
    document.write("<!DOCTYPE html>"+"<html>"+"<head>"+'<meta name="viewport" content="width=device-width, initial-scale=1.0">'+"<script src='https://telegram.org/js/telegram-web-app.js'></script>"+"<script src='index.js'></script>"+""+"<style>"+"html, body {"+"  height: 100%;"+"  margin: 0;"+"  display: flex;"+"  justify-content: center;"+"  align-items: center;"+"}"+""+"button {"+"  background: none;"+"  font-size: inherit;"+"  border: none;"+"  text-align: left;"+"  text-decoration: underline;"+"}"+""+"#telegram-webapp {"+"  background-color: #FFFFFF;"+"  color: #000000;"+"  width: 300px;"+"  display: flex;"+"  flex-direction: column;"+"  justify-content: flex-start;"+"  align-items: flex-start;"+"  text-align: left;"+"  content: '';"+"  margin-top: auto;"+"}"+""+"li{"+"    padding: 10px;"+"    text-decoration: none;"+"}"+""+"a{"+"    text-decoration: none;"+"    color: inherit;"+"}"+""+"#telegram-webapp.dark-theme {"+"  background-color: #000000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.blue-theme {"+"  background-color: #0078FF;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.red-theme {"+"  background-color: #FF0000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.green-theme {"+"  background-color: #00FF00;"+"  color: #000000;"+"}"+""+"h1{"+"  font-size: xx-large;"+"}"+""+"p {"+"  font-size: large;"+"  text-align: left;"+"}"+""+"b {"+"  font-size: large;"+"}"+""+"a {"+"  font-size: x-large;"+"}"+""+"footer{"+"  padding: 30px;"+"}"+"</style>"+"</head>"+"<body id='telegram-webapp'>"+"  <div>"+"    <h1>В чем отличие от других сервисов?</h1>"+"    <p>"+"        Основное отличие нашего сервиса от других заключается в его простоте и удобстве использования."+"<br><br>"+"Мы уделяем особое внимание обеспечению дружественного пользовательского опыта:"+"<br><br>"+"- Вся наша коммуникация с вами происходит на понятном человеческом языке, хотя мы используем робота в качестве помощника."+"<br><br>"+"- Для включения VPN у вас есть всего одна кнопка, без раздражающей рекламы."+"<br><br>"+""+"- Мы гарантируем, что наш сервис не будет блокироваться, и наше приложение никогда не будет удалено из AppStore."+"<br><br>"+"Наша цель - обеспечить простоту и надежность в использовании сервиса VPN для всех наших пользователей"+"    </p>"+"    <button type='button' onclick='writeIndex()'>🔙Назад</button>"+"  </div>"+""+""+"  <footer></footer>"+"<script>"+"// Function to switch between dark, blue, red, and green themes"+"function switchTheme(theme) {"+"  const element = document.getElementById('telegram-webapp');"+""+"  // Remove existing theme class"+"  element.classList.remove('dark-theme', 'blue-theme', 'red-theme', 'green-theme');"+""+"  // Add the selected theme class"+"  element.classList.add(theme);"+"}"+""+"// Get the user's selected colors from Telegram"+"const userBgColor = window.Telegram.WebApp.themeParams.bg_color;"+"const userTextColor = window.Telegram.WebApp.themeParams.text_color;"+""+"// Set the user's colors as the background and text colors in the webapp"+"const telegramWebApp = document.getElementById('telegram-webapp');"+"telegramWebApp.style.backgroundColor = userBgColor;"+"telegramWebApp.style.color = userTextColor;"+"</script>"+"</body>"+"</html>")
    document.close()
    var scripts = document.getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
      var scriptContent = scripts[i].innerText;
      eval(scriptContent);
    }
}


function writeLimits(){
    document.open()
    document.write("<!DOCTYPE html>"+"<html>"+"<head>"+'<meta name="viewport" content="width=device-width, initial-scale=1.0">'+"<script src='https://telegram.org/js/telegram-web-app.js'></script>"+"<script src='index.js'></script>"+""+"<style>"+"html, body {"+"  height: 100%;"+"  margin: 0;"+"  display: flex;"+"  justify-content: center;"+"  align-items: center;"+"}"+""+"button {"+"  background: none;"+"  font-size: inherit;"+"  border: none;"+"  text-align: left;"+"  text-decoration: underline;"+"}"+""+"#telegram-webapp {"+"  background-color: #FFFFFF;"+"  color: #000000;"+"  width: 300px;"+"  display: flex;"+"  flex-direction: column;"+"  justify-content: flex-start;"+"  align-items: flex-start;"+"  text-align: left;"+"  content: '';"+"  /* margin-top: auto; */"+"}"+""+"li{"+"    padding: 10px;"+"    text-decoration: none;"+"}"+""+"a{"+"    text-decoration: none;"+"    color: inherit;"+"}"+""+"#telegram-webapp.dark-theme {"+"  background-color: #000000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.blue-theme {"+"  background-color: #0078FF;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.red-theme {"+"  background-color: #FF0000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.green-theme {"+"  background-color: #00FF00;"+"  color: #000000;"+"}"+""+"h1{"+"  font-size: xx-large;"+"}"+""+"p {"+"  font-size: large;"+"  text-align: left;"+"}"+""+"b {"+"  font-size: large;"+"}"+""+"a {"+"  font-size: x-large;"+"}"+""+"footer{"+"  padding: 30px;"+"}"+"</style>"+"</head>"+"<body id='telegram-webapp'>"+"  <div>"+"    <h1>Есть ли какие-то лимиты?</h1>"+"    <p>"+"        У нас нет ограничений на скорость и объем трафика для пользователей, это зависит только от вашего интернет-провайдера."+"        <br>"+"Если у вас возникают проблемы со скоростью загрузки контента, рекомендуем проверить подключение без использования VPN."+"    </p>"+"    <button type='button' onclick='writeIndex()'>🔙Назад</button>"+"  </div>"+""+""+"  <footer></footer>"+"<script>"+"// Function to switch between dark, blue, red, and green themes"+"function switchTheme(theme) {"+"  const element = document.getElementById('telegram-webapp');"+""+"  // Remove existing theme class"+"  element.classList.remove('dark-theme', 'blue-theme', 'red-theme', 'green-theme');"+""+"  // Add the selected theme class"+"  element.classList.add(theme);"+"}"+""+"// Get the user's selected colors from Telegram"+"const userBgColor = window.Telegram.WebApp.themeParams.bg_color;"+"const userTextColor = window.Telegram.WebApp.themeParams.text_color;"+""+"// Set the user's colors as the background and text colors in the webapp"+"const telegramWebApp = document.getElementById('telegram-webapp');"+"telegramWebApp.style.backgroundColor = userBgColor;"+"telegramWebApp.style.color = userTextColor;"+"</script>"+"</body>"+"</html>")
    document.close()
    var scripts = document.getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
      var scriptContent = scripts[i].innerText;
      eval(scriptContent);
    }
}


function writeRef(){
    document.open()
    document.write("<!DOCTYPE html>"+"<html>"+"<head>"+'<meta name="viewport" content="width=device-width, initial-scale=1.0">'+"<script src='https://telegram.org/js/telegram-web-app.js'></script>"+"<script src='index.js'></script>"+""+"<style>"+"html, body {"+"  height: 100%;"+"  margin: 0;"+"  display: flex;"+"  justify-content: center;"+"  align-items: center;"+"}"+""+"button {"+"  background: none;"+"  font-size: inherit;"+"  border: none;"+"  text-align: left;"+"  text-decoration: underline;"+"}"+""+"#telegram-webapp {"+"  background-color: #FFFFFF;"+"  color: #000000;"+"  width: 300px;"+"  display: flex;"+"  flex-direction: column;"+"  justify-content: flex-start;"+"  align-items: flex-start;"+"  text-align: left;"+"  content: '';"+"  margin-top: auto;"+"}"+""+"li{"+"    padding: 10px;"+"    text-decoration: none;"+"}"+""+"a{"+"    text-decoration: none;"+"    color: inherit;"+"}"+""+"#telegram-webapp.dark-theme {"+"  background-color: #000000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.blue-theme {"+"  background-color: #0078FF;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.red-theme {"+"  background-color: #FF0000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.green-theme {"+"  background-color: #00FF00;"+"  color: #000000;"+"}"+""+"h1{"+"  font-size: xx-large;"+"}"+""+"p {"+"  font-size: large;"+"  text-align: left;"+"}"+""+"b {"+"  font-size: large;"+"}"+""+"a {"+"  font-size: x-large;"+"}"+""+"footer{"+"  padding: 30px;"+"}"+"</style>"+"</head>"+"<body id='telegram-webapp'>"+"  <div>"+"    <h1>Наша реферальная система</h1>"+"    <p>"+"    С реферальной системой всё очень просто. Человек перешедший по вашей ссылке при регистрации автоматически становится вашим рефералом!"+"<br><br>"+"Бонусы получаете и вы, и реферал:<br>"+"— При регистрации 5 дней обоим<br>"+"— При подписке 10 дней вам и 5 рефералу<br>"+"<br><br>"+"Бонусные дни начисляются в виде внутренней валюты 'бонусы'. Их количество вы можете посмотреть во вкладке 'Реферальная система' внутри бота. Там же в любой момент вы можете обменять свои бонусы на бесплатный ключ 1 бонус = 1 день пользования VPN"+"    </p>"+"    <button type='button' onclick='writeIndex()'>🔙Назад</button>"+"  </div>"+""+""+"  <footer></footer>"+"<script>"+"// Function to switch between dark, blue, red, and green themes"+"function switchTheme(theme) {"+"  const element = document.getElementById('telegram-webapp');"+""+"  // Remove existing theme class"+"  element.classList.remove('dark-theme', 'blue-theme', 'red-theme', 'green-theme');"+""+"  // Add the selected theme class"+"  element.classList.add(theme);"+"}"+""+"// Get the user's selected colors from Telegram"+"const userBgColor = window.Telegram.WebApp.themeParams.bg_color;"+"const userTextColor = window.Telegram.WebApp.themeParams.text_color;"+""+"// Set the user's colors as the background and text colors in the webapp"+"const telegramWebApp = document.getElementById('telegram-webapp');"+"telegramWebApp.style.backgroundColor = userBgColor;"+"telegramWebApp.style.color = userTextColor;"+"</script>"+"</body>"+"</html>")
    document.close()
    var scripts = document.getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
      var scriptContent = scripts[i].innerText;
      eval(scriptContent);
    }
}


function writeTransfer(){
    document.open()
    document.write("<!DOCTYPE html>"+"<html>"+"<head>"+'<meta name="viewport" content="width=device-width, initial-scale=1.0">'+"<script src='https://telegram.org/js/telegram-web-app.js'></script>"+"<script src='index.js'></script>"+""+"<style>"+"html, body {"+"  height: 100%;"+"  margin: 0;"+"  display: flex;"+"  justify-content: center;"+"  align-items: center;"+"}"+""+"button {"+"  background: none;"+"  font-size: inherit;"+"  border: none;"+"  text-align: left;"+"  text-decoration: underline;"+"}"+""+"#telegram-webapp {"+"  background-color: #FFFFFF;"+"  color: #000000;"+"  width: 300px;"+"  display: flex;"+"  flex-direction: column;"+"  justify-content: flex-start;"+"  align-items: flex-start;"+"  text-align: left;"+"  content: '';"+"  /* margin-top: auto; */"+"}"+""+"li{"+"    padding: 10px;"+"    text-decoration: none;"+"}"+""+"a{"+"    text-decoration: none;"+"    color: inherit;"+"}"+""+"#telegram-webapp.dark-theme {"+"  background-color: #000000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.blue-theme {"+"  background-color: #0078FF;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.red-theme {"+"  background-color: #FF0000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.green-theme {"+"  background-color: #00FF00;"+"  color: #000000;"+"}"+""+"h1{"+"  font-size: xx-large;"+"}"+""+"p {"+"  font-size: large;"+"  text-align: left;"+"}"+""+"b {"+"  font-size: large;"+"}"+""+"a {"+"  font-size: x-large;"+"}"+""+"footer{"+"  padding: 30px;"+"}"+"</style>"+"</head>"+"<body id='telegram-webapp'>"+"  <div>"+"    <h1>Перенос подписки</h1>"+"    <p>"+"        Если вы уже использовали другую услугу и заплатили за нее, мы рады перенести вашу подписку к нам и предложить вам более выгодные условия!"+"<br><br>"+"Просто отправьте нам скриншот вашей текущей подписки в чате <a href='https://t.me/unlimitedVPNSupport', style='font-size: large; text-decoration: underline;'>@unlimitedVPNSupport</a>. Мы обязательно обсудим с вами лучшие варианты и перенесем вашу подписку без неудобств."+"    </p>"+"    <button type='button' onclick='writeIndex()'>🔙Назад</button>"+"  </div>"+""+""+"  <footer></footer>"+"<script>"+"// Function to switch between dark, blue, red, and green themes"+"function switchTheme(theme) {"+"  const element = document.getElementById('telegram-webapp');"+""+"  // Remove existing theme class"+"  element.classList.remove('dark-theme', 'blue-theme', 'red-theme', 'green-theme');"+""+"  // Add the selected theme class"+"  element.classList.add(theme);"+"}"+""+"// Get the user's selected colors from Telegram"+"const userBgColor = window.Telegram.WebApp.themeParams.bg_color;"+"const userTextColor = window.Telegram.WebApp.themeParams.text_color;"+""+"// Set the user's colors as the background and text colors in the webapp"+"const telegramWebApp = document.getElementById('telegram-webapp');"+"telegramWebApp.style.backgroundColor = userBgColor;"+"telegramWebApp.style.color = userTextColor;"+"</script>"+"</body>"+"</html>")
    document.close()
    var scripts = document.getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
      var scriptContent = scripts[i].innerText;
      eval(scriptContent);
    }
}


function writeWork(){
    document.open()
    document.write("<!DOCTYPE html>"+"<html>"+"<head>"+"<script src='https://telegram.org/js/telegram-web-app.js'></script>"+"<script src='index.js'></script>"+""+"<style>"+"html, body {"+"  height: 100%;"+"  margin: 0;"+"  display: flex;"+"  justify-content: center;"+"  align-items: center;"+"}"+""+"button {"+"  background: none;"+"  font-size: inherit;"+"  border: none;"+"  text-align: left;"+"  text-decoration: underline;"+"}"+""+"#telegram-webapp {"+"  background-color: #FFFFFF;"+"  color: #000000;"+"  width: 300px;"+"  display: flex;"+"  flex-direction: column;"+"  justify-content: flex-start;"+"  align-items: flex-start;"+"  text-align: left;"+"  content: '';"+"  /* margin-top: auto; */"+"}"+""+"li{"+"    padding: 10px;"+"    text-decoration: none;"+"}"+""+"a{"+"    text-decoration: none;"+"    color: inherit;"+"}"+""+"#telegram-webapp.dark-theme {"+"  background-color: #000000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.blue-theme {"+"  background-color: #0078FF;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.red-theme {"+"  background-color: #FF0000;"+"  color: #FFFFFF;"+"}"+""+"#telegram-webapp.green-theme {"+"  background-color: #00FF00;"+"  color: #000000;"+"}"+""+"h1{"+"  font-size: xx-large;"+"}"+""+"p {"+"  font-size: large;"+"  text-align: left;"+"}"+""+"b {"+"  font-size: large;"+"}"+""+"a {"+"  font-size: x-large;"+"}"+""+"footer{"+"  padding: 30px;"+"}"+"</style>"+"</head>"+"<bodyid='telegram-webapp'>"+"  <div>"+"    <h1>Какие сайты и приложения работают?</h1>"+"    <p>"+"        Любые!<br><br>"+"        Работают все приложения: instagram, Госуслуги, Банки, Netflix и все остальное без необходимости выключать VPN!"+"    </p>"+"    <button type='button' onclick='writeIndex()'>🔙Назад</button>"+"  </div>"+""+""+"  <footer></footer>"+"<script>"+"// Function to switch between dark, blue, red, and green themes"+"function switchTheme(theme) {"+"  const element = document.getElementById('telegram-webapp');"+""+"  // Remove existing theme class"+"  element.classList.remove('dark-theme', 'blue-theme', 'red-theme', 'green-theme');"+""+"  // Add the selected theme class"+"  element.classList.add(theme);"+"}"+""+"// Get the user's selected colors from Telegram"+"const userBgColor = window.Telegram.WebApp.themeParams.bg_color;"+"const userTextColor = window.Telegram.WebApp.themeParams.text_color;"+""+"// Set the user's colors as the background and text colors in the webapp"+"const telegramWebApp = document.getElementById('telegram-webapp');"+"telegramWebApp.style.backgroundColor = userBgColor;"+"telegramWebApp.style.color = userTextColor;"+"</script>"+"</body>"+"</html>")
    document.close()
    var scripts = document.getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
      var scriptContent = scripts[i].innerText;
      eval(scriptContent);
    }
}
