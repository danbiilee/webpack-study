import { btnChange } from './app/btn';
import { changeColor } from './app/color';
import './css/main.css';
import App from './js/App';

btnChange.addEventListener('click', function () {
  changeColor('pink');
});
