const express = require('express');

const app = express();

app.set('view engine', 'ejs')

const glyphs = {
  a: "aå@аàáạąἀἁἂἃἄἅἆἇὰάᾀᾁᾂᾃᾄᾅᾆᾇɑα⍺𝐚𝑎𝒂𝒶𝓪𝔞𝕒𝖆𝖺𝗮𝘢𝙖𝚊𝛂𝛼𝜶𝝰𝞪ａA@4ἈἉἊἋἌἍἎἏÁ",
  b: "bƄЬᏏᑲᖯ𝐛𝑏𝒃𝒷𝓫𝔟𝕓𝖇𝖻𝗯𝘣𝙗𝚋Bß",
  c: "cсƈċçϲᴄⅽⲥꮯ𐐽𝐜𝑐𝒄𝒸𝓬𝔠𝕔𝖈𝖼𝗰𝘤𝙘𝚌ｃCÇ",
  d: "∂dԁɗᏧᑯⅆⅾꓒ𝐝𝑑𝒅𝒹𝓭𝕕𝖽𝗱𝘥𝙙𝚍D𝔡𝖉",
  e: "eеẹėéèҽ℮ℯⅇ3ἐἑἒἓἔἕἘἙἚἛἜἝὲέE",
  f: "fſẝF",
  g: "gġ9ƍɡցᶃℊ𝐠𝑔𝒈𝓰𝔤𝕘𝖌𝗀𝗴𝘨𝙜𝚐ｇ9G",
  h: "hһհᏂℎ𝐡𝒉𝒽𝓱𝔥𝕙𝖍𝗁𝗵𝘩𝙝𝚑ｈHἨἩἪἫἬἭἮἯ",
  i: "iî¡!1іíìïἰἱἲἳἴἵἶἷὶίıɩɪιӏᎥℹⅈⅰ⍳ꭵ𑣃𝐢𝑖𝒊𝒾𝓲𝔦𝕚𝖎𝗂𝗶𝘪𝙞𝚒ｉI¡!1ἸἹἺἻἼἽἾἿ",
  j: "jјʝϳⅉ𝐣𝑗𝒋𝒿𝓳𝔧𝕛𝖏𝗃𝗷𝘫𝙟𝚓ｊJ",
  k: "k𝐤𝑘𝒌𝓀𝓴𝕜𝖐𝗄𝗸𝘬𝙠𝚔K",
  l: "lӏḷ1|ƖǀІ׀וןا١۱ߊᛁℓⅼ∣⏽Ⲓⵏꓲ𐊊𐌉𐌠𖼨𝐥𝑙𝒍𝓁𝓵𝔩𝕀𝕝𝗅𝗹𝘭𝙡𝚕𝟏𝟙𝟣𝟭𝟷1L",
  m: "mⅿ𑜀𑣣𝐦𝑚𝒎𝓂𝓶𝔪𝕞𝖒𝗆𝗺𝘮𝙢𝚖M",
  n: "nոἠἡἢἣἤἥἦἧὴήռ𝐧𝑛𝒏𝓃𝓷𝔫𝕟𝖓𝗇𝗻𝘯𝙣𝚗N",
  o: "0oøоοօȯọỏơöóòὀὁὂὃὄὅὸό०੦૦௦౦ംഠ൦ං๐໐ဝ၀ჿᴏᴑℴⲟ𐐬𐓪𝐨𝑜𝒐𝓸𝔬𝕠𝖔𝗈𝗼𝘰𝙤𝚘𝛐𝛔𝜊𝜎𝝄𝝈𝝾𝞂𝞸O0ὈὉὊὋὌὍ೦",
  p: "p𝔭𝕡𝖕𝗉𝗽𝘱𝙥𝚙𝛒𝜌𝜚𝝆𝝔𝞀𝞺Pр⍴ⲣ𝐩𝑝𝒑𝓅𝓹Pｐ",
  q: "qզԛգ𝐪𝑞𝒒𝓆𝓺𝔮𝕢𝖖𝗊𝗾𝘲𝙦𝚚Q",
  r: "rгᴦⲅꮁ𝐫𝑟𝒓𝓇𝓻𝔯𝕣𝖗𝗋𝗿𝘳𝙧𝚛R",
  s: "s$ʂƽѕꜱꮪ𐑈𑣁𝐬𝑠𝒔𝓈𝓼𝔰𝕤𝖘𝗌𝘀𝘴𝙨𝚜ｓS5$",
  t: "t†𝐭𝑡𝒕𝓉𝓽𝔱𝕥𝖙𝗍𝘁𝘵𝙩𝚝T",
  u: "uυսüúùʋᴜ𐓶𑣘𝐮𝑢𝒖𝓊𝓾𝔲𝕦𝖚𝗎𝘂𝘶𝙪𝚞𝛖𝜐𝝊𝞄𝞾U𝙐",
  v: "vνѵὐὑὒὓὔὕὖὗὺύטᴠⅴ∨⋁ꮩ𑜆𑣀𝐯𝒗𝓋𝓿𝕧𝗏𝘃𝘷𝙫𝚟𝛎𝜈𝝂𝝼𝞶ｖV",
  w: "wὠὡὢὣὤὥὦὧὼώɯѡաᴡꮃ𑜊𑜎𑜏𝐰𝑤𝒘𝓌𝔀𝕨𝗐𝘄𝘸𝙬𝚠ԝW",
  x: "xхҳ×ᕁᕽ᙮ⅹ⤫⤬⨯𝐱𝑥𝒙𝓍𝔁𝕩𝗑𝘅𝘹𝙭𝚡ｘ⤫⤬X",
  y: "yуýʏγүყᶌỿ𝐲𝑦𝒚𝓎𝔂𝕪𝗒𝘆𝘺𝙮𝚢𝛄𝛾𝜸𝝲𝞬ｙYὙὛὝὟ",
  z: "zʐżᴢꮓ𝐳𝑧𝒛𝓏𝔃𝕫𝗓𝘇𝘻𝙯𝚣Z",
};

app.use((req, res, next) => {
  // We do a miniscule amount of trolling - this is also an inside joke, you shouldn't be affected by this
  const ip = req.get("CF-Connecting-IP") ||
             req.get("X-Forwarded-For")

  console.log(ip, req.url)

  if (["184.105.99.36"].includes(ip) && decodeURIComponent(req.url).toLowerCase().split('').map(letter => {
    return Object.keys(glyphs).find(glyph => glyphs[glyph].includes(letter)) || letter
  }).join('').includes("python")) {
    return res.render('index', {
      req,
      siteName: "um actually 🤓",
      title: "javascript is much better",
      description: "than your weird language",
      image: undefined
    })
  } else {
    next();
  }
})

app.get('/', (req, res) => {
  res.render('index', {
    req,
    siteName: req.query.siteName?.split('+').join(' ') || "Oneboxer by Haroon",
    title: req.query.title?.split('+').join(' ') || "Oneboxer",
    description: req.query.description?.split('+').join(' ') || "Create simple Discourse oneboxes (and Discord embeds) with this tool!",
    image: undefined
  })
});

app.listen(3000, () => {
  console.log('server started');
});
