import modal from './modules/modal';
import servicesModal from './modules/servicesModal';
import servicesSlider from './modules/servicesSlider';
import timer from './modules/timer';
import sertModal from './modules/sertModal';
import smoothScroll from './modules/smoothScroll';
import sendForm from './modules/sendForm';
import formValid from './modules/formValid';
import mask from './modules/mask';
import calc from './modules/calc';
import clientSlider from './modules/clientSlider';

modal();
servicesModal();
servicesSlider();
timer('22 january 2022');
sertModal();
smoothScroll();
formValid();
sendForm({
  someElem: [
    {
      type: 'input',
      id: 'calc-total',
    },
  ],
});
mask();
calc(100);
clientSlider();


