# Получение баланса API
Чтобы получить баланс ключа API, обратитесь GET запросом на точку `/getbalance` с ключом в заголовке.  
Пример на Python:
```py
import requests

headers = {
    "key": "Ваш-Ключ-API"
}

response = requests.get('https://api.mwgpt.pro/getbalance', headers=headers)
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
`{"status": True, "balance": float}`
Ответ 403 (Неверный ключ):
`{"status": False, "error": "key not valid"}`