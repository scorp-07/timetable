const addBtn = document.getElementsByClassName('add-btn'); //кнопки добавить
const sideEl = document.getElementById('side'); // Меню 
const specEl = document.getElementsByClassName('spec'); // все пункты меню со специальностями
const table = document.getElementById('table'); // таблица
const editSpec = {}; // Объект для временного хранения данных редактируемого группы

let idCount = 2; // счетчик id 

// Обработка нажатия списка специальностей 
for (const item of specEl) {
    item.addEventListener('click', () => {
        const course = item.parentElement.parentElement;
        table.classList.add('active');
        sideEl.classList.add('non-active');
        editSpec.course = course.parentElement.dataset.course;
        editSpec.spec = item.dataset.speciality;

        console.log(editSpec);
    });
}

// Обработка нажатия на кнопку добавить
for (const item of addBtn) {
    item.addEventListener('click', () => {
        const pBlock = item.parentElement;
        idCount++;
        item.before(createInputs());
    });
}

// Функция для создания инпутов для таблицы
function createInputs() {
    const inputs = createEl('div', { 'class': 'inputs' });
    const timeStartInput = createEl('input', { 'type': 'time', 'class': 'lesson-input', 'id': 'leson-start', 'value': '08:00' });
    const timeEndInput = createEl('input', { 'type': 'time', 'class': 'lesson-input', 'id': 'lesson-end', 'value': '08:00' });
    const lessonName = createEl('select', { 'class': 'lesson-input lesson-select', 'id': 'lesson' });
    const classRoom = createEl('select', { 'class': 'lesson-input lesson-select', 'id': 'classroom' });
    const teacherName = createEl('select', { 'class': 'lesson-input lesson-select', 'id': 'teacher' });

    inputs.appendChild(timeStartInput);
    inputs.appendChild(timeEndInput);
    inputs.appendChild(lessonName);
    inputs.appendChild(classRoom);
    inputs.appendChild(teacherName);
    return inputs;
}


/*
function _ajax(url, method, obj)
{

function sUrl(obj)
{
return Object
.keys(obj)
.map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
.join('&');
}

const request = new XMLHttpRequest();
request.open(method, url, true);
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.addEventListener("readystatechange", () => {
if(request.readyState === 4 && request.status === 200) {
request.responseText;
}
});

request.send(sUrl(obj));
}
*/

// Функция для создания ДОМ элемента через JS (не завершен)
function createEl(name, options) {
    const elem = document.createElement(name);
    for (const key in options) {
        elem.setAttribute(key, options[key]);
    }
    return elem;
}

