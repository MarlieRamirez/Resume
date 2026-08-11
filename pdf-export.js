// Add this script to enable PDF generation using html2pdf.js
// You need to include html2pdf.js from CDN in your HTML file for this to work.
window.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('download-pdf-btn');
    if (btn) {
        btn.addEventListener('click', function() {
            // Hide the button before generating PDF
            btn.style.display = 'none';
            // Wait for the button to hide, then generate PDF
            setTimeout(function() {
                const element = document.body;
                html2pdf()
                    .set({
                        margin: 0.5,
                        filename: 'LuisOrozco_Resume.pdf',
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { scale: 2, useCORS: true },
                        jsPDF: { unit: 'in', format: 'A3', orientation: 'portrait' },
                        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
                    })
                    .from(element)
                    .save()
                    .then(() => {
                        // Show the button again after PDF is generated
                        btn.style.display = '';
                    });
            }, 100);
        });
    }
});
