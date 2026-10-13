// Painel v11 — "service worker" mínimo, só para o navegador oferecer "Instalar app" / "Abrir no app".
// NÃO guarda nada em cache: toda abertura busca o site e os dados na hora (nunca mostra versão velha).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => { /* deixa o navegador buscar normalmente na rede */ });
