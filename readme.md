# Simple TMI Emote Parse

Whis this package, you can transform the Twitch plain-text emote representation to html with images using the `emote` object provided inside TMI.js messages.

The system escapes all html-related charactes ('<','>', etc...) before adding the emote images to prevent XSS injections coming from twitch.


## Installation

    npm i --save simple-tmi-emotes


## Usage

```ts
    import { EmoteOptions, parse } from 'simple-tmi-emotes'

    const msg = 'loeyaFLOWER loeyaFLOWER loeyaH loeyaRAID loeyaRAID loe1 loe1 loeyaHAPPY loeyaHAPPY loeyaHAPPY loeyaYAY'
    const emotes = { 302718264: ['51-54', '56-59'], 305147530: ['61-70', '72-81', '83-92'], 305147589: ['31-39', '41-49'], 305147697: ['94-101'], 305698546: ['24-29'], 305698571: ['0-10', '12-22'] }

    const options: EmoteOptions = {
    format: 'default',
    themeMode: 'light',
    scale: '1.0'
    }

    const html = parse(msg, emotes, options)

    console.log(html)

```

## Options

When calling parse, you can specify different options for the avatar representation:


| Emote Option | Description | Valid Values |
| --- | --- | --- |
| `format` | The format of the image to get. For example, a static PNG or animated GIF. Use `default` if you want the server to return an animated GIF if it exists, otherwise, a static PNG. | `static`, `animated`, `default` |
| `theme_mode` | The background theme of the emote. | `light`, `dark` |
| `scale` | The size of the emote. | `1.0` (small), `2.0` (medium), `3.0` (large) |