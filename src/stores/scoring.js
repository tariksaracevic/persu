const questions = [
  { theme: 'Spirituality', weights: { Spirituality: 0.1485, Career: 0.0023, Education: 0.0014, Avocation: 0.0012, Lifestyle: 0.0009, Relationships: 0.0005, Finances: 0.0012, Entrepreneurship: 0.0004 } },
  { theme: 'Spirituality', weights: { Spirituality: 0.1485, Career: -0.0045, Education: -0.0027, Avocation: -0.0024, Lifestyle: -0.0018, Relationships: -0.0010, Finances: -0.0024, Entrepreneurship: -0.0008 } },
  { theme: 'Spirituality', weights: { Spirituality: 0.1485, Education: 0.0014, Avocation: 0.0012, Relationships: 0.0012, Entrepreneurship: 0.0004 } },
  { theme: 'Spirituality', weights: { Spirituality: 0.1485, Career: 0.0068, Education: 0.0041, Avocation: 0.0036, Lifestyle: 0.0027, Relationships: 0.0015, Finances: 0.0035, Entrepreneurship: 0.0013 } },
  { theme: 'Education', weights: { Education: 0.0540, Avocation: 0.0024, Lifestyle: 0.0018, Entrepreneurship: 0.0008 } },
  { theme: 'Education', weights: { Education: 0.0540, Avocation: 0.0012, Lifestyle: 0.0009, Entrepreneurship: 0.0004 } },
  { theme: 'Education', weights: { Education: 0.0540, Avocation: 0.0027, Lifestyle: 0.0024, Relationships: 0.0010, Finances: 0.0024 } },
  { theme: 'Lifestyle', weights: { Spirituality: 0.0044, Education: -0.0338, Avocation: -0.0012, Finances: -0.0012, Entrepreneurship: -0.0004 } },
  { theme: 'Lifestyle', weights: { Spirituality: 0.0044, Career: -0.0045, Education: -0.0675, Avocation: -0.0024, Lifestyle: -0.0018, Relationships: -0.0010, Finances: -0.0024, Entrepreneurship: -0.0008 } },
  { theme: 'Lifestyle', weights: { Spirituality: 0.0044, Education: 0.0338, Lifestyle: 0.0009, Finances: 0.0012, Entrepreneurship: 0.0004 } },
  { theme: 'Lifestyle', weights: { Spirituality: 0.0044, Education: 0.0338, Lifestyle: 0.0009, Relationships: 0.0005, Finances: 0.0012, Entrepreneurship: 0.0004 } },
  { theme: 'Finances', weights: { Spirituality: 0.044, Career: 0, Education: 0, Avocation: 0, Lifestyle: 0, Relationships: 0, Finances: 0, Entrepreneurship: 0 } },
  { theme: 'Finances', weights: { Finances: 0.0180, Finances: 0.0012, Entrepreneurship: 0.0004 } },
  { theme: 'Finances', weights: { Spirituality: 0.0044, Finances: 0.0180, Finances: 0.0012, Entrepreneurship: 0.0004 } },
  { theme: 'Finances', weights: { Spirituality: 0.0044, Career: 0.0023, Education: 0.0014, Finances: 0.0180, Relationships: 0.0005, Finances: 0.0012, Entrepreneurship: 0.0004 } },
  { theme: 'Finances', weights: { Spirituality: 0.0044, Finances: 0.0540, Relationships: 0.0015, Finances: 0.0035, Entrepreneurship: 0.0013 } },
  { theme: 'Finances', weights: { Spirituality: 0.0044, Education: 0.0014, Finances: 0.0180, Finances: 0.0012, Entrepreneurship: 0.0004 } },
  { theme: 'Career', weights: { Spirituality: 0.0044, Career: 0.0023, Education: 0.0014, Career: 0.0180, Relationships: 0.0005, Finances: 0.0012, Entrepreneurship: 0.0004 } },
  { theme: 'Career', weights: { Career: 0, Entrepreneurship: 0 } },
  { theme: 'Career', weights: { Education: 0.0014, Avocation: 0.0012, Career: 0.0180, Entrepreneurship: 0.0004 } },
  { theme: 'Career', weights: { Career: 0.0360, Entrepreneurship: 0.0008 } },
  { theme: 'Avocation', weights: { Spirituality: 0.0044, Career: 0.0045, Education: 0.0027, Avocation: 0.0300, Finances: 0.0024 } },
  { theme: 'Avocation', weights: { Avocation: 0.0450 } },
  { theme: 'Avocation', weights: { Spirituality: 0.0044, Avocation: 0.0450, Entrepreneurship: 0.0013 } },
  { theme: 'Relationships', weights: { Spirituality: 0.0044, Relationships: 0.1800, Entrepreneurship: 0.0013 } },
  { theme: 'Relationships', weights: { Spirituality: 0.0044, Relationships: 0.1200, Entrepreneurship: 0.0008 } },
  { theme: 'Relationships', weights: { Spirituality: 0.0044, Lifestyle: 0.0009, Relationships: 0.0600, Entrepreneurship: 0.0004 } },
  { theme: 'Entrepreneurship', weights: { Entrepreneurship: 0.0600 } },
  { theme: 'Entrepreneurship', weights: { Entrepreneurship: 0.0900 } },
  { theme: 'Entrepreneurship', weights: { Entrepreneurship: 0.0900 } },
];

const themeMaxPoints = {
  Spirituality: 0.660,
  Career: 0.240,
  Education: 0.540,
  Avocation: 0.150,
  Lifestyle: 0.450,
  Relationships: 0.600,
  Finances: 0.540,
  Entrepreneurship: 0.300,
};

export const calculateScores = (answers) => {
  const themeScores = {
    Spirituality: 0,
    Career: 0,
    Education: 0,
    Avocation: 0,
    Lifestyle: 0,
    Relationships: 0,
    Finances: 0,
    Entrepreneurship: 0,
  };

  answers.forEach((answer, index) => {
    if (answer === null || answer === undefined) return;

    const question = questions[index];
    if (!question) return;

    for (const theme in question.weights) {
      if (themeScores.hasOwnProperty(theme)) {
        themeScores[theme] += (question.weights[theme] / 3) * answer;
      }
    }
  });

  const themePercentages = {};
  for (const theme in themeScores) {
    if (themeMaxPoints[theme]) {
      const percentage = (themeScores[theme] / themeMaxPoints[theme]) * 100;
      themePercentages[theme] = Math.round(percentage);
    }
  }

  return themePercentages;
}; 