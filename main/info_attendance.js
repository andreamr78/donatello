document.getElementById('potluck-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const attending = document.querySelector('input[name="attendance"]:checked').value;
    const whyNo = document.getElementById('whyNo').value;
    const allergies = document.querySelector('input[name="allergies"]:checked').value;
    const specifyAllergies = document.getElementById('specifyAllergies').value;

    // Crear un objeto con la información del invitado
    const guestData = {
        name: name,
        phone: phone,
        attending: attending,
        whyNo: whyNo || "N/A",
        allergies: allergies,
        specifyAllergies: specifyAllergies || "None"
    };

    // Guardar en localStorage
    let guests = JSON.parse(localStorage.getItem('guests')) || [];
    guests.push(guestData);
    localStorage.setItem('guests', JSON.stringify(guests));

    // Limpiar el formulario después de enviarlo
    document.getElementById('potluck-form').reset();

    alert('Information saved successfully!');
});

// Función para obtener la lista de todos los invitados
function getGuestList() {
    return JSON.parse(localStorage.getItem('guests')) || [];
}