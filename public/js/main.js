const items = [];
const data = [];
const addBtn = document.getElementsByClassName('add-btn');
const coursess = document.getElementsByClassName('coursess_item');
const specialties = document.getElementsByClassName('speciality');


for (let item of addBtn) {
    console.log(item);
    item.addEventListener('click', (e) => {

        const outEl = document.createElement('tr');
        const id = item.dataset.inputid;
        const text = document.getElementById(id).value;
        const parent = item.parentElement.parentElement;


        localStorage.setItem(parent.dataset.day, JSON.stringify(text));
        outEl.textContent = text;
        item.parentElement.appendChild(outEl);
    });
}

for (let item of coursess) {
    item.addEventListener('click', () => {
        const course = item.dataset.course;
        data[0] = course;
    })
}

for (const item of specialties) {
    item.addEventListener('click', () => {
        const special = item.dataset.specialty;
        data[1] = special;
        document.getElementById('out').style.display = 'flex';
    });
}











