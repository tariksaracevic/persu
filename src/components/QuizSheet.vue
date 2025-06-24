<template>
    <div style="background-color: #f1f1f1; min-height: 100vh; display: flex; flex-direction: column;">
        <!-- Header -->
        <v-toolbar color="black" density="default" dark>
            <v-toolbar-title class="font-weight-bold ml-4 text-h4">The SELFCARE Assessment</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-img src="@/assets/PERSU Goals Logo (For Dark Background).png" contain max-height="250" max-width="150"
                class="mr-4"></v-img>
        </v-toolbar>

        <!-- Existing Quiz Content -->
        <v-container fluid class="flex-grow-1 d-flex align-center justify-center pa-4">
            <v-card flat rounded="xl" class="pa-md-8 pa-4" max-width="800" width="100%">
                <div class="text-center">
                    <p class="text-h6 font-weight-regular" style="color: #a2a2a2;">
                        Question {{ currentQuestionIndex + 1 }}
                    </p>
                    <h2 class="text-h4 font-weight-bold my-4">{{ questions[currentQuestionIndex] }}</h2>
                </div>

                <v-item-group v-model="answers[currentQuestionIndex]" mandatory>
                    <v-row justify="center" class="my-md-8 my-4">
                        <v-col v-for="option in ratingOptions" :key="option.value" class="text-center" cols="auto">
                            <v-item v-slot="{ isSelected, toggle }">
                                <v-btn :color="option.color" icon size="x-large" class="text-h5" @click="toggle"
                                    :style="isSelected ? 'border: 3px solid black' : ''">
                                    <span :class="isSelected ? 'text-white' : 'text-white'">{{ option.value }}</span>
                                </v-btn>
                                <p class="mt-2 text-light-grey text-caption font-weight-medium">{{ option.label }}</p>
                            </v-item>
                        </v-col>
                    </v-row>
                </v-item-group>

                <div class="d-flex justify-space-between align-center">
                    <v-btn :disabled="currentQuestionIndex === 0" @click="prevQuestion" size="large" rounded="lg"
                        variant="tonal">
                        &lt; BACK
                    </v-btn>

                    <v-btn v-if="currentQuestionIndex < questions.length - 1" @click="nextQuestion" color="black"
                        size="large" rounded="lg" :disabled="answers[currentQuestionIndex] === null">
                        NEXT &gt;
                    </v-btn>

                    <v-btn v-else @click="finishQuiz" color="black" size="large" rounded="lg"
                        :disabled="answers[currentQuestionIndex] === null">
                        FINISH
                    </v-btn>
                </div>
            </v-card>
        </v-container>

        <!-- Footer -->
        <div class="pa-4" style="background-color: #dfdcdb;">
            <div class="text-center">
                <v-img src="@/assets/PERSU Goals Icon (Grey) 1.png" contain height="30" class="mb-2 mx-auto"></v-img>
                <p class="text-caption" style="color: #a2a2a2;">© 2025 PERSU Goals | London, UK | All rights reserved.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuizSheet',
    emits: ['submit-quiz'],
    data() {
        return {
            currentQuestionIndex: 0,
            answers: Array(30).fill(null),
            ratingOptions: [
                { value: -3, label: 'Very Poor', color: '#cd2727' },
                { value: -2, label: 'Poor', color: '#e05e5e' },
                { value: -1, label: 'Slightly Poor', color: '#f79d9d' },
                { value: 0, label: 'Neutral or N/A', color: '#dfdcdb' },
                { value: 1, label: 'Slightly Good', color: '#97e086' },
                { value: 2, label: 'Good', color: '#66ba52' },
                { value: 3, label: 'Very Good', color: '#4c9f38' },
            ],
            questions: [
                'I look after my mental health regularly.',
                'I\'m happy the way I handle my emotions in any situation.',
                'I seek counseling or accountability from a trusted friend, mentor, or a coach to keep my mindset and behaviour in check.',
                'I\'m able to focus well and be mindful as I do my work and personal activities.',
                'I\'ve enhanced my personal and professional value by learning new skills from both free and paid sources.',
                'I\'ve obtained or am working toward the degree, license, or qualifications needed to advance my career or business.',
                'I\'m grateful to apply what I\'ve learned, aligning it with my work and personal life, making both easier and more enjoyable.',
                'I live life to the fullest by wisely managing my time around priorities aligned with my vision and sustainability goals.',
                'I\'m happy with my physical health, fitness and attributes (e.g. weight), achieved through a sustainable routine of exercise and proper nutrition.',
                'I feel genuinely confident in myself, having worked hard to discover, accept, and develop my authentic personality and unique character.',
                'My hobbies support a healthy, active lifestyle while enhancing my intellect, creativity, and social skills at the same time.',
                'I\'ve developed good financial habits to save for the future and maintain a healthy cash flow.',
                'I\'ve made or explored new investments (e.g., real estate, stocks, etc.) in the past 6-12 months as part of my financial plans.',
                'I\'m contributing to health insurance, life insurance, and pension plans for emergencies and retirement.',
                'I\'m grateful to afford what I need and want within my means, bringing convenience, productivity, and enjoyment to myself (and dependents).',
                'I allocate a portion of my income to charity and generosity, finding fulfillment in helping others and making a difference.',
                'I\'m on track to achieving or have achieved financial independence, providing freedom and security.',
                'I maintain work-life harmony and effectively manage stress to keep it from impacting my personal life.',
                'I seek leadership advice and mentorship to guide my career planning and advancement.',
                'I\'ve achieved my major career goals, such as a role change, promotion, bonus, or salary increase, set within the last 12 months.',
                'I feel accomplished and fulfilled in my career, reflected in completed projects, awards, recognitions, and positive feedback.',
                'I always plan my travels early and practically, allowing me to fully enjoy them without straining my finances and other priorities in life.',
                'I try new activities at least once a month, whether spontaneously or from a bucket list, to fuel my creativity, curiosity, and competitiveness.',
                'I feel fulfilled knowing that I\'m giving back to the world through social and environmental advocacies or charitable activities.',
                'I\'m happy and content in my love life, actively investing in personal growth and nurturing my relationship with my partner.',
                'I cultivate and sustain meaningful, healthy relationships with my family and friends.',
                'I actively participate in social activities and connect with communities of like-minded individuals.',
                'I challenge myself to bring my business ideas to life, embracing the growth that comes with developing them, regardless of the outcome.',
                'I am proud of my business\' achievements over the past 6-12 months and its positive contributions to the economy, society, and environment.',
                'I\'ve increased my passive or recurring income compared to 6-12 months ago, bringing me closer to financial sustainability.'
            ]
        }
    },
    methods: {
        nextQuestion() {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.currentQuestionIndex++
            }
        },
        prevQuestion() {
            if (this.currentQuestionIndex > 0) {
                this.currentQuestionIndex--
            }
        },
        finishQuiz() {
            this.$emit('submit-quiz', this.answers)
        },
    }
}
</script>

<style scoped>
.v-list-item {
    border-bottom: 1px solid #e0e0e0;
}

.v-container {
    background-color: #f1f1f1;
}

.text-light-grey {
    color: #a2a2a2;
}
</style>