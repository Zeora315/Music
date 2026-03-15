var encodedLocalMusic = localMusic.map(item => ({
  name: item.name,
  artist: item.artist,
  url: encodeNonAscii(item.url),
  cover: encodeNonAscii(item.cover),
  lrc: item.lrc ? encodeNonAscii(item.lrc) : null
}));

document.getElementById('heoMusic-page').classList.add('localMusic');

function encodeNonAscii(str) {
  if (!str) return null;
  return str.replace(/[^\x00-\x7F]/g, function(c) {
    return encodeURIComponent(c);
  });
}

const ap = new APlayer({
  container: document.getElementById('heoMusic-page'),
  lrcType: 3,
  audio: encodedLocalMusic,
  listFolded: window.innerWidth < 768 ? true : false
});

heo.setupMediaSessionHandlers(ap);
