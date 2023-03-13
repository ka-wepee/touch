fetch('https://raw.githubusercontent.com/ka-wepee/touch-data/main/data.json')
  .then(response => response.json())
  .then(data => {
    const updated = data[0].updated;
    const inputElem = document.getElementById('search-item');
    inputElem.placeholder += updated;
  })
  .catch(error => console.error(error));