# shadcn/ui — вайбкодеру

Учебный гид по компонентам [shadcn/ui](https://ui.shadcn.com): живые демо и
короткие пояснения, чтобы вайбкодер понимал, какие бывают компоненты и как
попросить их у ИИ-ассистента — зная только название и бизнес-задачу.

**Живая демка:** https://app-117900122a91.vibecode.bitrix24.tech

**Видео-уроки** — создание сайта вайбкодером по шагам в Claude:

- Первые шаги: [RuTube](https://rutube.ru/video/6e21169231ae6895cb4d812097f6a234/) · [VK Видео](https://vkvideo.ru/video-238518064_456239025) · [YouTube](https://youtu.be/CJ7RvKborkE)
- Создаём дистрибутив, готовимся к деплою: [RuTube](https://rutube.ru/video/9f1d88bbc432726b243a22a9f0c316aa/) · [VK Видео](https://vkvideo.ru/video-238518064_456239026) · [YouTube](https://youtu.be/e-AdIIaYKjo)
- Как деплоить приложение на вайб-кодинг платформу Битрикс24: [RuTube](https://rutube.ru/video/0e7c64a2a5c3796879b42efebc0af6e5/) · [VK Видео](https://vkvideo.ru/video-238518064_456239027) · [YouTube](https://youtu.be/2q0yqnVcK5Q)
- React — добавляем к проекту Git, выгружаем на GitHub и деплоим изменения на вайбкод платформу Битрикс24: [RuTube](https://rutube.ru/video/03494f498fe1de24ca0f81622b2fa00d/) · [VK Видео](https://vkvideo.ru/video-238518064_456239028) · [YouTube](https://youtu.be/uZLjkTavoq4)
- React — деплоим в Галактику, добавляем адреса страниц и линтер: [RuTube](https://rutube.ru/video/ddc7129ed27c32e18c6ff566ff35f964/) · [VK Видео](https://vkvideo.ru/video-238518064_456239030) · [YouTube](https://youtu.be/TVpqk7BdDMU)
- React — добавляем автоматические браузерные тесты в Playwright, переходим на TypeScript: [RuTube](https://rutube.ru/video/fc8dfad7b7df27c1270756e8883bf23c/) · [VK Видео](https://vkvideo.ru/video-238518064_456239031) · [YouTube](https://youtu.be/VWQh1Elyhiw)
- React — внедряем SEO-оптимизацию, добавляем пререндер (SSG) с гидрацией на вайбкодинг платформе Битрикс24: [RuTube](https://rutube.ru/video/2bc65a2009f1b4640e4b90eeba93d1d3/) · [VK Видео](https://vkvideo.ru/video-238518064_456239033) · [YouTube](https://youtu.be/J3Kf5yO6tpA)

**Стек:** Vite · React · TypeScript · Tailwind CSS v4 · shadcn/ui

## Запуск

```bash
npm install
npm run dev
```

## Качество

Проект тщательно тестируется — на каждое изменение прогоняются:

- **ESLint** — линтер с типизированными правилами;
- **TypeScript** — строгая проверка типов (`tsc`);
- **Playwright** — **123 теста** в настоящем браузере: дымовые обходят все **52 маршрута** (лендинг, «О проекте» и 50 демок) и падают на любой ошибке в консоли, а браузерные — кликают, заполняют формы и проверяют поведение каждого компонента.

Всего в галерее **50 компонентов** на **50 демо-страницах**, разбитых на **12 категорий**.
