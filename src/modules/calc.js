import { animate } from './helpers';

const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.getElementById('calc-type');
  const calcMaterial = document.getElementById('calc-type-material');
  const calcSquare = document.getElementById('calc-input');
  const total = document.getElementById('calc-total');

  const countCalc = () => {
    let calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    let calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value;
    let calcSquareValue = calcSquare.value;

    let totalValue = 0;

    if (calcType.value && calcMaterial.value && calcSquare.value) {
      totalValue = price * calcTypeValue * calcMaterialValue * calcSquareValue;
    } else {
      totalValue = 0;
    }

    total.value = totalValue;
    animate({
      duration: 300,
      timing(timeFraction) {
        return Math.pow(timeFraction, 2);
      },
      draw(progress) {
        total.value = Math.round(progress * totalValue);
      },
    });

    calcSquare.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
  };

  try {
    calcBlock.addEventListener('input', (e) => {
    if (e.target === calcType || e.target === calcSquare || e.target === calcMaterial) {
      countCalc();
    }
  });
  } catch (error) {
    
  }
};

export default calc;
