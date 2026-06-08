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
  wrapper.classList.add('table-wrapper');
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

  // Table of contents behavior

  (function () {
    var toolbar = document.getElementById('toc-toolbar');
    if (!toolbar) return;

    var toggleBtn = document.getElementById('toc-toggle');
    var panel = document.getElementById('toc-panel');
    var mainElement = document.querySelector('main.page-content');

    if (!toggleBtn || !panel) return;

    function isWideScreen() {
      return window.innerWidth > 1440;
    }

    function updateState() {
      if (isWideScreen()) {
        toggleBtn.setAttribute('aria-expanded', 'true');
        panel.setAttribute('aria-hidden', 'false');
      } else {
        toggleBtn.setAttribute('aria-expanded', 'false');
        panel.setAttribute('aria-hidden', 'true');
      }
    }

    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!expanded));
      panel.setAttribute('aria-hidden', String(expanded));
    });

    function autoHide() {
      if (isWideScreen()) return;
      var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (!expanded) return;
      toggleBtn.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
    }

    if (mainElement) {
      mainElement.addEventListener('click', autoHide);
      mainElement.addEventListener('touchstart', autoHide);
    }

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateState, 200);
    });

    updateState();
  })();