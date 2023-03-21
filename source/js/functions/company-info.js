const button = document.querySelector('[data-button="company"]');
const text = [...document.querySelectorAll('[data-text="company"]')];

const openCompanyInfo = () => {
  text.map((item) => {
    if (item.dataset.hide === 'desktop') {
      item.classList.contains('company__text-item--hide') ? item.classList.remove('company__text-item--hide') : item.classList.add('company__text-item--hide');
    } else if (item.dataset.hide === 'mobile') {
      item.classList.contains('company__text-item--hide-mobile') ? item.classList.remove('company__text-item--hide-mobile') : item.classList.add('company__text-item--hide-mobile') ;
    }

    if (button.textContent === 'Подробнее') {
      button.innerText = 'Свернуть';
    } else {
      button.innerText = 'Подробнее';
    }
  });
};

const onCompanyInfo = () => {
  button.addEventListener('click', openCompanyInfo);
};

export {onCompanyInfo};
