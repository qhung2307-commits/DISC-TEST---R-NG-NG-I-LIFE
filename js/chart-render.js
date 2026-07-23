/* ============================================ */
/* Chart Rendering (Chart.js Wrapper)           */
/* ============================================ */

const ChartRenderer = {
    instances: {},

    /**
     * Render a radar chart for DISC scores
     * @param {String} canvasId - Canvas element ID
     * @param {Object} percentages - { D: 35, I: 20, S: 30, C: 15 }
     * @param {Object} options - Additional options
     */
    renderRadar(canvasId, percentages, options = {}) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        // Destroy existing chart on same canvas
        if (this.instances[canvasId]) {
            this.instances[canvasId].destroy();
        }

        const ctx = canvas.getContext('2d');
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const textColor = isDark ? '#A0AEC0' : '#4A5568';
        const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

        this.instances[canvasId] = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['D - Quyết đoán', 'I - Ảnh hưởng', 'S - Kiên định', 'C - Tuân thủ'],
                datasets: [{
                    label: 'DISC Profile',
                    data: [percentages.D, percentages.I, percentages.S, percentages.C],
                    backgroundColor: 'rgba(102, 126, 234, 0.15)',
                    borderColor: 'rgba(102, 126, 234, 0.8)',
                    borderWidth: 2,
                    pointBackgroundColor: [
                        '#E74C3C', '#F39C12', '#27AE60', '#2980B9'
                    ],
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: isDark ? '#1E2533' : '#FFFFFF',
                        titleColor: isDark ? '#E2E8F0' : '#1A202C',
                        bodyColor: isDark ? '#A0AEC0' : '#4A5568',
                        borderColor: isDark ? '#2D3748' : '#E2E8F0',
                        borderWidth: 1,
                        padding: 12,
                        callbacks: {
                            label: (ctx) => `${ctx.raw}%`
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: Math.max(50, Math.max(...Object.values(percentages)) + 10),
                        ticks: {
                            stepSize: 10,
                            color: textColor,
                            backdropColor: 'transparent',
                            font: { size: 10 }
                        },
                        grid: { color: gridColor },
                        angleLines: { color: gridColor },
                        pointLabels: {
                            color: [
                                '#E74C3C', '#F39C12', '#27AE60', '#2980B9'
                            ],
                            font: { size: options.compact ? 10 : 12, weight: '600' }
                        }
                    }
                },
                animation: {
                    duration: options.animate === false ? 0 : 1200,
                    easing: 'easeOutQuart'
                }
            }
        });

        return this.instances[canvasId];
    },

    /**
     * Render comparison radar charts (overlay)
     * @param {String} canvasId
     * @param {Array} candidates - [{ name, percentages: {D,I,S,C} }]
     */
    renderCompareRadar(canvasId, candidates) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        if (this.instances[canvasId]) {
            this.instances[canvasId].destroy();
        }

        const ctx = canvas.getContext('2d');
        const colors = [
            { bg: 'rgba(102, 126, 234, 0.15)', border: 'rgba(102, 126, 234, 0.8)' },
            { bg: 'rgba(243, 156, 18, 0.15)', border: 'rgba(243, 156, 18, 0.8)' },
            { bg: 'rgba(39, 174, 96, 0.15)', border: 'rgba(39, 174, 96, 0.8)' }
        ];

        const datasets = candidates.map((c, i) => ({
            label: c.name,
            data: [c.percentages.D, c.percentages.I, c.percentages.S, c.percentages.C],
            backgroundColor: colors[i % colors.length].bg,
            borderColor: colors[i % colors.length].border,
            borderWidth: 2,
            pointRadius: 4,
            fill: true
        }));

        this.instances[canvasId] = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['D', 'I', 'S', 'C'],
                datasets
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { padding: 16 }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        ticks: { stepSize: 10 },
                        pointLabels: {
                            color: ['#E74C3C', '#F39C12', '#27AE60', '#2980B9'],
                            font: { size: 13, weight: '700' }
                        }
                    }
                }
            }
        });
    },

    /**
     * Update chart theme colors
     */
    updateTheme() {
        Object.keys(this.instances).forEach(canvasId => {
            const chart = this.instances[canvasId];
            if (chart && chart.canvas) {
                const percentages = {};
                if (chart.data.datasets[0]) {
                    const data = chart.data.datasets[0].data;
                    percentages.D = data[0];
                    percentages.I = data[1];
                    percentages.S = data[2];
                    percentages.C = data[3];
                    this.renderRadar(canvasId, percentages);
                }
            }
        });
    },

    destroyAll() {
        Object.values(this.instances).forEach(chart => chart.destroy());
        this.instances = {};
    }
};
