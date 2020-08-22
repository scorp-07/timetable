const addBtn = document.getElementsByClassName('add-btn');
const outBlock = document.getElementById('out');
const courseEl = document.getElementsByClassName('course__btn');
const filterEl = document.getElementById('filter');
const specEl = document.getElementsByClassName('speciality__btn');

const specialities = ['Web-design', 'Дизайни робитавӣ', 'Дизайни кастюм', 'Дизайни графикӣ'];
const editGroup = {};
let idCount = 4;

for (const item of addBtn) {
    item.addEventListener('click', () => {
        const pBlock = item.parentElement;
        idCount++;
        console.log(pBlock.classList);
        item.before(createInputs());
    });
}

function createInputs(outBlock) {
    const inputs = document.createElement('div');
    inputs.classList.add('inputs');
    const timeStartInput = document.createElement('input');
    timeStartInput.type = 'time';
    timeStartInput.classList = 'lesson-input';
    timeStartInput.id = "lesson-start";
    timeStartInput.value = '08:00';
    const timeEndInput = document.createElement('input');
    timeEndInput.type = 'time';
    timeEndInput.classList = 'lesson-input';
    timeEndInput.id = "lesson-end";
    timeEndInput.value = "08:00";
    const lessonName = document.createElement('select');
    lessonName.classList = 'lesson-input lesson-select';
    lessonName.id = "lesson";
    const classRoom = document.createElement('select');
    classRoom.classList = 'lesson-input lesson-select';
    classRoom.id = "classroom";
    const teacherName = document.createElement('select');
    teacherName.classList = 'lesson-input lesson-select';
    teacherName.id = "teacher";

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


