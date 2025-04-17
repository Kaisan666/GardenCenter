window.addEventListener('load', () => {
  const itemMoreContainer = document.querySelector('#jsItemMoreContainer');

  const checkOffsetItem = (items, item) => {
    const itemsMore = document.querySelector('#jsItemsMore');
    const itemsContainer = itemsMore.querySelector('#jsItemsContainer');
    // const offsetTop = itemMoreContainer.offsetTop;
    

    // if (itemMoreContainer.clientHeight > 40) {
    if (itemMoreContainer.scrollHeight > 40) {
      const newLink = items[items.length - 1].cloneNode(true);

      newLink.classList = 'custom-tooltip__item';

      itemsContainer?.prepend(newLink);

      items[items.length - 1].remove();

      items.pop();
      checkOffsetItem(items, item);
    }
  };

  const checkPageLinkRemove = (items) => {
    const itemsMore = document.querySelector('#jsItemsMore');
    const itemsContainer = itemsMore.querySelector('#jsItemsContainer');

    if (itemsContainer.firstChild) {
      const newLink = itemsContainer.firstChild.cloneNode(true);

      newLink.classList = 'header__page page item-more';

      itemMoreContainer.appendChild(newLink);

      items.push(newLink);
      // if (itemMoreContainer.clientHeight > 40) {
      if (itemMoreContainer.scrollHeight > 40) {
        items[items.length - 1].remove();
        items.pop();
      } else {
        itemsContainer.firstChild.remove();
      }
    }
    if (items && items.length > 1) {
      items.forEach((item) => {
        checkOffsetItem(items, item);
      });
    }
  };

  if (itemMoreContainer) {
    let itemMore = [...itemMoreContainer.querySelectorAll('.item-more')];

    checkPageLinkRemove(itemMore);

    window.addEventListener('resize', () => {
      checkPageLinkRemove(itemMore);
    });
  }





  const itemMoreContainerFixed = document.querySelector('#jsItemMoreContainerFixed');

  const checkOffsetItemFixed = (items, item) => {
    const itemsMore = document.querySelector('#jsItemsMoreFixed');
    const itemsContainer = itemsMore.querySelector('#jsItemsContainerFixed');
    // const offsetTop = itemMoreContainer.offsetTop;

    // if (itemMoreContainerFixed.clientHeight > 40) {
    if (itemMoreContainerFixed.scrollHeight > 40) {
      const newLink = items[items.length - 1].cloneNode(true);

      newLink.classList = 'custom-tooltip__item';

      itemsContainer?.prepend(newLink);

      items[items.length - 1].remove();

      items.pop();
      checkOffsetItemFixed(items, item);
    }
  };

  const checkPageLinkRemoveFixed = (items) => {
    const itemsMore = document.querySelector('#jsItemsMoreFixed');
    const itemsContainer = itemsMore.querySelector('#jsItemsContainerFixed');

    if (itemsContainer.firstChild) {
      const newLink = itemsContainer.firstChild.cloneNode(true);

      newLink.classList = 'header__page page item-more';

      itemMoreContainerFixed.appendChild(newLink);

      items.push(newLink);
      // if (itemMoreContainerFixed.clientHeight > 40) {
      if (itemMoreContainerFixed.scrollHeight > 40) {
        items[items.length - 1].remove();
        items.pop();
      } else {
        itemsContainer.firstChild.remove();
      }
    }
    if (items && items.length > 1) {
      items.forEach((item) => {
        checkOffsetItemFixed(items, item);
      });
    }
  };

  if (itemMoreContainerFixed) {
    let itemMore = [...itemMoreContainerFixed.querySelectorAll('.item-more')];

    checkPageLinkRemoveFixed(itemMore);

    window.addEventListener('resize', () => {
      checkPageLinkRemoveFixed(itemMore);
    });
  }
});
