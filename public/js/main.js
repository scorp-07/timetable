const addBtn = document.getElementById('add-btn');
const outBlock = document.getElementById('out');
const courseEl = document.getElementsByClassName('course__btn');
const filterEl = document.getElementById('filter');
const specEl = document.getElementsByClassName('speciality__btn');

const specialities = ['Web-design', 'Дизайни робитавӣ', 'Дизайни кастюм', 'Дизайни графикӣ'];
const editGroup = {};
let idCount = 0;

for (const item of courseEl) {
    item.addEventListener('click', () => {
        const course = item.dataset.course;
        editGroup.course = course;
        item.parentElement.innerHTML = '';
        for (const el of specialities) {
            console.log(el);
            filter.innerHTML += `<div class="filter__item speciality__btn" data-speciality="1">${el}</div>`;
        }
        for (const item of specEl) {
            item.addEventListener('click', () => {
                const spec = item.dataset.speciality;
                editGroup.speciality = spec;
                document.getElementById('form-group').style.display = 'block';
                filter.style.display = 'none';
            });
        }

    });
}

addBtn.addEventListener('click', () => {
    
    idCount++;
    const inputs = document.getElementsByClassName('lesson-input');
    const day = document.getElementById('day').value
    lessonS = document.getElementById('lesson-start').value
    lessonE = document.getElementById('lesson-end').value
    lessonName = document.getElementById('lesson').value
    classRoom = document.getElementById('classroom').value
    teacher = document.getElementById('teacher').value;

    document.getElementById('lesson-start').value = '08:00';
    document.getElementById('lesson-end').value = '08:00';
    document.getElementById('lesson').value = '';
    document.getElementById('classroom').value = '';
    document.getElementById('teacher').value = '';

    if (lessonS == '' || lessonE == '' || lesson == '' || classRoom == '' || classRoom < 0 || teacher == '') {

    } else {
        tableOut(day, lessonS, lessonE, lessonName, classRoom, teacher, outBlock);

    }


});

function tableOut(day, lessonStart, lessonEnd, lessonName, audithorium, teacherName, outEl) {
    outEl.innerHTML += `
            <div class="lessons-out">
                <select name="day" id="day" class="day" value="${day}" disabled>
                    <option class="days" value="Monday">Душанбе</option>
                    <option class="days" value="Monday">Сешанбе</option>
                    <option class="days" value="Monday">Чоршанбе</option>
                    <option class="days" value="Monday">Панҷшанбе</option>
                    <option class="days" value="Monday">Ҷума</option>
                    <option class="days" value="Monday">Шанбе</option>
                    <option class="days" value="Monday">Якшанбе</option>
                </select>
                <input type="time" value="${lessonStart}" disabled name="lesson-start" id="lesson-start${idCount}" class="lesson-input">
                <input type="time" value="${lessonEnd}" disabled name="lesson-end" id="lesson-end${idCount}" class="lesson-input" >
                <input type="text" name="lesson" value="${lessonName}" disabled placeholder="Фан" id="lesson-name${idCount}" class="lesson-input">
                <input type="number" name="classroom" value="${audithorium}" disabled placeholder="Аудитория" id="classroom${idCount}" class="lesson-input" min="0">
                <input type="text" name="teacher" value="${teacherName}" disabled class="lesson-input" id="teacher${idCount}" placeholder="Омӯзгор">
                <button type="submit" class="btn edit-btn" id="edit-btn">Edit</button>
            </div>
        `
}









