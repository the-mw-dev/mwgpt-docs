# Создание запроса через API
Для создания запроса к AI, обратитесь методом POST к точке `/v1/msg`, в заголовке отправив ключ, в теле промпт.  
Пример на Python:
```py
import requests

headers = {
    "key": "Ваш-Ключ-API"
}

data = {
    "message": "Привет!"
}

response = requests.post('https://api.mwgpt.pro/v1/msg', headers=headers, json=data)

print(response.json())
```
:::tip
Не забудьте установить библиотеку requests:
```bash
pip install requests
```
Вы также можете использовать другие библиотеки, например `aiohttp` для асинхронной обработки.
:::
Ответ 200 OK:
`return {"status": True, "result": "приветт!!!"}`