# Описание

Этот репозиторий содержит код для NestJS приложения, в котором реализован API, с помощью которого  можно определить местоположение по ip-адресу.

## Установка

Перед началом использования убедитесь, что у вас установлен Node.js и npm.

1. Клонируйте репозиторий на свой локальный компьютер:

```bash
git clone github.com/Dmity627/Location-API
```

2. Установите зависимости:

```bash
npm install
```
## Запуск

1. Для запуска development версии:

```bash
npm run start:dev
```

1. Для запуска production версии:

```bash
npm run start
```


## Использование

1. Имеется endpoint http://<app_ip_port>/coordinate/?ip=<ip>:

Который принимает ip в query строке и дает ответ в виде:

```bash
{
  lat: number;
  lng: number;
  country: string;
  city: string;
}
```

## Обработка ошибок

В случае ошибки при выполнении запроса, будет выброшено исключение с описанием ошибки.
