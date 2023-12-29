import '../utils/scroll-lock';
import '../utils/focus-lock';

const toggleNavigationMenu = () => {
  const body = document.body;
  const mainNavigation = document.querySelector('[data-menu="main-navigation"]');
  const navigationButton = document.querySelectorAll('[data-menu="menu-button"]');
  const navigationLogotype = document.querySelector('[data-menu="navigation-logo"]');
  const navigationMenuList = document.querySelectorAll('[data-menu="navigation-menu"]');
  const navigationPhone = document.querySelector('[data-menu="navigation-phone"]');


  navigationButton.forEach((button) => {
    button.addEventListener('click', () => {
      mainNavigation.classList.toggle('navigation--is-closed');
      mainNavigation.classList.toggle('navigation--is-opened');
      navigationLogotype.classList.toggle('logotype--is-closed');
      navigationLogotype.classList.toggle('logotype--is-opened');
      navigationPhone.classList.toggle('phone--is-closed');
      navigationPhone.classList.toggle('phone--is-opened');
      body.classList.toggle('overlay');
      navigationMenuList.forEach((navigationList) => {
        const menuClosed = navigationList.classList.contains('navigation__list--is-closed');
        const closedButtonMenu = document.querySelector('[data-menu="is-closed"]');
        const openedButtonMenu = document.querySelector('[data-menu="is-opened"]');

        if (menuClosed) {
          navigationList.classList.remove('navigation__list--is-closed');
          navigationList.style.display = 'flex';
          closedButtonMenu.style.display = 'none';
          openedButtonMenu.style.display = 'block';
          window.scrollLock.disableScrolling();
          window.focusLock.lock('[data-menu="main-navigation"]', false);

        } else {
          navigationList.classList.add('navigation__list--is-closed');
          navigationList.style.display = 'none';
          closedButtonMenu.style.display = 'block';
          openedButtonMenu.style.display = 'none';
          window.scrollLock.enableScrolling();
          window.focusLock.unlock();
        }
      });
    });
  });
};


export {toggleNavigationMenu};
