function resolveTranslation(_0x713dd, _0x1a5437 = []) {
  if (typeof _0x713dd == "number" && !isNaN(_0x713dd)) {
    if (typeof NotificationMessages != "undefined" && _0x713dd >= 0 && _0x713dd < NotificationMessages.length) {
      let _0x212634 = language[NotificationMessages[_0x713dd]][curr_lang];
      _0x1a5437.forEach((_0x576a90, _0xab07d0) => {
        _0x212634 = _0x212634.replace(new RegExp("\\{" + _0xab07d0 + "\\}", "g"), _0x576a90);
      });
      return _0x212634;
    }
    return String(_0x713dd);
  }
  if (Array.isArray(_0x713dd) && _0x713dd.length > 0) {
    const _0x248075 = _0x713dd[0];
    if (typeof _0x248075 == "number" && !isNaN(_0x248075) && typeof NotificationMessages != "undefined" && _0x248075 >= 0 && _0x248075 < NotificationMessages.length) {
      let _0xc09518 = language[NotificationMessages[_0x248075]][curr_lang];
      _0x713dd.slice(1).forEach((_0x12dc12, _0x2b59f4) => {
        _0xc09518 = _0xc09518.replace(new RegExp("\\{" + _0x2b59f4 + "\\}", "g"), _0x12dc12);
      });
      return _0xc09518;
    }
    if (typeof _0x248075 == "string") {
      return TranslateText(_0x248075, ..._0x713dd.slice(1));
    }
  }
  if (typeof _0x713dd == "string") {
    return TranslateText(_0x713dd);
  } else {
    return _0x713dd;
  }
}
function ChattingNPC() {
  let _0x43264e;
  let _0x1de832;
  let _0x32aea5;
  let _0x30e7b4 = [];
  switch (dialogstate) {
    case 1:
      _0x43264e = language["Работник причала"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Приветствую. Хотите арендовать место у причала?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Да, хочу пришвартовать свой катер тут"][curr_lang]);
      _0x30e7b4.push(language["Нет, мне пора идти"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 2:
      _0x43264e = language["Работник причала"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет! Что хотел?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу разместить личный водный транспорт"][curr_lang]);
      _0x30e7b4.push(language["Хочу разместить семейный водный транспорт"][curr_lang]);
      _0x30e7b4.push(language["Нет, ничего"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 3:
      _0x43264e = language["Работник аэродрома"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Приветствую. Хотите арендовать место в аэродроме?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Да, хочу разместить здесь свой аппарат"][curr_lang]);
      _0x30e7b4.push(language["Нет, мне пора идти"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 4:
      _0x43264e = language["Работник аэродрома"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет! Что хотел?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хотел бы продлить аренду"][curr_lang]);
      _0x30e7b4.push(language["Подготовьте мой аппарат для вылета, пожалуйста"][curr_lang]);
      _0x30e7b4.push(language["Я хотел бы отказаться от аренды места в аэродроме"][curr_lang]);
      _0x30e7b4.push(language["Нет, ничего"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 148:
    case 147:
    case 5:
      _0x43264e = dialogstate == 148 ? language["Сотрудник полиции"][curr_lang] : language["Сотрудница полиции"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу сдаться с повинной"][curr_lang]);
      _0x30e7b4.push(language["Хочу сдать нелегальные предметы"][curr_lang]);
      _0x30e7b4.push(language["Хочу вызвать сотрудников подойти сюда"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 218:
      _0x43264e = language["Сотрудник Армии"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу вызвать сотрудников подойти сюда"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 219:
      _0x43264e = language["Сотрудник полиции"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу вызвать сотрудников подойти сюда"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 149:
      _0x43264e = language.Инкассатор[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу устроиться инкассатором"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 190:
      _0x43264e = language.Доставщик[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу устроиться доставщиком"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 191:
      _0x43264e = language["Приют животных"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, в пятницу, субботу и воскресенье на аукцион выставляются редкие питомцы"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу сменить имя питомцу"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 150:
    case 5000:
      _0x43264e = language.Помощница[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу арендовать скутер"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 6:
      _0x43264e = language["Сотрудница больницы"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, с чем обращаетесь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу сменить пол"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 104:
    case 7:
      _0x43264e = language["Вахтер штрафстоянки"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет, чего тебе?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Забрать транспорт со штрафстоянки"][curr_lang]);
      _0x30e7b4.push(language["Забрать семейный транспорт со штрафстоянки"][curr_lang]);
      _0x30e7b4.push(language.Ничего[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 9:
      _0x43264e = language["Владелец завода"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["У нас есть любые товары для бизнеса!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Мне нужен товар в мой бизнес"][curr_lang]);
      _0x30e7b4.push(language["Мне нужно продать урожай"][curr_lang]);
      _0x30e7b4.push(language["Мне нужно продать молоко"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 10:
      _0x43264e = language.Оружейник[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Приветствую Вас"][curr_lang] + "'}";
      _0x30e7b4.push(language["Закажите еще амуниции на склад"][curr_lang]);
      _0x30e7b4.push(language["Покажите оружейный склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу вернуть амуницию на склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу утилизировать использованную амуницию"][curr_lang]);
      _0x30e7b4.push(language["Сколько медикаментов на складе?"][curr_lang]);
      if (new_version == 1) {
        _0x30e7b4.push(language["Хочу взять с собой собаку"][curr_lang]);
      }
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 105:
      _0x43264e = language.Оружейник[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Приветствую Вас"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите оружейный склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу вернуть амуницию на склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу утилизировать использованную амуницию"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 106:
      _0x43264e = language["Водитель автобуса"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если ты хочешь арендовать автобус, я могу помочь тебе в этом!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу арендовать автобус"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 107:
      _0x43264e = language.Электрик[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если ты хочешь арендовать транспорт для электриков, я могу помочь тебе в этом!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу арендовать транспорт"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 146:
      _0x43264e = language.Пожарный[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если ты хочешь арендовать пожарный автомобиль, я могу помочь тебе в этом!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу арендовать пожарный автомобиль"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 108:
      _0x43264e = language.Шаман[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если у тебя есть лесные грибы, то я сварю тебе лучшую настойку"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу приготовить настойку"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 109:
      _0x43264e = language["Продавец мебели"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если у тебя есть деньги или бревна, я сделаю тебе любую мебель<br>Кстати, бревна добываются здесь"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу приобрести мебель в дом"][curr_lang]);
      _0x30e7b4.push(language["Хочу получить временный мопед"][curr_lang]);
      _0x30e7b4.push(language["Кто управляет лесопилкой?"][curr_lang]);
      _0x30e7b4.push(language["Не интересует, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 110:
      _0x43264e = language["Работник аэродрома"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если у Вас есть воздушный транспорт, я помогу Вам разместить его"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу разместить личный воздушный транспорт"][curr_lang]);
      _0x30e7b4.push(language["Хочу разместить семейный воздушный транспорт"][curr_lang]);
      _0x30e7b4.push(language["Хочу добраться до острова"][curr_lang]);
      _0x30e7b4.push(language["Хочу начать работу пилота"][curr_lang]);
      if (bChristmas2025) {
        _0x30e7b4.push(language["Я хочу помочь Санте доставить подарки"][curr_lang]);
      }
      _0x30e7b4.push(language["Не интересует, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 115:
      _0x43264e = language["Житель острова"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если тебе нужно добраться на большую землю, то я могу это сделать"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу вернуться в штат"][curr_lang]);
      _0x30e7b4.push(language["Хочу арендовать квадроцикл"][curr_lang]);
      _0x30e7b4.push(language["Нет, не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 111:
      _0x43264e = language.Священник[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я могу помочь тебе с браком"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу развестись"][curr_lang]);
      _0x30e7b4.push(language["Не интересует, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 11:
      _0x43264e = language.Оружейник[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Доброго времени суток!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Закажите еще амуниции на склад"][curr_lang]);
      _0x30e7b4.push(language["Покажите оружейный склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу вернуть амуницию на склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу утилизировать использованную амуницию"][curr_lang]);
      _0x30e7b4.push(language["Сколько медикаментов на складе?"][curr_lang]);
      if (new_version == 1) {
        _0x30e7b4.push(language["Хочу взять с собой собаку"][curr_lang]);
      }
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 12:
      _0x43264e = language.Оружейник[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Закажите еще амуниции на склад"][curr_lang]);
      _0x30e7b4.push(language["Покажите оружейный склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу вернуть амуницию на склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу утилизировать использованную амуницию"][curr_lang]);
      _0x30e7b4.push(language["Сколько медикаментов на складе?"][curr_lang]);
      if (new_version == 1) {
        _0x30e7b4.push(language["Хочу взять с собой собаку"][curr_lang]);
      }
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 13:
      _0x43264e = language.Оружейник[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Честь имею!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Закажите еще амуниции на склад"][curr_lang]);
      _0x30e7b4.push(language["Покажите оружейный склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу вернуть амуницию на склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу утилизировать использованную амуницию"][curr_lang]);
      _0x30e7b4.push(language["Сколько медикаментов на складе?"][curr_lang]);
      if (new_version == 1) {
        _0x30e7b4.push(language["Хочу взять с собой собаку"][curr_lang]);
      }
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 14:
      _0x43264e = language.Медбрат[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите медицинский склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу вернуть маски на склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу вернуть бронежилет на склад"][curr_lang]);
      _0x30e7b4.push(language["Ничем, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 152:
      _0x43264e = language.Брат[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["What’s up? Что стряслось?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажи склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу положить немного наличных в общак"][curr_lang]);
      _0x30e7b4.push(language["Хочу попасть на территорию захвата"][curr_lang]);
      _0x30e7b4.push(language["Доставай все свое оружие"][curr_lang]);
      _0x30e7b4.push(language["Хочу заняться закладками"][curr_lang]);
      _0x30e7b4.push(language["Хочу начать рейд банды"][curr_lang]);
      _0x30e7b4.push(language["Все в порядке, до скорого"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 15:
      _0x43264e = language.Брат[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["What’s up? Чем помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажи склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу положить немного наличных в общак"][curr_lang]);
      _0x30e7b4.push(language["Хочу попасть на территорию захвата"][curr_lang]);
      _0x30e7b4.push(language["Доставай все свое оружие"][curr_lang]);
      _0x30e7b4.push(language["Хочу заняться закладками"][curr_lang]);
      _0x30e7b4.push(language["Все в порядке, до скорого"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 169:
      _0x43264e = language.Брат[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["What’s up? Чем помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажи склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу положить немного наличных в общак"][curr_lang]);
      _0x30e7b4.push(language["Хочу попасть на территорию захвата"][curr_lang]);
      _0x30e7b4.push(language["Доставай все свое оружие"][curr_lang]);
      _0x30e7b4.push(language["Хочу заняться закладками"][curr_lang]);
      _0x30e7b4.push(language["Хочу начать рейд банды"][curr_lang]);
      _0x30e7b4.push(language["Все в порядке, до скорого"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 16:
    case 18:
      _0x43264e = language.Брат[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["What’s up? Что стряслось?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажи склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу положить немного наличных в общак"][curr_lang]);
      _0x30e7b4.push(language["Хочу попасть на территорию захвата"][curr_lang]);
      _0x30e7b4.push(language["Доставай все свое оружие"][curr_lang]);
      _0x30e7b4.push(language["Хочу заняться закладками"][curr_lang]);
      _0x30e7b4.push(language["Все в порядке, до скорого"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 172:
    case 19:
      _0x43264e = language.Брат[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hola, брат! Что стряслось?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажи склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу положить немного наличных в общак"][curr_lang]);
      _0x30e7b4.push(language["Хочу попасть на территорию захвата"][curr_lang]);
      _0x30e7b4.push(language["Доставай все свое оружие"][curr_lang]);
      _0x30e7b4.push(language["Хочу заняться закладками"][curr_lang]);
      _0x30e7b4.push(language["Хочу начать рейд банды"][curr_lang]);
      _0x30e7b4.push(language["Все в порядке, до скорого"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 17:
      _0x43264e = language.Брат[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hola, брат! Чем помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажи склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу положить немного наличных в общак"][curr_lang]);
      _0x30e7b4.push(language["Хочу попасть на территорию захвата"][curr_lang]);
      _0x30e7b4.push(language["Доставай все свое оружие"][curr_lang]);
      _0x30e7b4.push(language["Хочу заняться закладками"][curr_lang]);
      _0x30e7b4.push(language["Хочу начать рейд банды"][curr_lang]);
      _0x30e7b4.push(language["Все в порядке, до скорого"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 182:
      _0x43264e = language.Брат[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["What’s up? Нужна помощь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажи склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу положить немного наличных в общак"][curr_lang]);
      _0x30e7b4.push(language["Хочу попасть на территорию захвата"][curr_lang]);
      _0x30e7b4.push(language["Доставай все свое оружие"][curr_lang]);
      _0x30e7b4.push(language["Хочу заняться закладками"][curr_lang]);
      _0x30e7b4.push(language["Хочу начать рейд банды"][curr_lang]);
      _0x30e7b4.push(language["Все в порядке, до скорого"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 183:
      _0x43264e = language.Водолаз[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет, тебе помочь с водолазным костюмом?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу переодеться в водолазный костюм"][curr_lang]);
      _0x30e7b4.push(language["Хочу снять водолазный костюм"][curr_lang]);
      _0x30e7b4.push(language["Хочу работать на батискафе"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 184:
      _0x43264e = language.Организатор[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет, хочешь заняться кулачными боями?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Зарегистрировать участников"][curr_lang]);
      _0x30e7b4.push(language["Объявить о скором бое"][curr_lang]);
      _0x30e7b4.push(language["Сделать ставку на бойцов"][curr_lang]);
      _0x30e7b4.push(language["Забрать выигрыш"][curr_lang]);
      _0x30e7b4.push(language["Объявить победителя"][curr_lang]);
      _0x30e7b4.push(language["Собрать прибыль с кулачных боев"][curr_lang]);
      _0x30e7b4.push(language["Дать доступ семье проводить бои"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 185:
      _0x43264e = language.Инопланетянин[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Хочешь узнать подробнее о хэллоуине?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Узнать про хэллоуин"][curr_lang]);
      _0x30e7b4.push(language["Хочу обменять ресурсы на конфеты"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 192:
      _0x43264e = language.Брат[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hola, брат! Нужна помощь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажи склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу положить немного наличных в общак"][curr_lang]);
      _0x30e7b4.push(language["Хочу попасть на территорию захвата"][curr_lang]);
      _0x30e7b4.push(language["Доставай все свое оружие"][curr_lang]);
      _0x30e7b4.push(language["Хочу заняться закладками"][curr_lang]);
      _0x30e7b4.push(language["Все в порядке, до скорого"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 193:
    case 163:
    case 164:
    case 165:
    case 166:
    case 167:
    case 168:
    case 102:
    case 22:
    case 21:
    case 20:
      _0x43264e = language["Продавец оружия"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, у нас огромный выбор оружия"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите мне, что у Вас есть"][curr_lang]);
      _0x30e7b4.push(language["Гони стволы сюда"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 178:
    case 177:
    case 176:
    case 175:
    case 174:
    case 171:
    case 170:
      _0x43264e = language.Управляющий[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет, чем помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Кто владелец данных ресурсов?"][curr_lang]);
      _0x30e7b4.push(language["Ничем, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 179:
      _0x43264e = language.Оружейник[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет, хочешь пострелять?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу потренировать стрельбу"][curr_lang]);
      _0x30e7b4.push(language["Какой рекорд на этом стрельбище?"][curr_lang]);
      _0x30e7b4.push(language["Ничем, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 198:
    case 23:
      _0x43264e = language.Хирург[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, Вы хотите сделать пластическую операцию?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Да, хочу кое-что изменить"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 24:
      _0x43264e = language.Главврач[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, что-то беспокоит?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Да, поршиво себя чувствую"][curr_lang]);
      _0x30e7b4.push(language["Хочу купить таблетки от болезней"][curr_lang]);
      _0x30e7b4.push(language["Хочу купить аптечки"][curr_lang]);
      _0x30e7b4.push(language["Хочу вызвать сотрудников подойти сюда"][curr_lang]);
      _0x30e7b4.push(language["Нет, чувствую себя отлично"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 25:
      _0x43264e = language["Бывший автоугонщик"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Даже не говори со мной, если у тебя нет сигарет"][curr_lang] + "'}";
      _0x30e7b4.push(language["У меня как раз есть парочку, держи"][curr_lang]);
      _0x30e7b4.push(language["Ясно, гуляй"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 26:
      _0x43264e = language["Бывший автоугонщик"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Докажи свою верность, набив татуировку черепа на все лицо, тогда и поговорим"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я подумаю над этим"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 27:
      _0x43264e = language["Бывший автоугонщик"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ну ты красавец, спрашивай все, что хочешь!<br>Я знаю много полезной информации и у меня есть пару интересных инструментов"][curr_lang] + "'}";
      _0x30e7b4.push(language["Расскажи, как ты угонял транспорт"][curr_lang]);
      _0x30e7b4.push(language["Покажи, что за инструменты у тебя есть"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо, пока ничего не надо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 28:
      _0x43264e = language.Автоугонщик[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я не слышал о тебе от Томаса, убирайся"][curr_lang] + "'}";
      _0x30e7b4.push(language["Понял, извини"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 29:
      _0x43264e = language.Автоугонщик[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Сегодня отличный день, чтобы сменить колеса"][curr_lang] + "'}";
      _0x30e7b4.push(language["Что у тебя есть для меня?"][curr_lang]);
      _0x30e7b4.push(language["Хочу сменить машину"][curr_lang]);
      _0x30e7b4.push(language.Бывай[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 30:
      _0x43264e = language.Автоугонщик[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, сегодня отличная погода"][curr_lang] + "'}";
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 31:
      _0x43264e = language.Карманник[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если ты хочешь стать карманником, сделай татуировку кирпичной стены на левой кисти<br>Это символизирует твое скорое возвращение сюда, если ты решишь все-таки этим заниматься"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я подумаю над этим"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 32:
      _0x43264e = language.Карманник[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я гляжу ты серьезно настроен<br>Запомни несколько простых правил:<br>Выбирай наименее опасных жертв<br>Купи маску у бандитов<br>Если ты начнешь дело и жертва отойдет от тебя хоть немного, то пиши пропало<br>И самое главное, даже если жертва не будет двигаться и ничего не заподозрит, то шанс неудачи велик, но с опытом грабить станет легче<br>Удачи тебе в этом нелегком деле"][curr_lang] + "'}";
      _0x30e7b4.push(language["Спасибо, надеюсь, больше не встретимся"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 33:
      _0x43264e = language["Сотрудник центра лицензирования"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу получить водительские права"][curr_lang]);
      _0x30e7b4.push(language["Хочу получить лицензию на воздушный транспорт"][curr_lang]);
      _0x30e7b4.push(language["Хочу получить лицензию на водный транспорт"][curr_lang]);
      _0x30e7b4.push(language["Хочу получить временный мопед"][curr_lang]);
      _0x30e7b4.push(language["Здравствуйте, ничем"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      if (story_quest_progress == 3) {
        setTimeout(() => {
          const _0x36cd4e = language["Выберите категорию прав на наземный транспорт"][curr_lang];
          showFocusHints([{
            element: "dialog-answer-1",
            text: _0x36cd4e,
            infoPosition: ["left"]
          }]);
        }, 500);
      }
      break;
    case 113:
      _0x43264e = language["Владелец черного рынка"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Приветствую тебя!<br>Хочешь продать пару пушек?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу арендовать торговую лавку"][curr_lang]);
      _0x30e7b4.push(language["Хочу продлить аренду торговой лавки"][curr_lang]);
      _0x30e7b4.push(language["Хочу закончить аренду лавки"][curr_lang]);
      _0x30e7b4.push(language["Хочу забрать свои вещи из лавки"][curr_lang]);
      _0x30e7b4.push(language["Покажите что находится в ваших лавках"][curr_lang]);
      _0x30e7b4.push(language["Расскажите об ограблении домов"][curr_lang]);
      _0x30e7b4.push(language["Хочу продать стволы"][curr_lang]);
      _0x30e7b4.push(language["Мне ничего не надо, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 34:
      _0x43264e = language["Владелец торгового рынка"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Приветствую тебя!<br>Чем могу быть полезен?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу арендовать торговую лавку"][curr_lang]);
      _0x30e7b4.push(language["Хочу продлить аренду торговой лавки"][curr_lang]);
      _0x30e7b4.push(language["Хочу закончить аренду лавки"][curr_lang]);
      _0x30e7b4.push(language["Хочу забрать свои вещи из лавки"][curr_lang]);
      _0x30e7b4.push(language["Мне ничего не надо, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 35:
      _0x43264e = language.Барыга[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я тебя впервые вижу, скройся отсюда"][curr_lang] + "'}";
      _0x30e7b4.push(language.Ухожу[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 36:
      _0x43264e = language.Барыга[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Чем могу помочь, босс?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажи, что заработал с территорий"][curr_lang]);
      _0x30e7b4.push(language["Отдай прибыль за граффити"][curr_lang]);
      _0x30e7b4.push(language["Ничем, работай"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 37:
      _0x43264e = language.Барыга[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Босс, на районе все в порядке"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажи прибыль с территорий"][curr_lang]);
      _0x30e7b4.push(language["Отдай прибыль за граффити"][curr_lang]);
      _0x30e7b4.push(language["Отлично, продолжай в том же духе"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 38:
      _0x43264e = language.Барыга[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Все под контролем, Вам не о чем беспокоиться"][curr_lang] + "'}";
      _0x30e7b4.push(language["Сколько ты заработал с территорий?"][curr_lang]);
      _0x30e7b4.push(language["Отдай прибыль за граффити"][curr_lang]);
      _0x30e7b4.push(language["Хорошо, следи за качеством"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 39:
      _0x43264e = language["Продавец оружий"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если у тебя есть компоненты оружий, мои парни все соберут за считанные минуты"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажи, что я могу собрать"][curr_lang]);
      _0x30e7b4.push(language["Хочу собрать прибыль с литейного завода"][curr_lang]);
      _0x30e7b4.push(language["Хочу починить оружие или сбить серийный номер"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 40:
      _0x43264e = language.Риелторша[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте!<br>У нас самые лучшие дома по самым низким ценам!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите, что у Вас есть"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 41:
      _0x43264e = language["Сотрудник правительства"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Закажите амуницию на склад"][curr_lang]);
      _0x30e7b4.push(language["Покажите склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу вернуть амуницию на склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу утилизировать использованную амуницию"][curr_lang]);
      _0x30e7b4.push(language["Сколько медикаментов на складе?"][curr_lang]);
      _0x30e7b4.push(language["Ничем, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 196:
    case 186:
    case 187:
    case 188:
    case 180:
    case 42:
    case 43:
      _0x43264e = language.Татуировщик[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Что будем делать?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу набить татуировку"][curr_lang]);
      _0x30e7b4.push(language["Хочу свести татуировку"][curr_lang]);
      _0x30e7b4.push(language["Ничего, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 189:
      _0x43264e = language.Оружейник[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет, хочешь пострелять?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу потренировать стрельбу"][curr_lang]);
      _0x30e7b4.push(language["Ничем, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 181:
      _0x43264e = language.Фотограф[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу распечатать фотографию"][curr_lang]);
      _0x30e7b4.push(language["Хочу сделать фото на паспорт/удостоверение"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 44:
      _0x43264e = language.Продавщица[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Доброго времени суток, у нас представлены самые эксклюзивные украшения"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите, что у Вас имеется"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 45:
    case 90:
    case 91:
      _0x43264e = language["Продавец-консультант"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Что-нибудь подсказать? У нас как раз сегодня привоз<br>Каждый день в наш магазин привозят уникальные коллекции одежды"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите, что у Вас имеется"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 195:
    case 158:
    case 159:
    case 160:
    case 161:
    case 162:
    case 145:
    case 139:
    case 203:
    case 204:
    case 92:
    case 46:
    case 77:
      _0x43264e = language["Продавец-консультант"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Чем могу помочь? Каждый день в нашем магазине обновляются коллекции одежды"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите, что у Вас имеется"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 100:
      _0x43264e = language["Продавец-консультант"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["В нашем магазине представлены эксклюзивные товары в лимитированном количестве!<br>Ассортимент магазина пополняется каждое воскресенье в 21:10"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите, что у Вас имеется"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 101:
      _0x43264e = language.Застройщик[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если у Вас есть вопросы по строительным работам - можете обращаться ко мне"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу зарегистрировать свою строительную компанию"][curr_lang]);
      _0x30e7b4.push(language["Я хочу внести изменения в свою строительную компанию"][curr_lang]);
      _0x30e7b4.push(language["Я хочу покинуть строительную компанию"][curr_lang]);
      _0x30e7b4.push(language["Я хочу купить строительный участок"][curr_lang]);
      _0x30e7b4.push(language["Ничего не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 80:
    case 79:
    case 78:
      _0x43264e = language["Скупщик драгоценностей"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Цены на руду и минералы меняются каждый час, у каждого скупщика они разные!<br>А если за день отыграно более 3 часов, то будет надбавка 20%"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу взглянуть на цены"][curr_lang]);
      _0x30e7b4.push(language["Хочу купить у тебя кое-что"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      if (story_quest_progress == 5) {
        setTimeout(() => {
          const _0x336a4f = language["Посмотретие на цены ресурсов"][curr_lang];
          showFocusHints([{
            element: "dialog-answer-1",
            text: _0x336a4f,
            infoPosition: ["left"]
          }]);
        }, 500);
      }
      break;
    case 47:
      _0x43264e = language["Бывший автоугонщик"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Кто тебя подослал? Я же вижу, что ты не из наших"][curr_lang] + "'}";
      _0x30e7b4.push(language.Ухожу[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 87:
      _0x43264e = language["Бывший автоугонщик"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Автоугон временно приостановлен"][curr_lang] + "'}";
      _0x30e7b4.push(language.Понятно[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 48:
      _0x43264e = language.Карманник[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Э-э-эй, это проверка? У меня ничего нет"][curr_lang] + "'}";
      _0x30e7b4.push(language.Удачи[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 49:
      _0x43264e = language.Банкир[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, у нас можно сделать любые операции без комиссий"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу сделать банковские операции"][curr_lang]);
      _0x30e7b4.push(language["Ничего не нужно"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 50:
      _0x43264e = language["Сотрудник почты"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, мы доставляем посылки быстрее всех в штате"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу отправить или забрать посылку"][curr_lang]);
      _0x30e7b4.push(language["Ничего не надо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      if (story_quest_progress == 2) {
        setTimeout(() => {
          const _0x130d7c = language["Откройте меню почты и заберите вашу посылку"][curr_lang];
          showFocusHints([{
            element: "dialog-answer-1",
            text: _0x130d7c,
            infoPosition: ["top"]
          }]);
        }, 500);
      }
      break;
    case 52:
      _0x43264e = language["Сотрудница казино"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, вход в элитный пентхаус и ресторан доступен с 20:00 до 4:00"][curr_lang] + "'}";
      _0x30e7b4.push(language["Здравствуйте, я хочу войти в пентхаус"][curr_lang]);
      _0x30e7b4.push(language["Здравствуйте, я хочу войти в апартаменты"][curr_lang]);
      _0x30e7b4.push(language["Здравствуйте, я хочу войти в ресторан на террасе"][curr_lang]);
      _0x30e7b4.push(language["Здравствуйте, кто владелец казино?"][curr_lang]);
      _0x30e7b4.push(language["Спасибо, до свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 53:
      _0x43264e = language["Сотрудник пентхауса"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу сменить интерьер пентхауса"][curr_lang]);
      _0x30e7b4.push(language.Ничем[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 54:
      _0x43264e = language["Потерянный мальчик"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Чего тебе надо?<br>Не видишь, ты нам мешаешь"][curr_lang] + "'}";
      _0x30e7b4.push(language.Ухожу[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 55:
      _0x43264e = language["Потерянный мальчик"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Чего тебе надо?<br>Не видишь, ты нам мешаешь"][curr_lang] + "'}";
      _0x30e7b4.push(language["Тебя ищет твоя бабушка"][curr_lang]);
      _0x30e7b4.push(language.Ухожу[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 197:
    case 116:
    case 103:
    case 57:
    case 56:
      _0x43264e = language.Бармен[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Желаете выпить?<br>У нас отменная выпивка!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите бар"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 153:
    case 133:
    case 132:
    case 131:
    case 130:
    case 129:
    case 128:
    case 127:
    case 126:
    case 125:
    case 124:
    case 123:
    case 122:
    case 121:
    case 120:
    case 119:
    case 118:
    case 117:
      _0x43264e = language.Парковщик[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Приветствую! Могу помочь с парковочным местом"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу взглянуть на парковочные места"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 134:
      _0x43264e = language.Помощница[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Приветствую! Могу помочь тебе с транспортом!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу получить временный мопед"][curr_lang]);
      _0x30e7b4.push(language["Спасибо, не нужно"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 63:
    case 62:
    case 59:
    case 58:
      _0x43264e = language["Продавец транспорта"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, у нас есть транспорт на любой вкус!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите, что сегодня продается"][curr_lang]);
      _0x30e7b4.push(language["Спасибо, ничего не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 60:
      _0x43264e = language["Продавец мото и вело транспорта"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, ассортимент нашего мотосалона обновляется каждый день в 20:10!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите, что сегодня продается"][curr_lang]);
      _0x30e7b4.push(language["Спасибо, ничего не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 61:
      _0x43264e = language["Продавец водного транспорта"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, ассортимент лодок обновляется каждый день в 20:10, заглядывайте чаще!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите, что сегодня продается"][curr_lang]);
      _0x30e7b4.push(language["Спасибо, ничего не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 64:
      _0x43264e = language["Продавец транспорта"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет, вижу ты не из богатых, раз пожаловал ко мне<br>Ну что ж, смотри, только помни, что каждый день в 20:10 ко мне поступает новый транспорт"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажи, что у тебя имеется"][curr_lang]);
      _0x30e7b4.push(language["Спасибо, ничего не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 65:
      _0x43264e = language["Продавец воздушного транспорта"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, у нас собраны лучшие летательные аппараты и каждый день в 20:10 поступают новые!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите, что сегодня продается"][curr_lang]);
      _0x30e7b4.push(language["Спасибо, ничего не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 74:
      _0x43264e = language.Отрисовщик[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если у тебя есть деньги, я сделаю тебе новое имя, я в этом деле мастер<br>И никто не узнает о твоем криминальном прошлом"][curr_lang] + "'}";
      _0x30e7b4.push(language["Да, я хочу сменить личность"][curr_lang]);
      _0x30e7b4.push(language["Спасибо, ничего не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 97:
      _0x43264e = language["Сотрудник правительства"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, чем помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу изменить имя"][curr_lang]);
      _0x30e7b4.push(language["Я хочу перевести средства на счет организации"][curr_lang]);
      _0x30e7b4.push(language["Я хочу купить страховку на дом"][curr_lang]);
      _0x30e7b4.push(language["Хочу вызвать сотрудников подойти сюда"][curr_lang]);
      _0x30e7b4.push(language["Хочу купить лицензию для создания семьи"][curr_lang]);
      _0x30e7b4.push(language["Спасибо, ничего не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 98:
      _0x43264e = language.Модельер[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет! У нас проходит акция, если в течении недели у тебя будет 80 наигранных часов, то я подарю тебе уникальный приз!<br>Еще я могу изготовить уникальные предметы на заказ"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу получить приз"][curr_lang]);
      _0x30e7b4.push(language["Спасибо, буду знать"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 99:
    case 112:
      _0x43264e = language["Организатор мероприятий"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет! Я могу устроить любое мероприятие, выбирай любое"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу попасть на стрельбище"][curr_lang]);
      _0x30e7b4.push(language["Спасибо, не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 75:
      _0x43264e = language["Заядлый трейдер"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если у тебя есть деньги и голова на плечах, то биржа акций поможет тебе стать миллионером"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу торговать на бирже"][curr_lang]);
      _0x30e7b4.push(language["Хочу узнать подробнее об офисах"][curr_lang]);
      _0x30e7b4.push(language["Меня это не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 76:
      _0x43264e = language["Сотрудник SAHP"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я могу установить номера и продать страховку на Ваш транспорт, но это будет стоить немного дороже, чем у других сотрудников"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу установить номера"][curr_lang]);
      _0x30e7b4.push(language["Я хочу купить страховку"][curr_lang]);
      _0x30e7b4.push(language["Я хочу купить страховку для семейного транспорта"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 200:
      _0x43264e = language["Заведующий плантации"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Приветствую. Я могу помочь тебе с управлением плантации"][curr_lang] + "'}";
      _0x30e7b4.push(language["Собрать урожай"][curr_lang]);
      _0x30e7b4.push(language["Забрать соки"][curr_lang]);
      _0x30e7b4.push(language["Кому принадлежит плантация?"][curr_lang]);
      _0x30e7b4.push(language["Пойду прогуляюсь"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 201:
      _0x43264e = language["Менеджер авторынка"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Приветствую. Я могу помочь тебе с приобретением б/у транспорта"][curr_lang] + "'}";
      _0x30e7b4.push(language["Посмотреть ассортимент"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 202:
      _0x43264e = language.Брат[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Hola, брат! Чем помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажи склад"][curr_lang]);
      _0x30e7b4.push(language["Хочу попасть на территорию захвата"][curr_lang]);
      _0x30e7b4.push(language["Все в порядке, до скорого"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 199:
      _0x43264e = language.Ведьма[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я могу дать тебе конфет или наложить проклятье, рискнешь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу испытать удачу"][curr_lang]);
      _0x30e7b4.push(language["Не хочу рисковать"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 194:
    case 157:
    case 156:
    case 155:
    case 154:
    case 144:
    case 143:
    case 142:
    case 141:
    case 138:
    case 137:
    case 136:
    case 93:
    case 73:
    case 72:
    case 71:
    case 70:
    case 69:
    case 68:
    case 67:
    case 66:
      _0x43264e = language.Продавец[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, у нас Вы найдете все, что Вам надо!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите товары"][curr_lang]);
      _0x30e7b4.push(language["Отдай деньги из кассы"][curr_lang]);
      _0x30e7b4.push(language["Спасибо, ничего не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 94:
      _0x43264e = language["Сотрудник СМИ"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, что Вы хотите?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу пополнить счет СМИ"][curr_lang]);
      _0x30e7b4.push(language["Хочу вызвать сотрудников подойти сюда"][curr_lang]);
      _0x30e7b4.push(language["Хочу посмотреть склад"][curr_lang]);
      _0x30e7b4.push(language["Закажите амуницию на склад"][curr_lang]);
      _0x30e7b4.push(language["Ничего, всего доброго"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 95:
      _0x43264e = language.Перекупщик[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Могу организовать для тебя любой номерной знак, естественно, не бесплатно"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу купить номерной знак"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 96:
      _0x43264e = language["Сотрудница казино"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Да, хочу купить фишки за наличные"][curr_lang]);
      _0x30e7b4.push(language["Да, хочу продать фишки"][curr_lang]);
      _0x30e7b4.push(language["Хочу совершить банковские операции"][curr_lang]);
      _0x30e7b4.push(language["Ничем, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 81:
      _0x43264e = language["Специалист по гриму"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если надо, я загремирую тебя так, что никто не узнает"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу нанести грим"][curr_lang]);
      _0x30e7b4.push(language["Я хочу нанести предыдущий грим"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 82:
      _0x43264e = language["Специалист по гриму"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я вижу на тебе грим, хочешь снять его?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Да, я хочу снять грим"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 83:
      _0x43264e = language.Информатор[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, бандиты хотят заполучить сведения о завтрашнем маршруте. Не дайте им добраться до меня!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Сделаем все возможное!"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 84:
      _0x43264e = language.Информатор[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Не стреляйте, я передам всю информацию, которой владею. Только не стреляйте!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Давай маршрут сюда"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 85:
      _0x43264e = language.Информатор[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ты сдурел? Тут кругом полиция, я не дам тебе маршрут."][curr_lang] + "'}";
      _0x30e7b4.push(language.Уйти[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 86:
      _0x43264e = language.Информатор[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я вижу ты не сотрудник полиции, уходи отсюда, пока есть возможность"][curr_lang] + "'}";
      _0x30e7b4.push(language.Уйти[curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 89:
      _0x43264e = language["Сотрудник аэродрома"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я сдаю самолеты для посева полей, если в Вашей семье есть плантации, то я помогу их удобрить"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу арендовать самолет для удобрения плантации"][curr_lang]);
      _0x30e7b4.push(language["Спасибо, не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 135:
      _0x43264e = language.Дальнобойщик[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если ты хочешь арендовать фуру, я могу помочь тебе в этом!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу арендовать фуру"][curr_lang]);
      _0x30e7b4.push(language["Хочу арендовать уникальную фуру"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 1515:
    case 1514:
    case 1513:
    case 1512:
    case 1511:
    case 1510:
    case 1509:
    case 1508:
    case 1507:
    case 1506:
    case 1505:
    case 1504:
    case 1503:
    case 1502:
    case 1501:
      _0x43264e = language.Фермер[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет, нужна помощь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Да, как идут дела на плантации?"][curr_lang]);
      _0x30e7b4.push(language["Нет, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 1523:
    case 1522:
    case 1521:
    case 1520:
    case 1519:
    case 1518:
    case 1517:
    case 1516:
      _0x43264e = language.Фермер[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет, чем помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу узнать как дела в коровнике"][curr_lang]);
      _0x30e7b4.push(language["Ничем, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 1000:
      const _0xd401c7 = at_quest_char - 1;
      _0x43264e = Quests[_0xd401c7].Pers_Name;
      _0x1de832 = "{\"type\": 0, \"text\": '" + Quests[_0xd401c7].Discription + "'}";
      _0x30e7b4.push(Quests[_0xd401c7].Button_1);
      _0x30e7b4.push(Quests[_0xd401c7].Button_2);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 2000:
      _0x43264e = language.Незнакомка[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет!<br>Меня отправили встретить тебя после перелёта. Семья заждалась."][curr_lang] + "'}";
      _0x30e7b4.push(language["Привет, хочу воссоединиться с семьей"][curr_lang]);
      _0x30e7b4.push(language["Привет, хочу возобновить сюжетную цепочку заданий"][curr_lang]);
      _0x30e7b4.push(language["Привет, кто владелец отеля?"][curr_lang]);
      _0x30e7b4.push(language["Привет, хочу начать уборку отеля"][curr_lang]);
      _0x30e7b4.push(language["Хочу забрать подарок"][curr_lang]);
      _0x30e7b4.push(language["Нет, помощь мне не нужна"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 555:
    case 556:
      _0x43264e = "Сотрудник 1xBet";
      _0x1de832 = "{\"type\": 0, \"text\": 'Здравствуйте, чем могу вам помочь?'}";
      _0x30e7b4.push("Открыть ставки");
      _0x30e7b4.push(language["Ничего, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 205:
      _0x43264e = language.Преподаватель[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я предлагаю вам переместиться в период войн, хотите ли вы?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Зарегистрироваться на матч"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 206:
      _0x43264e = language.Директор[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Учебный год - это упорное время года. Чем могу вам помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Открыть магазин"][curr_lang]);
      _0x30e7b4.push(language["Посмотреть статистику"][curr_lang]);
      _0x30e7b4.push(language["Где учитель истории?"][curr_lang]);
      _0x30e7b4.push(language["Где учитель геологии?"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 207:
    case 208:
    case 210:
    case 211:
    case 212:
    case 213:
    case 214:
    case 215:
      _0x43264e = language.Преподаватель[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуй, ты готов к началу урока?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Да, начать урок"][curr_lang]);
      _0x30e7b4.push(language["Нет, еще не готов"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 216:
      _0x43264e = language["Продавец складских помещений"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу купить склад"][curr_lang]);
      _0x30e7b4.push(language["Как оплатить мой склад?"][curr_lang]);
      _0x30e7b4.push(language["Мне ничего не нужно, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 217:
      _0x43264e = language["Продавец забытых складов"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу посмотреть аукцион забытых складов"][curr_lang]);
      _0x30e7b4.push(language["Мне ничего не нужно, спасибо"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 209:
      _0x43264e = language.Преподаватель[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["На этом пляже находится очень много дуплонов, которые дают очки. Ты можешь попытать удачу используя лопату"][curr_lang] + "'}";
      _0x30e7b4.push(language["Купить лопату"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5001:
      _0x43264e = language.Пришелец[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Неразборчивые звуки"][curr_lang] + "'}";
      _0x30e7b4.push(language["Отдавай свои конфеты"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5002:
      _0x43264e = language["Завод РП билетов"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Здравствуйте, чем могу помочь?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Забрать РП билеты"][curr_lang]);
      _0x30e7b4.push(language.Напасть[curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5003:
      _0x43264e = language["Санта Клаус"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Хо хо хо! Санта приветсвует тебя"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу взять сюжетную цепочку заданий"][curr_lang]);
      _0x30e7b4.push(language["Я хочу получить рождественскую профессию"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5004:
      _0x43264e = language.Лесоруб[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я могу помочь произвести ключи"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу запустить производство ключей"][curr_lang]);
      _0x30e7b4.push(language["Я хочу получить забрать ключи"][curr_lang]);
      _0x30e7b4.push(language["Что мне нужно принести?"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5005:
      _0x43264e = language.Шахтер[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я могу помочь произвести ключи"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу запустить производство ключей"][curr_lang]);
      _0x30e7b4.push(language["Я хочу получить забрать ключи"][curr_lang]);
      _0x30e7b4.push(language["Что мне нужно принести?"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5006:
      _0x43264e = language.Рыбак[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я могу помочь произвести ключи"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу запустить производство ключей"][curr_lang]);
      _0x30e7b4.push(language["Я хочу получить забрать ключи"][curr_lang]);
      _0x30e7b4.push(language["Что мне нужно принести?"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5007:
      _0x43264e = language.Фермер[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я могу помочь произвести ключи"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу запустить производство ключей"][curr_lang]);
      _0x30e7b4.push(language["Я хочу получить забрать ключи"][curr_lang]);
      _0x30e7b4.push(language["Что мне нужно принести?"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5008:
      _0x43264e = language["Плохой Санта"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ты нашел меня. У меня нет ключей"][curr_lang] + "'}";
      _0x30e7b4.push(language["Верни рождественские ключи"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5009:
      _0x43264e = language["Рождественская ёлка"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я несу дух рождества"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу взять задание"][curr_lang]);
      _0x30e7b4.push(language["Я могу тебя починить"][curr_lang]);
      _0x30e7b4.push(language["Что мне нужно принести?"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5010:
      _0x43264e = language.Миньон[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я буду дарить ключи, если за мной ухаживать"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу взять задание"][curr_lang]);
      _0x30e7b4.push(language["Дай мне ключи"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5011:
      _0x43264e = language["Рождественский олень"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Накорми меня"][curr_lang] + "'}";
      _0x30e7b4.push(language.Накормить[curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5012:
    case 5013:
      _0x43264e = language["Магазин питомцев"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Все для твоего домашнего питомца!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Покажите товары"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5014:
      _0x43264e = language["Управляющий караванами"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Куда хочешь доставить караван?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Выбрать караван"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      mp.events.call("Client_ResetGPS");
      break;
    case 5015:
      _0x43264e = language.Пират[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ты хочешь забрать мои золотые монеты?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Отдай золотые монеты"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5016:
      _0x43264e = language.Танцор[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Станцуем?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Да, я хочу начать танец"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5017:
      _0x43264e = language["Работник свалки"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Привет. Интересует переработка транспорта в металлолом?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Да, хочу переработать транспорт"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5018:
      _0x43264e = language["Санта Клаус"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Мне срочно нужны ресурсы, я щедро вознагражу тебя, если ты принесешь мне их"][curr_lang] + "'}";
      _0x30e7b4.push(language["Какие ресурсы мне нужно принести?"][curr_lang]);
      _0x30e7b4.push(language["Я хочу отдать тебе ресурсы"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5019:
      _0x43264e = language.Барыга[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Чем могу помочь, босс?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Ты теперь работаешь на нас"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5020:
      _0x43264e = language["Шеф-повар"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Поможете мне приготовить торт?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Да, конечно!"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5021:
      _0x43264e = language.Барыга[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": 'Я могу снять камни с твоих вещей. Но сначала надень их, чтобы я убедился что камни вставлены в вещь'}";
      _0x30e7b4.push("Я хочу снять камни с надетых вещей");
      _0x30e7b4.push("Я хочу обменять камни на другой приз");
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5022:
      _0x43264e = language["Очистка статуэток"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ты хочешь очистить статуэтки?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу очистить стауэтки"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5023:
      _0x43264e = language["Свадебные принадлежности"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Аренда на 1 час"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу арендовать лимузин"][curr_lang]);
      _0x30e7b4.push(language["Хочу арендовать смокинг или свадебное платье"][curr_lang]);
      if (bFebruary2026) {
        _0x30e7b4.push(language["Хочу забрать валентинку"][curr_lang]);
      }
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 5024:
      _0x43264e = language["Памятная футболка Emre Bozkurt"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Ты хочешь почтить память?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Я хочу почтить память"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 6000:
      _0x43264e = language.Начальник[curr_lang];
      if (global.jail_time_in_jail > 0) {
        if (global.workAtPrisonJob) {
          _0x1de832 = "{\"type\": 0, \"text\": '" + language["Хочешь закончить работу?"][curr_lang] + "'}";
          _0x30e7b4.push(language["Да, я хочу закончить работу"][curr_lang]);
          _0x30e7b4.push(language["Нет, я хочу продолжить работу"][curr_lang]);
        } else {
          _0x1de832 = "{\"type\": 0, \"text\": '" + language["Хочешь снизить срок своего заключения?<br/>Отправляйся на одну из работ, за каждое выполненное задание твой срок будет уменьшен."][curr_lang] + "'}";
          _0x30e7b4.push(language["Мойка душевых"][curr_lang]);
          _0x30e7b4.push(language["Глажка одежды"][curr_lang]);
          _0x30e7b4.push(language["Приготовление еды"][curr_lang]);
          _0x30e7b4.push(language["Перенос коробок"][curr_lang]);
          _0x30e7b4.push(language["Не интересует"][curr_lang]);
        }
      } else if ([3, 4, 12].includes(parseInt(localplayer.getVariable("Member")))) {
        if (global.isPrisonWarden) {
          _0x1de832 = "{\"type\": 0, \"text\": '" + language["Хочешь закончить службу надзирателя?"][curr_lang] + "'}";
          _0x30e7b4.push(language.Да[curr_lang]);
          _0x30e7b4.push(language.Нет[curr_lang]);
        } else {
          _0x1de832 = "{\"type\": 0, \"text\": '" + language["Хочешь устроиться надзирателем?<br/>Отправляй заключенных ко мне, подберем им работу (мойка душевых, глажка одежды, приготовление еды).<br/>За каждое выполненное ими задание в общак будут начисляться деньги, которые каждый час распределяются поровну между надзирателями."][curr_lang] + "'}";
          _0x30e7b4.push(language["Да, хочу устроиться"][curr_lang]);
          _0x30e7b4.push(language["Не интересует"][curr_lang]);
        }
      } else {
        _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я начальник тюрьмы. Если будут какие-то вопросы - обращайся."][curr_lang] + "'}";
        _0x30e7b4.push(language.Понятно[curr_lang]);
      }
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 6001:
    case 6002:
    case 6003:
    case 6004:
    case 6005:
    case 6006:
    case 6007:
    case 6008:
    case 6009:
    case 6010:
    case 6011:
    case 6012:
    case 6013:
    case 6014:
    case 6015:
    case 6016:
    case 6017:
    case 6018:
    case 6019:
      {
        const _0xc8ccba = dialogstate - 6000;
        const _0x4a1ed8 = FACTIONS_GARAGES_NPC_IDS[_0xc8ccba];
        if (!_0x4a1ed8) {
          return;
        }
        _0x43264e = language["Вызов транспорта"][curr_lang];
        if (Array.isArray(_0x4a1ed8) && _0x4a1ed8.includes(localplayer.getVariable("Member")) || localplayer.getVariable("Member") === _0x4a1ed8) {
          _0x1de832 = "{\"type\": 0, \"text\": '" + language["Вы можете вызвать доступный на Вашем ранге транспорт фракции. Для того чтобы тюнинговать транспорт воспользуйтесь G Menu"][curr_lang] + "'}";
          _0x30e7b4.push(language["Вызвать транспорт"][curr_lang]);
          if (!global.FACTIONS_GANG_IDS.includes(localplayer.getVariable("Member"))) {
            _0x30e7b4.push(language["Случайный номерной знак"][curr_lang]);
          }
          _0x30e7b4.push(language["Не интересует"][curr_lang]);
        } else {
          _0x1de832 = "{\"type\": 0, \"text\": '" + language["Я ничем не могу тебе помочь"][curr_lang] + "'}";
          _0x30e7b4.push(language.Понятно[curr_lang]);
        }
        _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
        main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
        break;
      }
    case 6020:
      _0x43264e = language["Аренда коньков"][curr_lang];
      if (localplayer.getVariable("onRollers")) {
        _0x1de832 = "{\"type\": 0, \"text\": '" + language["Уже накатался? Если захочешь еще, сможешь взять у меня коньки в любое время"][curr_lang] + "'}";
        _0x30e7b4.push(language["Отдать коньки"][curr_lang]);
        _0x30e7b4.push(language["Не интересует"][curr_lang]);
      } else {
        _0x1de832 = "{\"type\": 0, \"text\": '" + language["У меня ты можешь взять коньки для катания на катке. Когда накатаешься, приноси их мне обратно."][curr_lang] + "'}";
        _0x30e7b4.push(language["Взять коньки"][curr_lang]);
        _0x30e7b4.push(language["Не интересует"][curr_lang]);
      }
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      return;
    case 6021:
      _0x43264e = language.Дальнобойщик[curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Если ты хочешь начать новогоднее задание, я могу помочь тебе в этом!"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу взять новогоднее задание!"][curr_lang]);
      _0x30e7b4.push(language["До свидания"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
      break;
    case 6023:
      _0x43264e = language["Обменник валют"][curr_lang];
      _0x1de832 = "{\"type\": 0, \"text\": '" + language["Хочешь обменять Grand Coins или Crypto на деньги?"][curr_lang] + "'}";
      _0x30e7b4.push(language["Хочу обменять Grand Coins на деньги"][curr_lang]);
      _0x30e7b4.push(language["Хочу обменять Crypto на деньги"][curr_lang]);
      _0x30e7b4.push(language["Не интересует"][curr_lang]);
      _0x32aea5 = "{\"my_name\":'" + localplayer.name.replace("_", " ") + "',\"dialogName\":'" + _0x43264e + "',\"globalQuestionAnswer\":[" + _0x1de832 + "],\"buttonsAnswer\":" + JSON.stringify(_0x30e7b4) + ",\"show\":true}";
      main_browser.execute("APPS.state.npc_dialog = " + _0x32aea5);
  }
}
global.dialogstate = 0;
global.InNpcDialog = false;
mp.events.add("StartConversation", _0x56d6e4 => {
  Start_Conversation_Func(_0x56d6e4);
});
global.Start_Conversation_Func = function (_0x252458) {
  if (GlobalCheck() == 1) {
    return mp.game.cam.renderScriptCams(false, true, 2000, true, false);
  }
  localplayer.freezePosition(true);
  dialogstate = _0x252458;
  if (_0x252458 == 2000 && curr_lang == "ru") {
    StartCustomSound("newbie_intro_conv", "sounds/newbie_conv/grand_1.ogg", 0.2);
  }
  if (_0x252458 == 2) {
    mp.events.callRemote("Server_TalkToShipMen");
  }
  InNpcDialog = true;
  mp.events.call("Disablechat");
  mp.gui.cursor.show(true, true);
  ChattingNPC();
  ChangeHudState(false);
  mp.game.ui.displayRadar(false);
};
mp.events.add("ChangeConversation", _0x12b2f8 => {
  if (InNpcDialog) {
    main_browser.execute("APPS.state.npc_dialog.show = false;");
    dialogstate = _0x12b2f8;
    ChattingNPC();
  }
});
global.EndConversationFinally = function (_0x3c36ce = false) {
  if (InNpcDialog != 0) {
    main_browser.execute("APPS.state.npc_dialog.show = false;");
    InNpcDialog = false;
    localplayer.freezePosition(false);
    is_freezed = false;
    if (_0x3c36ce) {
      mp.game.cam.renderScriptCams(false, true, 0, true, false);
    } else {
      mp.game.cam.renderScriptCams(false, true, 2000, true, false);
    }
    if (dialogstate == 2000) {
      StopCustomSound("newbie_intro_conv");
    }
    dialogstate = 0;
    mp.gui.cursor.show(false, false);
    mp.events.call("Enablechat");
    if (hudswitch == 0) {
      ChangeHudState(true);
      mp.game.ui.displayRadar(true);
    }
  }
};
mp.events.add("EndConversation", (_0x452110 = false) => {
  if (InNpcDialog != 0) {
    EndConversationFinally(_0x452110);
  }
});
mp.events.add("ConversationSendBasicAnswer", _0xdc285e => {
  _0xdc285e = resolveTranslation(_0xdc285e);
  if (InNpcDialog) {
    main_browser.execute("APPS.state.npc_dialog.globalQuestionAnswer.push({type: 0, text: " + JSON.stringify(_0xdc285e) + "});");
  } else {
    mp.game.ui.notifications.show(_0xdc285e, false, 0, 6);
  }
});
mp.events.add("ConversationSendBasicTalk", (_0x1b0e58, _0x4cc69e = "", ..._0x2b2208) => {
  _0x1b0e58 = resolveTranslation(_0x1b0e58, _0x2b2208);
  _0x4cc69e = resolveTranslation(_0x4cc69e, _0x2b2208);
  if (InNpcDialog) {
    main_browser.execute("APPS.state.npc_dialog.globalQuestionAnswer.push({type: 1, text: \"" + _0x1b0e58 + "\"});");
    if (_0x4cc69e.length > 0) {
      main_browser.execute("APPS.state.npc_dialog.globalQuestionAnswer.push({type: 0, text: \"" + _0x4cc69e + "\"});");
    }
  } else {
    mp.game.ui.notifications.show(_0x4cc69e, false, 0, 6);
  }
});
mp.events.add("Client_ConversationSendBasicTalkInt", (_0x4ed10f, _0x5e0a5e = "", ..._0x4b4d54) => {
  if (InNpcDialog) {
    _0x4ed10f = +_0x4ed10f;
    if (!isNaN(_0x4ed10f)) {
      if (_0x4ed10f + 1 > NotificationMessages.length) {
        return;
      }
      _0x4ed10f = language[NotificationMessages[_0x4ed10f]][curr_lang];
      if (_0x4b4d54.length > 0) {
        _0x4b4d54.forEach((_0x20e0ca, _0x4b37c0) => {
          const _0x6dca48 = new RegExp("\\{" + _0x4b37c0 + "\\}", "g");
          if (_0x4ed10f.includes("{" + _0x4b37c0 + "}")) {
            _0x4ed10f = _0x4ed10f.replace(_0x6dca48, _0x20e0ca);
          }
        });
      }
    }
    _0x5e0a5e = +_0x5e0a5e;
    if (!isNaN(_0x5e0a5e)) {
      if (_0x5e0a5e + 1 > NotificationMessages.length) {
        return;
      }
      _0x5e0a5e = language[NotificationMessages[_0x5e0a5e]][curr_lang];
      if (_0x4b4d54.length > 0) {
        _0x4b4d54.forEach((_0xb59b58, _0x3207b4) => {
          const _0x11e73d = new RegExp("\\{" + _0x3207b4 + "\\}", "g");
          if (_0x5e0a5e.includes("{" + _0x3207b4 + "}")) {
            _0x5e0a5e = _0x5e0a5e.replace(_0x11e73d, _0xb59b58);
          }
        });
      }
    }
    main_browser.execute("APPS.state.npc_dialog.globalQuestionAnswer.push({type: 1, text: \"" + _0x4ed10f + "\"});");
    if (_0x5e0a5e.length > 0) {
      main_browser.execute("APPS.state.npc_dialog.globalQuestionAnswer.push({type: 0, text: \"" + _0x5e0a5e + "\"});");
    }
  } else {
    mp.game.ui.notifications.show(_0x5e0a5e, false, 0, 6);
  }
});
mp.events.add("ConversationSendAnswer", _0x1eaca9 => {
  if (!(new Date().getTime() - lastCheck < 250)) {
    lastCheck = new Date().getTime();
    switch (dialogstate) {
      case 1:
        if (_0x1eaca9 == 1) {
          EndConversationFinally();
          mp.events.callRemote("ServerShipBought");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 2:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShipSpawn", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("ServerShipSpawn", 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 3:
        if (_0x1eaca9 == 1) {
          mp.events.call("EndConversation");
          mp.events.callRemote("ServerFlyBought");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 4:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerFlyArend");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("ServerFlySpawn");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("ServerFlyCancelArend");
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 5:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceSurrender");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_PoliceSetIllegalItems", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_CallPoliceHere", 1);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 147:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceSurrender");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_PoliceSetIllegalItems", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_CallPoliceHere", 2);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 148:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceSurrender");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_PoliceSetIllegalItems", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_CallPoliceHere", 3);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 218:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_CallPoliceHere", 6);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 219:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_CallPoliceHere", 3);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 149:
        if (_0x1eaca9 == 1) {
          EndConversationFinally();
          mp.events.callRemote("Server_GetCashCollectorJob");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 190:
        if (_0x1eaca9 == 1) {
          EndConversationFinally();
          mp.events.callRemote("Server_MailDeliveryJobGet");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 191:
        if (_0x1eaca9 == 1) {
          EndConversationFinally();
          mp.events.callRemote("Server_ChangeDogName");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 150:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetNewbieScooter", 4);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 6:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("HospitalChangeSex");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 104:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("RoadPoliceGetVehicle", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("RoadPoliceGetFamilyVehicle");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 7:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("RoadPoliceGetVehicle", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("RoadPoliceGetFamilyVehicle");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 8:
        SelectCorrectVehicleFromParking(_0x1eaca9);
        break;
      case 9:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("BusinessBuyProducts");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_AgrarSell");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_CowMilkSell");
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 10:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceOrderWarehouse", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("PoliceShowWarehouse", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("GetBackGunsWarehouse", 1);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GunUtilization", 1);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_CheckHealWarehouse", 1);
        } else if (new_version == 1 && _0x1eaca9 == 6) {
          mp.events.callRemote("Server_TakeDogs", 3);
        } else if (new_version == 1 && _0x1eaca9 == 7 || new_version == 0 && _0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 105:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouseFromJail");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("GetBackGunsWarehouse", 9);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GunUtilization", 9);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 106:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ArendBusWork");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 135:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ArendTruckerWork");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_ArendUniqueTruckerWork");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 107:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ElectroVehicleWork");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 108:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_CreateMushroomsSoup");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 109:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_EnterBuyFurniture");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetNewbieScooter", 3);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetInformationAboutUnofficialBusinesses");
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 178:
      case 177:
      case 176:
      case 175:
      case 174:
      case 171:
      case 170:
        if (_0x1eaca9 == 1) {
          if (dialogstate == 170 || dialogstate == 171 || dialogstate == 174 || dialogstate == 175 || dialogstate == 176 || dialogstate == 177 || dialogstate == 178) {
            mp.events.callRemote("Server_GetInformationAboutUnofficialBusinesses");
          }
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 189:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_PracticeShooting", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 179:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_PracticeShooting");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetShootingRecord");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 110:
        if (bChristmas2025) {
          if (_0x1eaca9 == 1) {
            mp.events.callRemote("Server_SpawnFlyVehicle", 1);
          } else if (_0x1eaca9 == 2) {
            mp.events.callRemote("Server_SpawnFlyVehicle", 2);
          } else if (_0x1eaca9 == 3) {
            mp.events.callRemote("Server_TeleportIsland");
          } else if (_0x1eaca9 == 4) {
            mp.events.callRemote("Server_StartPilotWork");
          } else if (_0x1eaca9 == 5) {
            mp.events.callRemote("Server_RequestSantaVehicle");
          } else if (_0x1eaca9 == 6) {
            EndConversationFinally();
          }
        } else if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SpawnFlyVehicle", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_SpawnFlyVehicle", 2);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_TeleportIsland");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_StartPilotWork");
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 111:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_Divorce");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 11:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceOrderWarehouse", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("PoliceShowWarehouse", 2);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("GetBackGunsWarehouse", 2);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GunUtilization", 2);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_CheckHealWarehouse", 2);
        } else if (new_version == 1 && _0x1eaca9 == 6) {
          mp.events.callRemote("Server_TakeDogs", 4);
        } else if (new_version == 1 && _0x1eaca9 == 7 || new_version == 0 && _0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 12:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceOrderWarehouse", 3);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("PoliceShowWarehouse", 3);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("GetBackGunsWarehouse", 3);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GunUtilization", 3);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_CheckHealWarehouse", 3);
        } else if (new_version == 1 && _0x1eaca9 == 6) {
          mp.events.callRemote("Server_TakeDogs", 12);
        } else if (new_version == 1 && _0x1eaca9 == 7 || new_version == 0 && _0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 13:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceOrderWarehouse", 4);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("PoliceShowWarehouse", 4);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("GetBackGunsWarehouse", 4);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GunUtilization", 4);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_CheckHealWarehouse", 4);
        } else if (new_version == 1 && _0x1eaca9 == 6) {
          mp.events.callRemote("Server_TakeDogs", 2);
        } else if (new_version == 1 && _0x1eaca9 == 7 || new_version == 0 && _0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 14:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouse", 5);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetBackHospitalMask", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetBackHospitalMask", 2);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 152:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouse", 7);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 7);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_RequestGangbaseRaidInfo");
        } else if (_0x1eaca9 == 7) {
          EndConversationFinally();
        }
        break;
      case 15:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ShowGangWarehouse", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 1);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 7);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 169:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouse", 8);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 2);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 8);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_RequestGangbaseRaidInfo");
        } else if (_0x1eaca9 == 7) {
          EndConversationFinally();
        }
        break;
      case 16:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ShowGangWarehouse", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 2);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 8);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 172:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouse", 9);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 3);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 9);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_RequestGangbaseRaidInfo");
        } else if (_0x1eaca9 == 7) {
          EndConversationFinally();
        }
        break;
      case 17:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ShowGangWarehouse", 3);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 3);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 9);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_RequestGangbaseRaidInfo");
        } else if (_0x1eaca9 == 7) {
          EndConversationFinally();
        }
        break;
      case 182:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouse", 10);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 4);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 10);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_RequestGangbaseRaidInfo");
        } else if (_0x1eaca9 == 7) {
          EndConversationFinally();
        }
        break;
      case 183:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_DivingSuit", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_DivingSuit", 2);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_DivingSuit", 3);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 184:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RegisterFighters");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_AnnounceSoonFight");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_BetOnFighters");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_FightersTakeWiningBet");
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_DecideAFighterWinner");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_CollectMoneyFromFistFights");
        } else if (_0x1eaca9 == 7) {
          mp.events.callRemote("Server_GiveAccessToFamilyFistfights");
        } else if (_0x1eaca9 == 8) {
          EndConversationFinally();
        }
        break;
      case 18:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ShowGangWarehouse", 4);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 4);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 10);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 192:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceShowWarehouse", 11);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 5);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 11);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 19:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ShowGangWarehouse", 5);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("MoneyInGangWarehouse", 5);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_GetToCapture");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GangRaid", 11);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GangStartBookMark");
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_RequestGangbaseRaidInfo");
        } else if (_0x1eaca9 == 7) {
          EndConversationFinally();
        }
        break;
      case 20:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShowAmmo", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetAmmunationFromBiz", 1);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 21:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShowAmmo", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetAmmunationFromBiz", 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 22:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShowAmmo", 3);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetAmmunationFromBiz", 3);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 102:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShowAmmo", 4);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetAmmunationFromBiz", 4);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 163:
      case 164:
      case 165:
      case 166:
      case 167:
      case 168:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShowAmmo", dialogstate - 158);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetAmmunationFromBiz", dialogstate - 158);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 193:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("ServerShowAmmo", 11);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetAmmunationFromBiz", 11);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 23:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("StartHospitalSurgery");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 198:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("StartHospitalSurgery", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 199:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_TryHalloweenLuck");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 200:
        if (_0x1eaca9 >= 1 && _0x1eaca9 <= 3) {
          mp.events.callRemote("Server_InteractWithGrape", _0x1eaca9);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 201:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenCarFairList");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 202:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenMafiaSklad");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetToCaptureMafia");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 203:
      case 204:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", dialogstate - 188, true);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 24:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("StartHospitalHeal");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_BuyPillsFromNPC");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_BuyFirstAidKits");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_CallPoliceHere", 7);
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 25:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Theft_Action", 0);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 26:
      case 28:
      case 30:
      case 31:
      case 32:
      case 87:
      case 48:
      case 47:
      case 35:
      case 86:
      case 85:
      case 83:
      case 54:
        if (_0x1eaca9 == 1) {
          EndConversationFinally();
        }
        break;
      case 27:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Theft_Action", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Theft_Action", 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 29:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Theft_Action", 3);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Theft_Action", 4);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 33:
        if (_0x1eaca9 < 4) {
          mp.events.callRemote("Get_license", _0x1eaca9);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GetNewbieScooter");
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 34:
        if (_0x1eaca9 > 0 && _0x1eaca9 < 5) {
          mp.events.callRemote("Shop_center_Action", _0x1eaca9);
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 113:
        if (_0x1eaca9 < 6) {
          mp.events.callRemote("Server_Black_Shop_center_Action", _0x1eaca9);
        } else if (_0x1eaca9 == 6) {
          mp.events.callRemote("Server_OpenHouseRobberyInfo");
        } else if (_0x1eaca9 == 7) {
          mp.events.callRemote("Server_PoliceSetIllegalItems", 2);
        } else if (_0x1eaca9 == 8) {
          EndConversationFinally();
        }
        break;
      case 115:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_TeleportFromIsland");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_ArendQuadroVehicle");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 89:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_Get_HarvestFly");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 36:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Gang_Get_Money", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Gang_Get_Money", 4);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
          mp.events.callRemote("Gang_Get_Money_Finish");
        }
        break;
      case 37:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Gang_Get_Money", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Gang_Get_Money", 4);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
          mp.events.callRemote("Gang_Get_Money_Finish");
        }
        break;
      case 38:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Gang_Get_Money", 3);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Gang_Get_Money", 4);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
          mp.events.callRemote("Gang_Get_Money_Finish");
        }
        break;
      case 39:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("EnterGangCraft");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetFoundryMoney");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_OpenRepairInventory");
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 40:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("OpenHouseRielt");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 41:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("PoliceOrderWarehouse", 6);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("PoliceShowWarehouse", 6);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("GetBackGunsWarehouse", 6);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GunUtilization", 6);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_CheckHealWarehouse", 6);
        } else if (_0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 42:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Tatto_Action", 1, 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Tatto_Action", 1, 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 43:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Tatto_Action", 2, 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Tatto_Action", 2, 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 44:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Jewellery_Shop", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 45:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 46:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 77:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 3);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 90:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 4);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 91:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 5);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 92:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 6);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 139:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 7);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 145:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 8);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 195:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", 14);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 158:
      case 159:
      case 160:
      case 161:
      case 162:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Clothes_Shop_Enter", dialogstate - 149);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 146:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ArendFireWork");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 80:
      case 79:
      case 78:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenResourceReseller", dialogstate - 77);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_MineBuyResources");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 81:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_Fib_Spy", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_Fib_Spy", 3);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 82:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_Fib_Spy", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 84:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_Get_Escort_Route");
          EndConversationFinally();
        }
        break;
      case 49:
        if (_0x1eaca9 == 1) {
          OpenBank(2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 50:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenPostal");
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 52:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Casino_Action", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_EnterCasinoApparts");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_EnterCasinoRestaurant");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_GetInformationAboutUnofficialBusinesses");
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 53:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Casino_Action", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 55:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("GetQuestProgress", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 56:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Bar_Action", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 57:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Bar_Action", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 103:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Bar_Action", 3);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 116:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Bar_Action", 4);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 197:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Bar_Action", localplayer.dimension == 999 ? 5 : -1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 153:
      case 133:
      case 132:
      case 131:
      case 130:
      case 129:
      case 128:
      case 127:
      case 126:
      case 125:
      case 124:
      case 123:
      case 122:
      case 121:
      case 120:
      case 119:
      case 118:
      case 117:
        if (_0x1eaca9 == 1) {
          if (dialogstate == 153) {
            mp.events.callRemote("Server_OpenParking", 18);
          } else {
            mp.events.callRemote("Server_OpenParking", dialogstate - 116);
          }
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 134:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetNewbieScooter", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 65:
      case 64:
      case 63:
      case 62:
      case 61:
      case 60:
      case 59:
      case 58:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenAutoSalon", dialogstate);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 73:
      case 72:
      case 71:
      case 70:
      case 69:
      case 68:
      case 67:
      case 66:
      case 194:
      case 157:
      case 156:
      case 155:
      case 154:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenShop", dialogstate);
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RobberyShop", dialogstate);
          EndConversationFinally();
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 93:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenShop", 74);
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RobberyShop", 74);
          EndConversationFinally();
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 138:
      case 137:
      case 136:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenShop", dialogstate - 61);
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RobberyShop", dialogstate - 61);
          EndConversationFinally();
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 144:
      case 143:
      case 142:
      case 141:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenShop", dialogstate - 129);
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RobberyShop", dialogstate - 129);
          EndConversationFinally();
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 94:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GiveSMIMoney");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_CallPoliceHere", 4);
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("PoliceShowWarehouse", 13);
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("PoliceOrderWarehouse", 13);
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 95:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenNumberPlate");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 96:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_CasinoBuyChips");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_CasinoSellChips");
        } else if (_0x1eaca9 == 3) {
          OpenBank(2);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 74:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ChangeName", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 97:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ChangeName", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_TransferMoneyToOrganization");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_BuyHomeInsuranceNPC");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_CallPoliceHere", 5);
        } else if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_RequestBuyFamilyLicense");
        } else if (_0x1eaca9 == 6) {
          EndConversationFinally();
        }
        break;
      case 98:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetExclusiveItem");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 99:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenDuelRoom", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 112:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenDuelRoom", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 100:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenExclusiveItemShop");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 101:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_CreateBuildingTeam");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_EditBuildingTeam");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_LeaveBuildingTeam");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_ShowBuildingConstructions");
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 75:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ExchangeOpen");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_OpenOffice");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 76:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SetNumberPlate");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_BuyCarInsurance");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_BuyCarInsuranceFamily");
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 180:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Tatto_Action", 3, 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Tatto_Action", 3, 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 186:
      case 187:
      case 188:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Tatto_Action", dialogstate - 182, 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Tatto_Action", dialogstate - 182, 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 196:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Tatto_Action", 7, 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Tatto_Action", 7, 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 181:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenPhonographyClone");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally(true);
          mp.events.callRemote("Server_RequestTakeCertificatePhoto");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 1523:
      case 1522:
      case 1521:
      case 1520:
      case 1519:
      case 1518:
      case 1517:
      case 1516:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetCowshedInfo", dialogstate - 1515);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 1515:
      case 1514:
      case 1513:
      case 1512:
      case 1511:
      case 1510:
      case 1509:
      case 1508:
      case 1507:
      case 1506:
      case 1505:
      case 1504:
      case 1503:
      case 1502:
      case 1501:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetAgrarInfo");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 1000:
        if (!at_quest_char || _0x1eaca9 == 2) {
          return EndConversationFinally();
        }
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("GetCharQuest", at_quest_char);
        }
        break;
      case 2000:
        if (_0x1eaca9 == 6) {
          return EndConversationFinally();
        }
        if (_0x1eaca9 == 5) {
          mp.events.callRemote("Server_GetHotelGift");
        } else if (_0x1eaca9 == 4) {
          mp.events.callRemote("Server_StartCleaningHotel");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
          mp.events.callRemote("Server_GetInfoAboutHotel");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("GetCharStoryQuest", 3);
        } else if (_0x1eaca9 == 1) {
          mp.events.callRemote("GetCharStoryQuest", 2);
        }
        break;
      case 555:
      case 556:
        if (_0x1eaca9 == 1) {
          EndConversationFinally(true);
          if (GlobalCheck() == 1) {
            return;
          }
          mp.events.callRemote("Server_Open1xBetMenu");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 205:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_JoinToSchoolMatch");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 206:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenSchoolEvent", 1);
        }
        if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_OpenSchoolEvent", 1);
        }
        if (_0x1eaca9 == 3) {
          SetGPSLocation(4509.91, -4507.991, 4.052, true);
          EndConversationFinally();
        }
        if (_0x1eaca9 == 4) {
          SetGPSLocation(-3284.652, 991.848, 3.939, true);
          EndConversationFinally();
        } else if (_0x1eaca9 == 5) {
          EndConversationFinally();
        }
        break;
      case 207:
      case 208:
      case 210:
      case 211:
      case 212:
      case 213:
      case 214:
      case 215:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenSchoolEvent", dialogstate - 205);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 216:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("storehouseSellPoint.startShowing");
        } else if (_0x1eaca9 == 2) {
          mp.events.call("ConversationSendBasicTalk", language["Как оплатить мой склад?"][curr_lang], language["Склад можно оплатить через телефон в онлайн-банкинге"][curr_lang]);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 217:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("storehouseAuction.showMenu");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 209:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("GetClosestPlace", 0);
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5000:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetNewbieScooter", 5);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5001:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetCandiesFromSecretNPC");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5002:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetRPTicketsFromFactory");
        }
        if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_StartRPFactoryCapture");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 5003:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetChristmasStoryline");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetChristmasProfession");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 5004:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SetChristmasProduction", 2);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetChristmasProduction");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_ChristmasProductionInfo", 2);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 5005:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SetChristmasProduction", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetChristmasProduction");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_ChristmasProductionInfo", 1);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 5006:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SetChristmasProduction", 4);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetChristmasProduction");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_ChristmasProductionInfo", 4);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 5007:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SetChristmasProduction", 3);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_GetChristmasProduction");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_ChristmasProductionInfo", 3);
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 5008:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetKeyFromSecretNPC");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5009:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetRepairQuest");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RepairNewYearTree");
        } else if (_0x1eaca9 == 3) {
          mp.events.callRemote("Server_CheckChristmasTreeQuest");
        } else if (_0x1eaca9 == 4) {
          EndConversationFinally();
        }
        break;
      case 5010:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ChristmasStartTamagotchi", tamagotchi_id);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_FinishTamagotchiQuest", tamagotchi_id);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 5011:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_FeedChristmasDeer");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5012:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenPetShop", 1);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5013:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenPetShop", 2);
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5014:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_ShowCaravanList");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5015:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_Summer2024SecretNPC");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5016:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_StartSportLesson");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5017:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_SelectCarForDump");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5018:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_GetInfoAboutSantaTask");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_FinishSantaTask");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 5019:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RecruitDealer");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
          mp.events.callRemote("Gang_Get_Money_Finish");
        }
        break;
      case 5020:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_StartCakeBuilding");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 5021:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RequestCleanMagicStonesFromClothes");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RequestChangeMagicStones");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 5022:
        EndConversationFinally();
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_OpenMainSummerDesign2025", true);
        }
        break;
      case 5023:
        if (bFebruary2026) {
          if (_0x1eaca9 == 1) {
            mp.events.callRemote("Server_RentWeddingLimousine");
          } else if (_0x1eaca9 == 2) {
            mp.events.callRemote("Server_RentWeddingDress");
          } else if (_0x1eaca9 == 3) {
            EndConversationFinally();
            mp.events.callRemote("Server_RequestShowValentine");
          } else if (_0x1eaca9 == 4) {
            EndConversationFinally();
          }
        } else if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RentWeddingLimousine");
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RentWeddingDress");
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
        break;
      case 5024:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RequestEmreBozkurtClothes");
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 6000:
        if (global.jail_time_in_jail > 0) {
          if (global.workAtPrisonJob) {
            if (_0x1eaca9 == 1) {
              mp.events.callRemote("Server_PrisonWardenFinishPrisonJob");
            }
          } else if (_0x1eaca9 == 1) {
            mp.events.callRemote("Server_PrisonWardenStartPrisonJob", "bathroom");
          } else if (_0x1eaca9 == 2) {
            mp.events.callRemote("Server_PrisonWardenStartPrisonJob", "ironing");
          } else if (_0x1eaca9 == 3) {
            mp.events.callRemote("Server_PrisonWardenStartPrisonJob", "cooking");
          } else if (_0x1eaca9 == 4) {
            mp.events.callRemote("Server_PrisonWardenStartPrisonJob", "moving_box");
          }
        } else if ([3, 4, 12].includes(parseInt(localplayer.getVariable("Member")))) {
          if (global.isPrisonWarden) {
            if (_0x1eaca9 == 1) {
              mp.events.callRemote("Server_PrisonWardenFinishWardenJob");
            }
          } else if (_0x1eaca9 == 1) {
            mp.events.callRemote("Server_PrisonWardenStartWardenJob");
          }
        }
        EndConversationFinally();
        break;
      case 6001:
      case 6002:
      case 6003:
      case 6004:
      case 6005:
      case 6006:
      case 6007:
      case 6008:
      case 6009:
      case 6010:
      case 6011:
      case 6012:
      case 6013:
      case 6014:
        {
          const _0x18b6a4 = dialogstate - 6000;
          const _0x2280d4 = FACTIONS_GARAGES_NPC_IDS[_0x18b6a4];
          if (!_0x2280d4) {
            return;
          }
          if ((Array.isArray(_0x2280d4) && _0x2280d4.includes(localplayer.getVariable("Member")) || localplayer.getVariable("Member") === _0x2280d4) && (_0x1eaca9 == 1 && mp.events.callRemote("Server_RequestSpawnFactionVehicle", dialogstate, _0x18b6a4), _0x1eaca9 == 2 && !global.FACTIONS_GANG_IDS.includes(localplayer.getVariable("Member")))) {
            return mp.events.callRemote("Server_RequestRandomNumberPlateFactionVehicle");
          }
          EndConversationFinally();
          break;
        }
      case 6020:
        if (!bChristmas2025) {
          return EndConversationFinally();
        }
        if (_0x1eaca9 == 1) {
          if (localplayer.getVariable("onRollers")) {
            mp.events.callRemote("Server_DisableRollers");
          } else {
            if (GlobalCheck() == 1) {
              EndConversationFinally();
            }
            mp.events.callRemote("Server_EnableRollers");
          }
        }
        EndConversationFinally();
        break;
      case 6021:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RequestChristmasTrucker2025");
          EndConversationFinally();
        } else if (_0x1eaca9 == 2) {
          EndConversationFinally();
        }
        break;
      case 6023:
        if (_0x1eaca9 == 1) {
          mp.events.callRemote("Server_RequestExchange", 1);
        } else if (_0x1eaca9 == 2) {
          mp.events.callRemote("Server_RequestExchange", 2);
        } else if (_0x1eaca9 == 3) {
          EndConversationFinally();
        }
    }
  }
});