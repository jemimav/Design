function addTableRow() {
    let lieu = document.getElementById('theme');
    let nom = document.getElementById('nom');
    let prix = document.getElementById('prix');

    if (lieu.checkValidity() && nom.checkValidity() && prix.checkValidity()) {
        let tr = document.createElement('tr');

        let td = document.createElement('td');
        td.textContent = nom.value;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = lieu.value;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = prix.value;
        tr.appendChild(td);

        document.getElementById('tab').appendChild(tr);
    } else {
        alert('Donnees incorrect !');
    }
}