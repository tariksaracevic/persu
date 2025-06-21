<template>
    <Radar :data="chartData" :options="chartOptions" :plugins="plugins" />
</template>

<script>
import { Radar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement, Filler } from 'chart.js'
import PERSUCompass from '@/assets/PERSU Compass.png'

ChartJS.register(Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement, Filler)

const backgroundImagePlugin = {
    id: 'customCanvasBackgroundImage',
    beforeDraw: (chart) => {
        const image = new Image()
        image.src = PERSUCompass
        if (image.complete) {
            const ctx = chart.ctx
            const {
                top,
                left,
                width,
                height
            } = chart.chartArea
            ctx.drawImage(image, left, top, width, height)
        } else {
            image.onload = () => chart.draw()
        }
    },
}

export default {
    name: 'RadarChart',
    components: {
        Radar
    },
    props: {
        scores: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            plugins: [backgroundImagePlugin],
        }
    },
    computed: {
        chartData() {
            const labels = ['Spirituality', 'Career', 'Education', 'Avocation', 'Lifestyle', 'Relationships', 'Finances', 'Entrepreneurship'];
            return {
                labels: labels.map(l => l.toUpperCase()),
                datasets: [{
                    label: 'Your PERSU Profile',
                    data: labels.map(label => this.scores[label] || 0),
                    fill: true,
                    backgroundColor: 'rgba(245, 124, 0, 0)',
                    borderColor: '#000',
                    borderWidth: 2,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#000',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#000',
                },],
            }
        },
        chartOptions() {
            return {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        min: -100,
                        max: 100,
                        ticks: {
                            stepSize: 50,
                            display: false,
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                            display: true,
                        },
                        pointLabels: {
                            display: false,
                            font: {
                                size: 12,
                                weight: 'bold',
                            },
                            color: '#424242',
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return ` ${context.dataset.label}: ${context.raw}%`;
                            }
                        }
                    }
                },
            }
        },
    },
}
</script>