const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    console.log('+-- Show event on Modal ---------------------+');
});

exampleModal.addEventListener('hide.bs.modal', function (event) {
    console.log('+-- Hide event on Modal ---------------------+');
});

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', function (event) {
    const exampleModalInstance = bootstrap.Modal.getInstance(exampleModal);
    exampleModalInstance.hide();
});