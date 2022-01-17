import modal from './modules/modal';
import sliderCastomer from './modules/sliderCastomer';

import servicesModal from './modules/servicesModal';
import timer from './modules/timer';
import sertModal from './modules/sertModal';
import smoothScroll from './modules/smoothScroll';
import sendForm from './modules/sendForm';
import formValid from './modules/formValid';
import mask from './modules/mask';
import calc from './modules/calc';


modal();
sliderCastomer();

servicesModal();
timer('22 january 2022');
sertModal();
smoothScroll();
formValid();
sendForm({
  someElem: [
    {
      type: 'input',
      id: 'calc-total'
    }
  ]
});
mask();
calc(100);