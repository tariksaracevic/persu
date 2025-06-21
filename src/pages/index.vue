<template>
  <div>
    <QuizSheet v-if="!quizState.submitted" @submit-quiz="handleQuizSubmit" />
    <QuizCompleted v-else-if="!quizState.showResults" @show-results="handleShowResults" />
    <ResultsPage v-else :scores="quizState.scores" />
  </div>
</template>

<script>
import QuizSheet from '@/components/QuizSheet.vue'
import QuizCompleted from '@/components/QuizCompleted.vue'
import ResultsPage from '@/components/ResultsPage.vue'
import { calculateScores } from '@/stores/scoring.js'

export default {
  name: 'HomePage',
  components: {
    QuizSheet,
    QuizCompleted,
    ResultsPage,
  },
  data() {
    return {
      quizState: {
        submitted: false,
        showResults: false,
        answers: [],
        scores: {},
      }
    }
  },
  methods: {
    handleQuizSubmit(answers) {
      this.quizState.answers = answers;
      this.quizState.scores = calculateScores(answers);
      this.quizState.submitted = true;
    },
    handleShowResults() {
      this.quizState.showResults = true;
    }
  }
}
</script>