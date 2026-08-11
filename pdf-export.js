// import { jsPDF } from "jspdf";
// Add this script to enable PDF generation using html2pdf.js
// You need to include html2pdf.js from CDN in your HTML file for this to work.

window.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('download-pdf-btn');
  const select = document.getElementsByTagName('select');

  if (btn) {
    btn.addEventListener('click', function () {
      setTimeout(function () {
        const element = document.body;
        select[0].style.display = 'none';
        window.print()
        select[0].style.display = '';
      }, 100);
    });
  }
});
