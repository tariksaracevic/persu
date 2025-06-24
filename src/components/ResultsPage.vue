<template>
    <v-container class="pa-md-10">
        <div class="text-center mb-8">
            <h1 class="text-h4 font-weight-bold mb-2">
                SELFCARE Assessment Results
            </h1>
            <p class="text-h6 font-weight-regular">By PERSU Goals®</p>
        </div>

        <v-card class="pa-4" flat ref="resultsCard">
            <v-card-title class="d-flex justify-space-between align-center bg-black">
                <span>PERSU COMPASS</span>
                <span>{{ new Date().toLocaleDateString('en-GB', {
                    day: '2-digit', month: 'short', year: 'numeric'
                }).replace(/ /g, ' ') }}</span>
            </v-card-title>
            <v-card-text class="pa-4">
                <h3 class="mb-6 font-weight-bold">
                    Below is your personal sustainability compass which measures your alignment with the 8 key personal
                    sustainability principles, pointing you where you are improving and where to improve on.
                </h3>
                <v-row>
                    <v-col cols="12" md="5" class="py-0">
                        <v-list>
                            <v-list-item v-for="item in themes" :key="item.name" class="">
                                <template v-slot:prepend>
                                    <v-img :src="item.icon" :width="320" class="m-negative"></v-img>
                                </template>
                                <template v-slot:append>
                                    <div class="text-right">
                                        <p class="font-weight-bold text-h6">{{ scores[item.name] }}%</p>
                                    </div>
                                </template>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col cols="12" md="7" class="d-flex align-center justify-center bg-grey-lighten-3 my-5">
                        <div style="position: relative; width: 550px; height: 550px;">
                            <RadarChart :scores="scores" />
                            <span style="
                            text-align: end;
                                    position: absolute;
                                    right: 20px;
                                    bottom: 20px;
                                    font-size: 1rem;
                                    color: #a2a2a2;
                                    font-family: 'Poppins', Arial, Helvetica, sans-serif;
                                    opacity: 0.8;
                                    z-index: 2;
                                    pointer-events: none;
                                    margin-right: -40px;
                                    margin-bottom: -80px;
                                ">
                                www.persugoals.com
                                <br>© 2025 PERSU Goals | All rights reserved
                            </span>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-card class="pa-6 my-8" flat color="grey-lighten-4">
            <p>We hope your assessment results brought you insight and clarity. They're here to help you recognise which
                areas
                of your life are thriving - and which ones may need a little more care and attention.
            </p>
            <br>
            <p>Keep in mind, these results aren't set in stone. You have the power to create change and build momentum
                starting
                today. With consistent effort,
                you can see meaningful progress in just 3-12 months. That's why we recommend retaking this assessment
                every
                quarter to stay aligned, intentional,
                and on track with your personal sustainability journey.
            </p>
            <br>
            <p class="font-weight-bold">PERSU Goals® offers a complete system where this assessment is fully
                integrated. It
                comes in an interactive digital tool with a
                step-by-step guide not only for pursuing your life goals but your holistic, sustainable personal growth.
            </p>
        </v-card>

        <v-btn size="x-large" color="#F57C00" dark block>
            <span class="text-white text-h5 font-weight-bold">Start Your Journey with PERSU Goals® Now</span>
        </v-btn>

        <div class="text-center mt-8">
            <p @click="downloadResultsPdf">
                <span class="text-h5 grey--text text--darken-2 cursor-pointer"><u>SHARE YOUR RESULTS</u></span>
            </p>
        </div>

        <div class="text-center mt-16 text-light-grey">
            <v-img src="@/assets/PERSU Goals Icon (Black).png" contain height="30" width="auto"></v-img>
            <p class="text-caption">www.persugoals.com</p>
            <p class="text-caption">© 2025 PERSU Goals | Jean Paul Peteza | London, UK</p>
            <p class="text-caption">All rights reserved.</p>
        </div>

    </v-container>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import RadarChart from './RadarChart.vue'
import Spirituality from '@/assets/Spirituality.png'
import Education from '@/assets/Education.png'
import Lifestyle from '@/assets/Lifestyle.png'
import Finance from '@/assets/Finance.png'
import Career from '@/assets/Career.png'
import Avocation from '@/assets/Avocation.png'
import Relationships from '@/assets/Relationships.png'
import Entrepreneurship from '@/assets/Entrepreneurship.png'

export default {
    name: 'ResultsPage',
    components: {
        RadarChart,
    },
    props: {
        scores: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            themes: [
                { name: 'Spirituality', icon: Spirituality, description: 'Prioritising mental health and nurturing a growth mindset.' },
                { name: 'Education', icon: Education, description: 'Constantly building knowledge, experiences, skills, and relevant qualifications.' },
                { name: 'Lifestyle', icon: Lifestyle, description: 'Developing healthy, active, and balanced lifestyle through sustainable good habits.' },
                { name: 'Finances', icon: Finance, description: 'Maintaining positive outlook, behaviour, and ambitions leading towards financial freedom.' },
                { name: 'Career', icon: Career, description: 'Pursuing a career which you enjoy doing and where you excel and earn more.' },
                { name: 'Avocation', icon: Avocation, description: 'Planning extracurricular activities in order to live life to the fullest.' },
                { name: 'Relationships', icon: Relationships, description: 'Intentionally nurturing and attracting healthy, positive relationships.' },
                { name: 'Entrepreneurship', icon: Entrepreneurship, description: 'A business that has a vision and mission that resonate with you.' },
            ],
            isDownloading: false,
        }
    },
    methods: {
        async downloadResultsPdf() {
            this.isDownloading = true;
            const cardElement = this.$refs.resultsCard?.$el;
            if (!cardElement) {
                this.isDownloading = false;
                alert("Could not find results to download.");
                return;
            }

            try {
                const canvas = await html2canvas(cardElement, { scale: 2 });
                const imgData = canvas.toDataURL('image/png');

                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('PERSU-SELFCARE-Results.pdf');
            } catch (error) {
                console.error("Failed to generate PDF:", error);
                alert("Sorry, there was an error creating the PDF.");
            } finally {
                this.isDownloading = false;
            }
        }
    }
}
</script>
<style scoped>
u {
    text-decoration-color: #F57C00;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
}

.orange-text {
    color: #F57C00;
}

.m-negative {
    margin-top: -6px;
    margin-bottom: -10px;
}

.text-light-grey {
    color: #9e9e9e;
}
</style>