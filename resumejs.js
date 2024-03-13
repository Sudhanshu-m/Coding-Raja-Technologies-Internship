// Sample resume templates (you can replace them with your templates)
const templates = {
    template1: "Template 1 Content",
    template2: "Template 2 Content",
    template3: "Template 3 Content",
};

// Function to update the resume editor based on the selected template
function updateResumeEditor() {
    const templateSelector = document.getElementById('template');
    const selectedTemplate = templateSelector.value;
    
    const resumeEditor = document.getElementById('resumeEditor');
    resumeEditor.textContent = templates[selectedTemplate];
}


// Event listener to update the resume editor when the template is changed
document.getElementById('template').addEventListener('change', updateResumeEditor);


document.addEventListener('DOMContentLoaded', function () {
    // Fetch elements
    const nameInput = document.getElementById('name');
    const designationInput = document.getElementById('designation');
    const summaryInput = document.getElementById('summary');

    // Add event listeners for input changes
    nameInput.addEventListener('input', updatePreview);
    designationInput.addEventListener('input', updatePreview);
    summaryInput.addEventListener('input', updatePreview);
    })

    // Function to update the preview
    function updateResumeEditor() {
        const templateSelector = document.getElementById('template');
        const selectedTemplate = templateSelector.value;
        
        const resumeEditor = document.getElementById('resumeEditor');
        resumeEditor.textContent = templates[selectedTemplate];
    }
    // Function to download the resume
    function downloadResume() {
        const templateSelector = document.getElementById('template');
        const selectedTemplate = templateSelector.value;
        const resumeContent = templates[selectedTemplate];
    
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'resume.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    document.addEventListener('DOMContentLoaded', function () {
    // Fetch elements
    const nameInput = document.getElementById('name');
    const designationInput = document.getElementById('designation');
    const summaryInput = document.getElementById('summary');

    // Function to download the resume
    window.downloadResume = function () {
        const resumeContent = `
Name: ${nameInput.value || 'Your Name'}
Designation: ${designationInput.value || 'Your Designation'}
Summary: ${summaryInput.value || 'Your Summary'}
`;

        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'resume.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
});