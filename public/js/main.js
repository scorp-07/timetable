const addBtn = document.getElementsByClassName('add-btn'); //кнопки добавить
const sideEl = document.getElementById('side'); // Меню 
const specEl = document.getElementsByClassName('spec'); // все пункты меню со специальностями
const table = document.getElementById('table'); // таблица
const data = {}; // Объект для временного хранения данных редактируемого группы

let idCount = 1; // счетчик id 

// Обработка нажатия списка специальностей 
for (const item of specEl) {
    item.addEventListener('click', () => {
        const course = item.parentElement.parentElement;
        table.classList.add('active');
        sideEl.classList.add('non-active');
        const group = `${item.dataset.speciality}-${course.parentElement.dataset.course}`;
        data[group] = {};

        console.log(data);
    });
}

// Обработка нажатия на кнопку добавить
for (const item of addBtn) {
    item.addEventListener('click', () => {
        const pBlock = item.parentElement;
        // const lessonData = {
        //     "startTime": document.getElementById(`lesson-start${idCount}`).value,
        //     "endTime": document.getElementById(`lesson-end${idCount}`).value,
        //     "lessonName": document.getElementById(`lesson${idCount}`).value,
        //     "classRoom": document.getElementById(`classroom${idCount}`).value,
        //     "teacher": document.getElementById(`teacher${idCount}`).value,
        // }
        
        // console.log(lessonData);
        
        idCount++;
        item.before(createInputs(idCount));
    });
}

// Функция для создания инпутов для таблицы
function createInputs(id) {
    const inputs = createEl('div', { 'class': 'inputs' });
    const timeStartInput = createEl('input', { 'type': 'time', 'class': 'lesson-input', 'id': 'leson-start' + id, 'value': '08:00' });
    const timeEndInput = createEl('input', { 'type': 'time', 'class': 'lesson-input', 'id': 'lesson-end' + id, 'value': '08:00' });
    const lessonName = createEl('select', { 'class': 'lesson-input lesson-select', 'id': 'lesson' + id });
    const classRoom = createEl('select', { 'class': 'lesson-input lesson-select', 'id': 'classroom' + id });
    const teacherName = createEl('select', { 'class': 'lesson-input lesson-select', 'id': 'teacher' + id});

    inputs.appendChild(timeStartInput);
    inputs.appendChild(timeEndInput);
    inputs.appendChild(lessonName);
    inputs.appendChild(classRoom);
    inputs.appendChild(teacherName);
    return inputs;
}

// Функция для создания ДОМ элемента через JS (не завершен)
function createEl(name, options) {
    const elem = document.createElement(name);
    for (const key in options) {
        elem.setAttribute(key, options[key]);
    }
    return elem;
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
