// Arturo Riccobono - Tracking spese v72 (partenza pulita)
const CACHE_NAME = 'arturo-tracking-spese-v72-clean-start';
const INDEX_URL = './index.html';
const APP_SHELL = [
  './index.html', './manifest.json', './sw.js', './README.txt',
  './icona-app-1024.png', './apple-touch-icon.png',
  './apple-touch-icon-precomposed.png', './icons/icon-1024.png',
  './icons/icon-512.png', './icons/icon-192.png',
  './icons/apple-touch-icon.png','./icons/favicon-32.png','./icons/favicon-16.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // L'HTML principale è essenziale per il primo avvio offline.
    await cache.add(new Request(INDEX_URL,{cache:'reload'}));
    await Promise.allSettled(APP_SHELL.filter(x=>x!==INDEX_URL).map(async url => {
      try { await cache.add(new Request(url,{cache:'reload'})); } catch (_) {}
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(n =>
      (n.startsWith('arturo-tracking-spese-') || n.startsWith('app-tracking-spese-')) && n !== CACHE_NAME
    ).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

async function fetchNavigation(request) {
  const cache = await caches.open(CACHE_NAME);
  // Online: usa subito il nuovo HTML, senza bloccarlo su una versione precedente.
  try {
    const fresh = await fetch(new Request(request,{cache:'no-store'}));
    if (fresh && fresh.ok) {
      await cache.put(INDEX_URL, fresh.clone());
      return fresh;
    }
  } catch (_) {}
  return await cache.match(INDEX_URL) ||
    new Response('<!doctype html><html lang="it"><meta charset="utf-8"><title>Tracking spese</title><body><h1>Connessione necessaria</h1><p>Apri l’app online una volta per attivare il funzionamento offline.</p></body></html>',
      {status:503, headers:{'Content-Type':'text/html; charset=utf-8'}});
}

async function fetchAsset(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request,{ignoreSearch:true});
  if (cached) return cached;
  try {
    const fresh = await fetch(request);
    if (fresh && fresh.ok) await cache.put(request, fresh.clone());
    return fresh;
  } catch (_) { return Response.error(); }
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(event.request.mode === 'navigate' ?
    fetchNavigation(event.request) : fetchAsset(event.request));
});
