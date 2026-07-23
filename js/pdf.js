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

        // 2. Small delay to let browser re-render with print styles
        setTimeout(() => {
            window.print();

            // 3. Clean up after print dialog closes
            // Some browsers fire 'afterprint', some don't, so we also use a timeout fallback
            const cleanup = () => {
                document.body.classList.remove('printing-pdf');
            };

            window.addEventListener('afterprint', cleanup, { once: true });

            // Fallback cleanup after 3 seconds
            setTimeout(cleanup, 3000);
        }, 300);
    },

    showLoading(show) {
        // No longer needed for native print, but kept for compatibility
        const overlay = document.getElementById('loading-overlay');
        const text = document.getElementById('loading-text');
        if (overlay) overlay.classList.toggle('hidden', !show);
        if (text) text.textContent = 'Đang tạo PDF...';
    }
};
