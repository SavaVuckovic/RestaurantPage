export default function generateContact(targetDiv) {
  // create wrapper div
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  // create address tag
  const address = document.createElement('address');
  // create address contents
  const name = document.createElement('p');
  name.innerHTML = 'Name: <span>Nonexistent Restaurant</span>';
  const location = document.createElement('p');
  location.innerHTML = 'Location: <span>2354 Pacific Coast Highway</span>';
  const state = document.createElement('p');
  state.innerHTML = 'State: <span>California</span>';
  const country = document.createElement('p');
  country.innerHTML = 'Country: <span>USA</span>';
  const phone = document.createElement('p');
  phone.innerHTML = 'Phone: <span>+311-555-2368</span>';
  const email = document.createElement('p');
  email.innerHTML = 'Name: <span>nonexistentrestaurant@example.com</span>';
  // populate address
  address.appendChild(name);
  address.appendChild(location);
  address.appendChild(state);
  address.appendChild(country);
  address.appendChild(phone);
  address.appendChild(email);
  // populate wrapper div
  wrapper.appendChild(address);
  // render wrapper div
  targetDiv.appendChild(wrapper);
};