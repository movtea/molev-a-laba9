// Поля формы
const count = document.getElementById('count');
const name_f = document.getElementById('name_f');
const color = document.getElementById('color');
const teleph = document.getElementById('teleph');

// Ошибки полей
const countError = document.getElementById('span0');
const nameError = document.getElementById('span1');
const colorError = document.getElementById('span2');
const telephError = document.getElementById('span3');

// Счет
count.addEventListener('input', function (event) {
    if (count.validity.valid) {
        countError.textContent = ''; 
        countError.className = 'error';
        count.style.background = '';
        count.style.color = '';
    } else {
        count.style.background = 'red';
        count.style.color = 'white';
        showError();
    }
});
// Имя
name_f.addEventListener('input', function (event) {
    if (name_f.validity.valid) {
        nameError.textContent = ''; 
        nameError.className = 'error'; 
    }
});

// Телефон
teleph.addEventListener('input', function (event) {
    if (teleph.validity.valid) {
        telephError.textContent = ''; 
        telephError.className = 'error'; 
        teleph.style.background = '';
        teleph.style.color = '';
    } else {
        teleph.style.background = 'red';
        teleph.style.color = 'white';
        showError();
    }
});
// Цвет
color.addEventListener('input', function (event) {
    if (color.validity.valid) {
        colorError.textContent = ''; 
        colorError.className = 'error'; 
        color.style.background = '';
        color.style.color = '';
    } else {
        color.style.background = 'red';
        color.style.color = 'white';
        showError();
    }
});

// Функия ошибки
function showError() {
    // Счет
    if (count.validity.valueMissing) {
        countError.textContent = 'Нужно ввести число печенек';
    } if (!count.validity.valid) {
        countError.className = 'error active';
    }

    // Имя
    if (name_f.validity.valueMissing) {
        nameError.textContent = 'Нужно ввести имя';
    }if (!name_f.validity.valid) {
        nameError.className = 'error active';
    }

    // Цвет
    if (color.validity.valueMissing) {
        colorError.textContent = 'Нужно ввести цвет';
    }if (!color.validity.valid) {
        colorError.className = 'error active';
    }

    // Телефон
    if (teleph.validity.valueMissing) {
        telephError.textContent = 'Нужно ввести маил';
    }if (!teleph.validity.valid) {
        telephError.className = 'error active';
    }
}

function form() {
    alert(`Количество печенек - ${ count.value }
Имя - ${ name_f.value }
Цвет - ${ color.value }
Маил - ${ teleph.value }
`);
}