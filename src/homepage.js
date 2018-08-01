export default function generateHomepage(targetDiv) {
  // create wrapper div
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  // create heading
  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to Nonexistent Restaurant';
  // create image
  const img = document.createElement('img');
  img.setAttribute('src', './images/restaurant.jpg');
  img.classList.add('restaurant-img');
  img.setAttribute('alt', 'restaurant');
  // create paragraph
  const p = document.createElement('p');
  p.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis laboriosam perferendis qui alias dolorem velit blanditiis debitis vero, nemo voluptatibus corrupti voluptatem error repellendus iste, provident illum? Similique, omnis est.';
  // add them inside wraper div
  wrapper.appendChild(h1);
  wrapper.appendChild(img);
  wrapper.appendChild(p);
  // render wrapper div
  targetDiv.appendChild(wrapper);
};