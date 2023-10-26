/* в этот файл добавляет скрипты*/

const navigation = document.querySelector('.navigation');
const navigationToggle = document.querySelector('.navigation__toggle');

const onMainNavToggleClick = function () {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
  } else {
    navigation.classList.remove('navigation--opened');
    navigation.classList.add('navigation--closed');
  }
};

navigationToggle.addEventListener('click', onMainNavToggleClick);
