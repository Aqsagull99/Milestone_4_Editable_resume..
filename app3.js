var form = document.getElementById('resume-form');
var dynamicResume = document.getElementById('dynamic-resume');
var dynamicName = document.getElementById('dynamic-name');
var dynamicEmail = document.getElementById('dynamic-email');
var dynamicPhone = document.getElementById('dynamic-phone');
var dynamicEducation = document.getElementById('dynamic-education');
var dynamicSkills = document.getElementById('dynamic-skills');
// Event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    // Capture Form Values
    var nameInput = document.getElementById('name-input').value.trim();
    var emailInput = document.getElementById('email-input').value.trim();
    var phoneInput = document.getElementById('phone-input').value.trim();
    var educationInput = document.getElementById('education-input').value.trim();
    var skillsInput = document.getElementById('skills-input').value.trim();
    // Validation
    if (!nameInput || !emailInput || !phoneInput || !educationInput || !skillsInput) {
        alert('Please fill in all fields.');
        return;
    }
    // Populate Resume
    dynamicName.textContent = nameInput;
    dynamicEmail.textContent = "Email: ".concat(emailInput);
    dynamicPhone.textContent = "Phone: ".concat(phoneInput);
    dynamicEducation.textContent = educationInput;
    // Populate Skills
    dynamicSkills.innerHTML = '';
    var skills = skillsInput.split(','); // Split skills by comma
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        dynamicSkills.appendChild(li);
    });
    // Show the Resume
    dynamicResume.classList.remove('hidden');
    // Construct WhatsApp Message
    var message = "Name: ".concat(nameInput, "\nEmail: ").concat(emailInput, "\nPhone: ").concat(phoneInput, "\nEducation: ").concat(educationInput, "\nSkills: ").concat(skillsInput);
    var encodedMessage = encodeURIComponent(message);
    var whatsappNumber = '923172813709'; // Update with your WhatsApp number
    var whatsappURL = "https://wa.me/".concat(whatsappNumber, "?text=").concat(encodedMessage);
    // Redirect to WhatsApp after a short delay
    setTimeout(function () {
        window.open(whatsappURL, '_blank');
    }, 1000);
});
// Make Resume Editable
var editButton = document.getElementById('edit-button');
var nameInputField = document.getElementById('name-input');
var emailInputField = document.getElementById('email-input');
var phoneInputField = document.getElementById('phone-input');
var educationInputField = document.getElementById('education-input');
var skillsInputField = document.getElementById('skills-input');
// Event listener for edit button
editButton.addEventListener('click', function () {
    var _a, _b;
    nameInputField.value = dynamicName.textContent || '';
    emailInputField.value = ((_a = dynamicEmail.textContent) === null || _a === void 0 ? void 0 : _a.replace('Email: ', '')) || '';
    phoneInputField.value = ((_b = dynamicPhone.textContent) === null || _b === void 0 ? void 0 : _b.replace('Phone: ', '')) || '';
    educationInputField.value = dynamicEducation.textContent || '';
    skillsInputField.value = dynamicSkills.innerHTML.split('<li>').map(function (li) { return li.replace('</li>', '').trim(); }).join(', ');
    // Show form for editing
    form.classList.remove('hidden');
});
