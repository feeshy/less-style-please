// service-worker.js

// 1. 设置缓存名称命名空间
workbox.core.setCacheNameDetails({
    prefix: 'less-style-please',
    suffix: 'v0.6.1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// 2. 接管页面控制权
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// 3. 预缓存规则
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// =========================================================================
// 4. 运行时全自动缓存路由（按第一个 sw 的高级策略重构）
// =========================================================================

// 【网页切片字体】使用 CacheFirst 策略（应用第二个 sw 的扩展名匹配规则）
workbox.routing.registerRoute(
    /\.(?:woff2|woff|ttf|eot)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'less-style-please-fonts-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 365 * 24 * 60 * 60, // 1 年
                maxEntries: 999
            })
        ]
    })
);

// 【图片与对象 SVG】使用 CacheFirst 策略（保留第二个 sw 的本地目录，融合第一个 sw 的 SVG 及 Image 请求判断）
workbox.routing.registerRoute(
    ({ request, url }) => request.destination === 'image' || /assets\/(img|background)/.test(url.pathname) || /\.(?:svg)$/i.test(url.pathname),
    new workbox.strategies.CacheFirst({
        cacheName: 'less-style-please-images-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 365 * 24 * 60 * 60, // 1 年
                maxEntries: 200
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [200]
            })
        ]
    })
);

// 【CSS & JS 核心资产】从原 NetworkFirst 升级为 Stale-While-Revalidate 策略，实现瞬间加载
workbox.routing.registerRoute(
    ({ request, url }) => request.destination === 'style' || request.destination === 'script' || /\.(?:js|css)$/.test(url.pathname),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'less-style-please-assets-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 365 * 24 * 60 * 60, // 1 年
                maxEntries: 100
            })
        ]
    })
);

// 【网页 HTML 页面】使用 Network First 策略，确保离线可用且内容最新
workbox.routing.registerRoute(
    ({ request, url }) => request.mode === 'navigate' || /\.(?:html)$/.test(url.pathname),
    new workbox.strategies.NetworkFirst({
        cacheName: 'less-style-please-pages-cache',
        networkTimeoutSeconds: 2, // 2秒网络未响应则降级调用缓存
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 24 * 60 * 60, // 60 天
                maxEntries: 200
            })
        ]
    })
);

// =========================================================================
// 5. 清理不在白名单的缓存
// =========================================================================
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => {

                        const validRuntimeCaches = [
                            'less-style-please-fonts-cache',
                            'less-style-please-images-cache',
                            'less-style-please-assets-cache',
                            'less-style-please-pages-cache'
                        ];
                        if (validRuntimeCaches.includes(name)) {
                            return false;
                        }

                        if (name.includes('less-style-please-precache')) {
                            return false;
                        }

                        return true;

                    })
                    .map((name) => caches.delete(name))
            );
        })
    );
});