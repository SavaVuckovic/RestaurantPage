export default function generateAbout(targetDiv) {
  // create wrapper div
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  // random paragraph
  const p = document.createElement('p');
  p.classList.add('about-paragraph');
  p.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis laboriosam perferendis qui alias dolorem velit blanditiis debitis vero, nemo voluptatibus corrupti voluptatem error repellendus iste, provident illum? Similique, omnis est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis laboriosam perferendis qui alias dolorem velit blanditiis debitis vero, nemo voluptatibus corrupti voluptatem error repellendus iste, provident illum? Similique, omnis est. <br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis laboriosam perferendis qui alias dolorem velit blanditiis debitis vero, nemo voluptatibus corrupti voluptatem error repellendus iste, provident illum? Similique, omnis est.';
  // create a blockquote
  const quote = document.createElement('blockquote');
  // blockquote paragraph
  const quoteP = document.createElement('p');
  quoteP.textContent = 'The menu is perfect, there is something for everyone. The food was absolutely wonderful, from preparation to presentation, very pleasing.'
  // blockquote footer
  const quoteFooter = document.createElement('footer');
  quoteFooter.innerText = '- Satisfied Customer';
  // add them to blockquote
  quote.appendChild(quoteP);
  quote.appendChild(quoteFooter);
  // populate wrapper
  wrapper.appendChild(p);
  wrapper.appendChild(quote);
  // render wrapper div
  targetDiv.appendChild(wrapper);
};