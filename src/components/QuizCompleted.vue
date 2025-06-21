<template>
    <div style="background-color: #f1f1f1; min-height: 100vh; display: flex; flex-direction: column;">
        <!-- Header -->
        <v-toolbar color="black" density="default" dark>
            <v-toolbar-title class="font-weight-bold ml-4 text-h4">The SELFCARE Assessment</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-img src="@/assets/PERSU Goals Logo (For Dark Background).png" contain max-height="250" max-width="150"
                class="mr-4"></v-img>
        </v-toolbar>

        <!-- Quiz Completed Content -->
        <div class="flex-grow-1 d-flex align-center justify-center pa-4">
            <v-container class="text-center">
                <h1 class="text-h4 font-weight-bold my-8">
                    Congratulations!<br>
                    You've now completed your
                    <u>first step</u> to personal sustainability.
                </h1>

                <v-card class="pa-6 my-12" rounded="xl" flat>
                    <p class="font-weight-bold" style="color: #F57C00;">BEFORE WE DIVE RIGHT INTO YOUR ASSESSMENT
                        RESULTS, JUST A
                        GENTLE REMINDER:</p>

                    <div class="text-h5 font-weight-regular my-6">
                        <p><i>
                                The results you get from this assessment is only designed to <span
                                    class="font-weight-bold">validate </span>
                                <u>where</u> you are now in life and <span class="font-weight-bold">inform</span> you on
                                your <u>next
                                    steps</u>.
                            </i>
                        </p>
                        <br>
                        <p><i>
                                They DO NOT define <u>who</u> you are and <u>what</u> you will become, your
                                <span class="font-weight-bold">response</span> and <span
                                    class="font-weight-bold">actions
                                </span>
                                <u>after</u> this assessment DO.
                            </i>
                        </p>
                    </div>
                    <v-btn size="x-large" color="#000" dark rounded="lg" @click="$emit('show-results')">
                        <span class="text-white font-weight-bold">I'M READY FOR MY RESULTS</span>
                    </v-btn>
                </v-card>
            </v-container>
        </div>

        <!-- Footer -->
        <div class="pa-4" style="background-color: #dfdcdb;">
            <div class="text-center">
                <v-img src="@/assets/PERSU Goals Icon (Black).png" contain height="30" class="mb-2 mx-auto"></v-img>
                <p class="text-caption" style="color: #a2a2a2;">© 2025 PERSU Goals | London, UK | All rights reserved.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuizCompleted',
    emits: ['show-results'],
}
</script>

<style scoped>
u {
    text-decoration-color: #F57C00;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
}
</style>