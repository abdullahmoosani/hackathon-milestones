// get refernce to the form and resume display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHtml = "\n    <h2><b>Editable Resume</b></h2>\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name:</b><span comtenteditable=\"true\">".concat(name, "<span></p>\n    <p><b>Email:</b><span comtenteditable=\"true\">").concat(email, "<span></p>\n    <p><b>Phone:</b><span comtenteditable=\"true\">").concat(phone, "<span></p>\n    <h3><b>Education</b></h3>\n    <p comtenteditable=\"true\">").concat(education, "</p>\n    <h3><b>Work Experience</b></h3>\n    <p comtenteditable=\"true\">").concat(experience, "</p>\n    <h3><b>Skills</b></h3>\n    <p comtenteditable=\"true\">").concat(skills, "</p>\n    ");
    // diplay generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error("Resume display element not found");
    }
});
