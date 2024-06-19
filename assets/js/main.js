// register service worker

if (navigator.serviceWorker) {
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
  wrapper.style.filter = 'drop-shadow(0 0 2px #0002)';
  wrap(el, wrapper);
}

// copyright disclaimer

document.addEventListener('copy', function (event) {
  // get copied text
  const selectedText = window.getSelection().toString();
  if (selectedText.length > 50) {
    // get copied rich text
    const tempElement = document.createElement('div');
    tempElement.appendChild(
      window.getSelection().getRangeAt(0).cloneContents()
    );
    const selectedRichText = tempElement.innerHTML;
    tempElement.remove();
    //
    const canonicalURL = document.querySelector('link[rel="canonical"]').href;
    const copyrightFooter = document.querySelector('footer#copyright');
    if (copyrightFooter) {
      // get copyright text
      const copyrightText = copyrightFooter.innerText;
      // get copyright rich text
      const tempElement = document.createElement('p');
      tempElement.innerHTML = copyrightFooter.innerHTML;
      const copyrightRichText = tempElement.outerHTML;
      tempElement.remove();
      // set clipboard
      event.clipboardData.setData('text/html', selectedRichText + '\n' + copyrightRichText);
      event.clipboardData.setData('text/plain', selectedText + '\n' + canonicalURL + '\n' + copyrightText);
    } else {
      // set clipboard
      event.clipboardData.setData('text/html', selectedRichText + '\n' + canonicalURL);
      event.clipboardData.setData('text/plain', selectedText + '\n' + canonicalURL);
    }
    event.preventDefault();
  }
})