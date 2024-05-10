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

// copyright disclaimer

document.addEventListener('copy', function(event) {
  const selectedLength = window.getSelection().toString().length;
  if (selectedLength > 50) {
    const tempElement = document.createElement('div');
    tempElement.appendChild(
      window.getSelection().getRangeAt(0).cloneContents()
    );
    const selectedText = tempElement.innerHTML;
    tempElement.remove();
    const copyrightFooter = document.querySelector('footer#copyright');
    if (copyrightFooter) {
      const tempElement = document.createElement('p');
      tempElement.innerHTML = copyrightFooter.innerHTML;
      const copyrightText = tempElement.outerHTML;
      tempElement.remove();
      event.clipboardData.setData('text/html', selectedText + '\n' + copyrightText);
    } else {
      const canonicalURL = document.querySelector('link[rel="canonical"]').href;
      event.clipboardData.setData('text/html', selectedText + '\n' + canonicalURL);
    }
    event.preventDefault();
  }
})