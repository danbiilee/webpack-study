import { cube } from './math';

function component() {
  const element = document.createElement('pre');

  element.innerHTML = ['Hello webpack!', '5 cubed is eqaul to ' + cube(5)].join(
    '\n\n'
  );

  return element;
}

document.body.appendChild(component());
