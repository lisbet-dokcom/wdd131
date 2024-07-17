const aCourse = {
    code: "HIS 104",
    name: "Intro to Economic History",
    section: [
        { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
        { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" }
    ]
}



// const nameElement = document.name
// document.getElementById("courseName").textContent = aCourse[1];

// const codeElement = document.code;
// document.getElementById("courseCode").textContent = course.code;

function setCourseInfor(course) {
    const courseName = document.getElementById("courseName");
    const courseCode = document.getElementById("courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function sectionTemplate(section) {
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
}

function renderSelection(section) {
    const html = section.map(sectionTemplate);
    document.getElementById("sections").innerHTML = html.join("");
}

setCourseInfor(aCourse);
renderSelection(aCourse.section);

const list = ["one", "two", "three"];

const listTemplate = function (step) {
    return `<li>${step}</li>`;
}

const hey = element.map(listTemplate);
document.getElementById("myList").innerHTML = hey.join("");

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    }
    else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gpaPonits = grades.map(convertGradeToPoints);


