import "./index.css";
import MY_IMAGE from './assets/6.jpg';

function hello() {
    console.log('Hello world!!!!');
}

hello();

const array = [1, 2, 3].map((n) => n + 1);
console.log(array);

const img = document.createElement('img');
img.src = MY_IMAGE;
document.body.append(img);
