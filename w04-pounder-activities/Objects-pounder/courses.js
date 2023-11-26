// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { 
         sectionNum: 1, 
         roomNum: 'STC 353', 
         enrolled: 26, 
         days: 'TTh', 
         instructor: 'Bro T'
        },
        { 
         sectionNum: 2, 
         roomNum: 'STC 347', 
         enrolled: 28, 
         days: 'TTh', 
         instructor: 'Sis A'
        },
    ],
    enrollStudent: function(sectionNum){
        
    }           
  };

function setCourse(course)
{
    const courseName = document.getElementById('courseName');
    const courseCode = document.getElementById('courseCode');

    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function renderSections(sections)
{
    const sectionsHtml = sections.map((section) => `<tr>
    <td>${section.sectionNum}<td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`);

    document.getElementById('sections').innerHTML = sectionsHtml.join("");
}


setCourse(aCourse);
renderSections(aCourse.sections);