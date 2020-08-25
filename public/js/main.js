const addBtn = document.getElementsByClassName('add-btn');
const outBlock = document.getElementById('out');
const courseEl = document.getElementsByClassName('course__btn');
const filterEl = document.getElementById('filter');
const editDate = [];

const specialities = ['Web-design', 'Дизайни робитавӣ', 'Дизайни кастюм', 'Дизайни графикӣ'];
const coursess = ['Курси 1'];
const editGroup = {};
let idCount = 4;

for (const item of courseEl) {
    item.addEventListener('click', () => {
        const course = item.dataset.course;
        editDate[0] = course;
        filterEl.innerHTML = '';
        for (const el of specialities) {
            filterEl.innerHTML += `<div class="filter__item speciality__btn" data-speciality="2">${el}</div>`;
        }
        const specEl = document.getElementsByClassName('speciality__btn');
        for (const item of specEl) {
            item.addEventListener('click', () => {
                filterEl.style.display = 'none';
                document.getElementById('table').style.display = 'flex';
            });
        }
    });
}



for (const item of addBtn) {
    item.addEventListener('click', () => {
        const pBlock = item.parentElement;
        idCount++;
        item.before(createInputs());
    });
}

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


function addEvent(elements, e, callback) {
    for (const item of elements) {
        item.addEventListener(e, callback);
    }
}

function createEl(name, options) {
    const elem = document.createElement(name);
    for (const key in options) {
        elem.setAttribute(key, options[key]);
    }
    return elem;
}

