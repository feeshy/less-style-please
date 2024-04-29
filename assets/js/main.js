// register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}

// disable font synthesis on Safari
if (navigator.userAgent.includes('Mac OS X')) {
    document.body.style.fontSynthesis = 'none';
}

// table wrapper

function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}
for (const el of document.getElementsByTagName('table')) {
    const wrapper = document.createElement('section');
    wrapper.style.overflowX = 'auto';
    wrap(el, wrapper);
}