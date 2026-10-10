
const form = document.getElementById("percentageForm");
const resultElement = document.getElementById("result");

if (form && resultElement) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const obtainedMarks = Number(document.getElementById("obtainedMarks").value);
        const totalMarks = Number(document.getElementById("totalMarks").value);

        if (!document.getElementById("obtainedMarks").value || !document.getElementById("totalMarks").value) {
            resultElement.textContent = "Please enter both marks.";
            return;
        }

        if (totalMarks <= 0) {
            resultElement.textContent = "Total marks must be greater than 0.";
            return;
        }

        const percentage = (obtainedMarks / totalMarks) * 100;
        resultElement.textContent = `You have got ${percentage.toFixed(2)}%`;
    });
}

