// get refernce to the form and resume display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// handle form submission
form.addEventListener("submit" , (event: Event) => {
    event.preventDefault(); // prevent page reload
    
    // collect form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    
    // generate the resume content dynamically
    const resumeHtml = `
    <h2><b>Editable Resume</b></h2>
    <h3><b>Personal Information</b></h3>
    <p><b>Name:</b><span comtenteditable="true">${name}<span></p>
    <p><b>Email:</b><span comtenteditable="true">${email}<span></p>
    <p><b>Phone:</b><span comtenteditable="true">${phone}<span></p>
    <h3><b>Education</b></h3>
    <p comtenteditable="true">${education}</p>
    <h3><b>Work Experience</b></h3>
    <p comtenteditable="true">${experience}</p>
    <h3><b>Skills</b></h3>
    <p comtenteditable="true">${skills}</p>
    `;

    // diplay generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    } else {
        console.error("Resume display element not found");
    }
});