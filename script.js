const submitSearch = document.querySelector('.submit-btn');
const solDaySelect = document.querySelector('#sol');
const cameraSelect = document.querySelector('#camera');
const searchListener = submitSearch.addEventListener('click', processQuery);
const solDay, camera;


function processQuery() {
    solDay = solDaySelect.value;
    camera = cameraSelect.value;
}



