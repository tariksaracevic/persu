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
                <p class="mb-6">
                    Below is your personal sustainability compass which measures your alignment with the 8 key personal
                    sustainability principles, pointing you where you are improving and where to improve on.
                </p>
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
                        <div style="height: 550px; width: 550px">
                            <RadarChart :scores="scores" />
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-card class="pa-6 my-8 text-center" flat color="grey-lighten-4">
            <p>We hope your assessment results resonate with you. Now you know what areas of your life you should
                maintain or
                improve. Bear in mind that these results are not forever. You have the choice and power to start making
                or
                sustaining progress in your life. Your assessment results can change in 3-12 months, so we recommend
                taking it
                at least every quarter to keep yourself on track on your personal development and sustainability
                journey.</p>
            <p class="font-weight-bold mt-4">SHARE your progress or SEND a copy of your results to your email today so
                you'll
                have reference for your future assessments.</p>

            <div class="text-center mt-8">
                <v-btn size="x-large" @click="downloadResultsPdf" :loading="isDownloading">
                    <span class="text-h5 grey--text text--darken-2">DOWNLOAD</span>
                </v-btn>
            </div>
        </v-card>


        <div class="text-center my-8">
            <p class="text-h5 font-weight-bold mb-2">Now, you must be wondering...</p>
            <p class="text-h6 font-weight-regular"><i>"How do I interpret and use my results moving forward?"</i></p>
            <p class="text-h6 font-weight-regular"><i>"How can I improve my score?"</i></p>
            <p class="text-h6 font-weight-regular"><i>"Where can I find guidance about PERSU Goals®."</i></p>
        </div>

        <div class="text-center mb-8">
            <p class="text-h5 font-weight-bold">Good that you asked, 'coz we're happy to help you on your next steps.
            </p>
            <p class="text-h4 font-weight-bold"><u>Everything</u> is in your <span class="orange-text">PERSUer's
                    Pack!</span></p>
        </div>

        <v-btn size="x-large" color="#F57C00" dark block>
            <span class="text-white text-h5 font-weight-bold">I WANT TO KNOW MORE</span>
        </v-btn>

        <div class="text-center mt-12 text-light-grey">
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