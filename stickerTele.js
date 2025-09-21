export default function handler(req, res) {
  const query = req.query.q || ""; // Get search query from ?q=

  // Full sticker dataset
  const stickerData = [
    {
      "id": "stickerset-p2172284367339097116_by_prstickers_bot",
      "title": "BABY BABY",
      "stickers": [
        "https://cdn2.combot.org/p2172284367339097116_by_prstickers_bot/webp/0xf09f9880.webp",
        "https://cdn2.combot.org/p2172284367339097116_by_prstickers_bot/webp/1xf09f9880.webp",
        "https://cdn2.combot.org/p2172284367339097116_by_prstickers_bot/webp/2xf09f9880.webp",
        "https://cdn2.combot.org/p2172284367339097116_by_prstickers_bot/webp/3xf09f9880.webp",
        "https://cdn2.combot.org/p2172284367339097116_by_prstickers_bot/webp/4xf09f9880.webp",
        "https://cdn2.combot.org/p2172284367339097116_by_prstickers_bot/webp/5xf09f9880.webp",
        "https://cdn2.combot.org/p2172284367339097116_by_prstickers_bot/webp/6xf09f9880.webp",
        "https://cdn2.combot.org/p2172284367339097116_by_prstickers_bot/webp/7xf09f9880.webp",
        "https://cdn2.combot.org/p2172284367339097116_by_prstickers_bot/webp/8xf09f9880.webp",
        "https://cdn2.combot.org/p2172284367339097116_by_prstickers_bot/webp/9xf09f9880.webp",
        "https://cdn2.combot.org/p2172284367339097116_by_prstickers_bot/webp/10xf09f9880.webp",
        "https://cdn2.combot.org/p2172284367339097116_by_prstickers_bot/webp/11xf09f9880.webp"
      ],
      "telegramLink": "https://t.me/addstickers/p2172284367339097116_by_prstickers_bot"
    },
    {
      "id": "stickerset-naabby",
      "title": "baby baby",
      "stickers": [
        "https://cdn2.combot.org/naabby/webp/0xf09fa5ba.webp",
        "https://cdn2.combot.org/naabby/webp/1xf09f98ad.webp",
        "https://cdn2.combot.org/naabby/webp/2xf09fa5b0.webp",
        "https://cdn2.combot.org/naabby/webp/3xf09f98a3.webp",
        "https://cdn2.combot.org/naabby/webp/4xf09f988c.webp",
        "https://cdn2.combot.org/naabby/webp/5xf09f98a1.webp",
        "https://cdn2.combot.org/naabby/webp/6xf09fa4a4.webp",
        "https://cdn2.combot.org/naabby/webp/7xf09f98b3.webp",
        "https://cdn2.combot.org/naabby/webp/8xe299a5efb88f.webp",
        "https://cdn2.combot.org/naabby/webp/9xf09f98a5.webp",
        "https://cdn2.combot.org/naabby/webp/10xf09fa4a1.webp",
        "https://cdn2.combot.org/naabby/webp/11xf09f989e.webp",
        "https://cdn2.combot.org/naabby/webp/12xf09fa4a0.webp",
        "https://cdn2.combot.org/naabby/webp/13xf09fa4a0.webp",
        "https://cdn2.combot.org/naabby/webp/14xf09f9888.webp",
        "https://cdn2.combot.org/naabby/webp/15xf09fa4a2.webp",
        "https://cdn2.combot.org/naabby/webp/16xf09f98b0.webp",
        "https://cdn2.combot.org/naabby/webp/17xf09f918e.webp",
        "https://cdn2.combot.org/naabby/webp/18xf09f98a0.webp",
        "https://cdn2.combot.org/naabby/webp/19xf09f9295.webp"
      ],
      "telegramLink": "https://t.me/addstickers/naabby"
    },
    {
      "id": "stickerset-baby_baby5",
      "title": "Baby baby",
      "stickers": [
        "https://cdn2.combot.org/baby_baby5/webp/0xf09f918d.webp",
        "https://cdn2.combot.org/baby_baby5/webp/1xf09fa4b2.webp",
        "https://cdn2.combot.org/baby_baby5/webp/2xf09f918d.webp",
        "https://cdn2.combot.org/baby_baby5/webp/3xf09f918d.webp",
        "https://cdn2.combot.org/baby_baby5/webp/4xf09f918d.webp",
        "https://cdn2.combot.org/baby_baby5/webp/5xf09f918d.webp",
        "https://cdn2.combot.org/baby_baby5/webp/6xf09fa4b2.webp",
        "https://cdn2.combot.org/baby_baby5/webp/7xf09fa4b2.webp",
        "https://cdn2.combot.org/baby_baby5/webp/8xf09f9193.webp",
        "https://cdn2.combot.org/baby_baby5/webp/9xf09f918d.webp",
        "https://cdn2.combot.org/baby_baby5/webp/10xf09f96bc.webp",
        "https://cdn2.combot.org/baby_baby5/webp/11xf09faa91.webp",
        "https://cdn2.combot.org/baby_baby5/webp/12xf09f918d.webp",
        "https://cdn2.combot.org/baby_baby5/webp/13xf09f8e88.webp",
        "https://cdn2.combot.org/baby_baby5/webp/14xf09f918d.webp",
        "https://cdn2.combot.org/baby_baby5/webp/15xf09fa5b0.webp",
        "https://cdn2.combot.org/baby_baby5/webp/16xf09f96bc.webp"
      ],
      "telegramLink": "https://t.me/addstickers/baby_baby5"
    },
    {
      "id": "stickerset-maybebaby_by_demybot",
      "title": "Baby?!",
      "stickers": [
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/0xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/1xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/2xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/3xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/4xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/5xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/6xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/7xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/8xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/9xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/10xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/11xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/12xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/13xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/14xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/15xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/16xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/17xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/18xf09f8dba.webp",
        "https://cdn2.combot.org/maybebaby_by_demybot/webp/19xf09f8dba.webp"
      ],
      "telegramLink": "https://t.me/addstickers/maybebaby_by_demybot"
    },
    {
      "id": "stickerset-myriasticker",
      "title": "Baby",
      "stickers": [
