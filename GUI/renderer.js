const fileSelectButton = document.getElementById('fileSelectButton');
fileSelectButton.addEventListener('click', async () => {
    await window.apis.runClickEvent();
});
