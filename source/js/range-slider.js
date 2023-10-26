const rangeSliderElement = document.querySelector('.range__scale');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const priceInputs = [minPriceInput, maxPriceInput];

noUiSlider.create(rangeSliderElement, {
  range: {
    min: [0],
    max: [1000],
  },
  start: [0, 900],
  step: 1,
  connect: true,
});

rangeSliderElement.noUiSlider.on('update', (values, handle) => {
  priceInputs[handle].value = Math.round(values[handle]);
});

const setRangeSlider = (numberOfInput, value) => {
  const valueArray = [null, null];
  valueArray[numberOfInput] = value;

  rangeSliderElement.noUiSlider.set(valueArray);
};

priceInputs.forEach((inputElement, index) => {
  inputElement.addEventListener('change', (evt) => {
    setRangeSlider(index, evt.currentTarget.value);
  });
});
