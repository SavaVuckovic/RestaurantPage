export default function generateMenu(targetDiv) {
  // create wrapper div
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  // heading
  const h2 = document.createElement('h2');
  h2.innerText = 'Delicious Meals';
  // meals div
  const meals = document.createElement('div');
  meals.classList.add('meals');
  // populate meals
  for (let i = 0; i < 9; i++) {
    const meal = document.createElement('div');
    meal.classList.add('meal');
    const img = document.createElement('img');
    img.setAttribute('src', 'https://loremflickr.com/320/240/meal');
    img.setAttribute('alt', 'meal');
    const h3 = document.createElement('h3');
    h3.innerText = `Example Meal ${i}`;
    const p = document.createElement('p');
    p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur amet temporibus, adipisci possimus corrupti aspernatur inventore quos optio vitae dolor molestias harum iusto esse ipsum vero ullam a quasi!';
    const span = document.createElement('span');
    span.innerText = '$99';

    meal.appendChild(img);
    meal.appendChild(h3);
    meal.appendChild(p);
    meal.appendChild(span);

    meals.appendChild(meal);
  }
  // populate wrapper
  wrapper.appendChild(h2);
  wrapper.appendChild(meals);
  // render wrapper div
  targetDiv.appendChild(wrapper);
};