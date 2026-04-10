// Interests
const interests = ["Web Development", "AI", "Design", "Coding"];
document.getElementById("interests").textContent = interests.join(", ");

// Certificates
const certificates = [
    "HTML & CSS Certification",
    "JavaScript Course",
    "Python Programming"
];

const certList = document.getElementById("certList");

certificates.forEach(cert => {
    let li = document.createElement("li");
    li.textContent = cert;
    certList.appendChild(li);
});

// Goals
const goals = "To become a skilled full-stack developer and work on innovative projects.";
document.getElementById("goalsText").textContent = goals;
