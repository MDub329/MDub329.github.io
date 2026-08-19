(function () {
  var placeholder = document.querySelector('[data-shared-navbar]');

  if (!placeholder) {
    return;
  }

  var root = placeholder.getAttribute('data-site-root') || '';
  var activePage = placeholder.getAttribute('data-active-page');
  var headerClass = placeholder.getAttribute('data-header-class') || '';

  fetch(root + 'navbar.html')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Unable to load navbar');
      }

      return response.text();
    })
    .then(function (navbar) {
      var element = document.createElement('div');
      element.innerHTML = navbar
        .replace(/@@ROOT@@/g, root)
        .replace('@@HEADER_CLASS@@', headerClass);

      var activeItem = element.querySelector('[data-page="' + activePage + '"]');
      if (activeItem) {
        activeItem.classList.add('active');
      }

      placeholder.replaceWith(element.firstElementChild);
    })
    .catch(function (error) {
      console.error(error);
    });
})();