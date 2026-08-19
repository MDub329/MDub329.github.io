(function () {
  var placeholder = document.querySelector('[data-shared-footer]');

  if (!placeholder) {
    return;
  }

  var root = placeholder.getAttribute('data-site-root') || '';

  fetch(root + 'footer.html')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Unable to load footer');
      }

      return response.text();
    })
    .then(function (footer) {
      placeholder.outerHTML = footer.replace(/@@ROOT@@/g, root);
    })
    .catch(function (error) {
      console.error(error);
    });
})();