/* ============================================ */
/* PDF Export Module — Native Print Method      */
/* Zero-dependency, uses window.print()         */
/* ============================================ */

const PDFExporter = {

    /**
     * Export the full report to PDF using the browser's native print dialog.
     * This approach is 100% reliable — no html2canvas, no jsPDF, no blank pages.
     */
    exportFull() {
        // 1. Prepare: add print-mode class to body
        document.body.classList.add('printing-pdf');

        // Fix for Chart.js canvas not rendering in print: Convert to Image
        const canvas = document.getElementById('chart-report');
        let img = null;
        if (canvas) {
            try {
                img = document.createElement('img');
                img.src = canvas.toDataURL('image/png');
                img.id = 'chart-print-img';
                img.style.width = '100%';
                img.style.maxWidth = '600px';
                img.style.margin = '0 auto';
                img.style.display = 'block';
                
                canvas.style.display = 'none';
                canvas.parentNode.insertBefore(img, canvas);
            } catch (e) {
                console.error("Canvas to image conversion failed", e);
            }
        }

        // 2. Small delay to let browser re-render with print styles
        setTimeout(() => {
            window.print();

            // 3. Clean up after print dialog closes
            const cleanup = () => {
                document.body.classList.remove('printing-pdf');
                if (canvas && img) {
                    canvas.style.display = '';
                    if (img.parentNode) img.parentNode.removeChild(img);
                }
            };

            window.addEventListener('afterprint', cleanup, { once: true });
            setTimeout(cleanup, 3000);
        }, 500);
    },

    showLoading(show) {
        // No longer needed for native print, but kept for compatibility
        const overlay = document.getElementById('loading-overlay');
        const text = document.getElementById('loading-text');
        if (overlay) overlay.classList.toggle('hidden', !show);
        if (text) text.textContent = 'Đang tạo PDF...';
    }
};
