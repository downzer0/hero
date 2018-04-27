/**
 * Quick n dirty
 */

let data = [
  {
    name: "dz0",
    dex: 10,
    speed: 2,
    order: 0
  }, {
    name: "logan",
    dex: 4,
    speed: 8,
    order: 1
  }
];

const loadSavedGame = () => {
  const modal = document.querySelector('.modal');
  const wrapper = modal.querySelector('.wrapper');
  const textarea = wrapper.querySelector('textarea');

  if (!textarea.value) {
    return false;
  }

  data = JSON.parse(textarea.value);
  loadPlayers();
  return close();
};

const loadGame = () => {
  const modal = document.querySelector('.modal');
  const wrapper = modal.querySelector('.wrapper');
  const form = document.createElement('form');
  const label = document.createElement('label');
  label.setAttribute('for', 'json');
  const textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'json');

  wrapper.appendChild(form);
  form.appendChild(label);
  form.appendChild(textarea);
  wrapper.insertAdjacentHTML('beforebegin', '<p>Paste your previously saved JSON.</p>');
  wrapper.insertAdjacentHTML('afterend', '<p><button type="button" class="transparent close">Maybe later</button></p>');
  wrapper.insertAdjacentHTML('afterend', '<p><button type="button" class="load">Load</button></p>');
  modal.style.display = 'block';

  addEventListenersToElement('.load', loadSavedGame);
  addEventListenersToElement('.close', close);
  return;
};

const saveGame = () => {
  const modal = document.querySelector('.modal');
  const wrapper = modal.querySelector('.wrapper');
  const pre = document.createElement('pre');
  pre.innerHTML = JSON.stringify(data);

  wrapper.appendChild(pre);
  wrapper.insertAdjacentHTML('beforebegin', '<p>Copy the below JSON and save it.</p>');
  wrapper.insertAdjacentHTML('afterend', '<p><button type="button" class="close">Got it</button></p>');
  modal.style.display = 'block';

  addEventListenersToElement('.close', close);
  return;
};

const loadPlayers = () => {
  const players = document.querySelector('.players');
  players.innerHTML = '';

  if (!data.length) {
    players.innerHTML = 'No players yet.';
    return calculateTurnOrder();
  }

  const table = document.createElement('table');
  const thead = table.createTHead();
  const headerRow = thead.insertRow(0);

  const nameHeader = headerRow.appendChild(document.createElement('th'));
  const dexHeader = headerRow.appendChild(document.createElement('th'));
  const speedHeader = headerRow.appendChild(document.createElement('th'));
  const actionsHeader = headerRow.appendChild(document.createElement('th'));

  nameHeader.innerHTML = 'Player';
  dexHeader.innerHTML = 'Dex';
  speedHeader.innerHTML = 'Speed';
  actionsHeader.innerHTML = 'Actions';

  data.forEach((piece, index) => {
    const row = table.insertRow(table.rows.length);
    row.insertCell(0).appendChild(document.createTextNode(piece.name));
    row.insertCell(1).appendChild(document.createTextNode(piece.dex));
    row.insertCell(2).appendChild(document.createTextNode(piece.speed));

    const button = document.createElement('button');
    const buttonText = document.createTextNode('Remove');
    button.appendChild(buttonText);
    button.setAttribute('type', 'button');
    button.setAttribute('data-index', index);
    button.classList.add('remove');
    row.insertCell(3).appendChild(button);
  });

  players.appendChild(table);
  addEventListenersToElement('.remove', removePlayer);
  calculateTurnOrder();
};

const addPlayer = () => {
  const name = document.querySelector('#new-player');
  const speed = document.querySelector('#new-player-speed');
  const dex = document.querySelector('#new-player-dex');

  if (!name.value || !speed.value || !dex.value) {
    return false;
  }

  data.push({
    name: name.value,
    dex: dex.value,
    speed: speed.value,
    order: data.length + 1
  });

  name.value = '';
  speed.value = '';
  dex.value ='';

  loadPlayers();
};

const removePlayer = (event) => {
  const player = event.target.getAttribute('data-index');
  data.splice(player, 1);
  loadPlayers();
};

const calculateTurnOrder = () => {
  const turnOrder = document.querySelector('.order');
  turnOrder.innerHTML = '';

  if (!data || !data.length) {
    return turnOrder.innerHTML = 'Add some players first.';
  }
};

const clear = () => {
  data = [];
  return loadPlayers();
}

const close = () => {
  const modal = document.querySelector('.modal');
  const wrapper = document.querySelector('.modal .wrapper');
  wrapper.innerHTML = '';
  modal.querySelectorAll('p').forEach(p => {
    p.remove();
  });
  modal.style.display = 'none';
  return;
}

const addEventListenersToElement = (classname, fn) => {
  const els = document.querySelectorAll(classname);
  els.forEach(el => {
    el.addEventListener('click', fn);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadPlayers();

  addEventListenersToElement('.save', saveGame);
  addEventListenersToElement('.load', loadGame);
  addEventListenersToElement('.add', addPlayer);
  addEventListenersToElement('.remove', removePlayer);
  addEventListenersToElement('.clear', clear);
});