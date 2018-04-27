const data = [
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

};

const saveGame = () => {

};

const loadPlayers = () => {
  const players = document.querySelector('.players');

  if (!data.length) {
    return players.innerHTML = 'No players yet.';
  }

  const table = document.createElement('table');

  data.forEach((piece, index) => {
    let row;
    if (!table.rows || !table.rows.length) {
      row = table.insertRow(0);
    } else {
      row = table.insertRow(table.rows.length);
    }
    const name = row.insertCell(0).appendChild(document.createTextNode(piece.name));
    const dex = row.insertCell(1).appendChild(document.createTextNode(piece.dex));
    const speed = row.insertCell(2).appendChild(document.createTextNode(piece.speed));
    const actions = row.insertCell(3).appendChild(document.createTextNode(`<button type="button" class="remove" data-index="${index}">Remove</button>`));
  });

  players.appendChild(table);
};

const addPlayer = () => {
  const name = document.querySelector('#name');
  const speed = document.querySelector('#speed');
  const dex = document.querySelector('#dex');

  if (!name.value || !speed.value || !dex.value) {
    return false;
  }

  data.push({
    name: name.value,
    dex: dex.value,
    speed: speed.value,
    order: data.length + 1
  });

  loadPlayers();
  calculateTurnOrder();
};

const removePlayer = (event) => {
  const player = event.target.getAttribute('data-index');
  console.log(player);
};

const calculateTurnOrder = () => {
  const turnOrder = document.querySelector('.order');

  if (!data.length) {
    return turnOrder.innerHTML = 'Add some players first.';
  }
};

const clear = () => {
  data = [];
  loadPlayers();
  calculateTurnOrder();
  return;
}

document.addEventListener('DOMContentLoaded', () => {
  loadPlayers();
  calculateTurnOrder();
});

const saveButton = document.querySelector('.save');
saveButton.addEventListener('click', saveGame);

const loadButton = document.querySelector('.load');
loadButton.addEventListener('click', loadSavedGame);

const addPlayerButton = document.querySelector('.add');
addPlayerButton.addEventListener('click', addPlayer);

const removePlayerButton = document.querySelector('.remove');
removePlayerButton.addEventListener('click', (event) => removePlayer(event));