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

export const calculateScores = (answers) => {
  // Ensure we are working with numbers, defaulting null/undefined to 0.
  const numAnswers = answers.map(a => (a === null || a === undefined) ? 0 : Number(a));

  const rawScores = {
    Spirituality: 0,
    Education: 0,
    Lifestyle: 0,
    Finances: 0,
    Career: 0,
    Avocation: 0,
    Relationships: 0,
    Entrepreneurship: 0,
  };

  // Calculate raw scores based on the provided JS file logic
  rawScores.Spirituality =
    numAnswers[0] * 0.0495 + numAnswers[1] * 0.0495 + numAnswers[2] * 0.0495 + numAnswers[3] * 0.0495 +
    numAnswers[7] * 0.0015 + numAnswers[8] * 0.0015 + numAnswers[9] * 0.0015 + numAnswers[10] * 0.0015 + numAnswers[11] * 0.0015 +
    numAnswers[13] * 0.0015 + numAnswers[14] * 0.0015 + numAnswers[15] * 0.0015 + numAnswers[16] * 0.0015 + numAnswers[17] * 0.0015 +
    numAnswers[21] * 0.0015 + numAnswers[23] * 0.0015 + numAnswers[24] * 0.0015 + numAnswers[25] * 0.0015 + numAnswers[26] * 0.0015;

  rawScores.Education =
    numAnswers[4] * 0.0540 + numAnswers[5] * 0.0540 + numAnswers[6] * 0.0540 +
    numAnswers[0] * 0.0023 + numAnswers[1] * 0.0023 + numAnswers[3] * 0.0023 +
    numAnswers[8] * 0.0023 + numAnswers[11] * 0.0023 + numAnswers[14] * 0.0023 +
    numAnswers[17] * 0.0023 + numAnswers[21] * 0.0023;

  rawScores.Lifestyle =
    numAnswers[7] * 0.0338 + numAnswers[8] * 0.0338 + numAnswers[9] * 0.0338 + numAnswers[10] * 0.0338 +
    numAnswers[0] * 0.0014 + numAnswers[1] * 0.0014 + numAnswers[2] * 0.0014 + numAnswers[3] * 0.0014 +
    numAnswers[6] * 0.0014 + numAnswers[11] * 0.0014 + numAnswers[14] * 0.0014 + numAnswers[16] * 0.0014 +
    numAnswers[17] * 0.0014 + numAnswers[19] * 0.0014 + numAnswers[21] * 0.0014;

  rawScores.Finances =
    numAnswers[11] * 0.0180 + numAnswers[12] * 0.0180 + numAnswers[13] * 0.0180 + numAnswers[14] * 0.0180 +
    numAnswers[15] * 0.0180 + numAnswers[16] * 0.0180 +
    numAnswers[0] * 0.0012 + numAnswers[1] * 0.0012 + numAnswers[2] * 0.0012 + numAnswers[3] * 0.0012 +
    numAnswers[4] * 0.0012 + numAnswers[5] * 0.0012 + numAnswers[6] * 0.0012 + numAnswers[7] * 0.0012 +
    numAnswers[8] * 0.0012 + numAnswers[19] * 0.0012;

  rawScores.Career =
    numAnswers[17] * 0.0180 + numAnswers[18] * 0.0180 + numAnswers[19] * 0.0180 + numAnswers[20] * 0.0180 +
    numAnswers[0] * 0.0009 + numAnswers[1] * 0.0009 + numAnswers[3] * 0.0009 + numAnswers[4] * 0.0009 +
    numAnswers[5] * 0.0009 + numAnswers[8] * 0.0009 + numAnswers[9] * 0.0009 + numAnswers[10] * 0.0009 +
    numAnswers[26] * 0.0009;

  rawScores.Avocation =
    numAnswers[21] * 0.0150 + numAnswers[22] * 0.0150 + numAnswers[23] * 0.0150 +
    numAnswers[0] * 0.0005 + numAnswers[1] * 0.0005 + numAnswers[3] * 0.0005 +
    numAnswers[6] * 0.0005 + numAnswers[8] * 0.0005 + numAnswers[10] * 0.0005 +
    numAnswers[11] * 0.0005 + numAnswers[14] * 0.0005 + numAnswers[15] * 0.0005 +
    numAnswers[17] * 0.0005 + numAnswers[21] * 0.0005;

  rawScores.Relationships =
    numAnswers[24] * 0.0600 + numAnswers[25] * 0.0600 + numAnswers[26] * 0.0600 +
    numAnswers[0] * 0.0012 + numAnswers[1] * 0.0012 + numAnswers[2] * 0.0012 + numAnswers[3] * 0.0012 +
    numAnswers[6] * 0.0012 + numAnswers[7] * 0.0012 + numAnswers[8] * 0.0012 + numAnswers[9] * 0.0012 +
    numAnswers[10] * 0.0012 + numAnswers[11] * 0.0012 + numAnswers[12] * 0.0012 + numAnswers[13] * 0.0012 +
    numAnswers[14] * 0.0012 + numAnswers[15] * 0.0012 + numAnswers[16] * 0.0012 + numAnswers[17] * 0.0012 +
    numAnswers[21] * 0.0012;

  rawScores.Entrepreneurship =
    numAnswers[27] * 0.0300 + numAnswers[28] * 0.0300 + numAnswers[29] * 0.0300 +
    numAnswers[0] * 0.0004 + numAnswers[1] * 0.0004 + numAnswers[2] * 0.0004 + numAnswers[3] * 0.0004 +
    numAnswers[4] * 0.0004 + numAnswers[5] * 0.0004 + numAnswers[7] * 0.0004 + numAnswers[8] * 0.0004 +
    numAnswers[9] * 0.0004 + numAnswers[10] * 0.0004 + numAnswers[11] * 0.0004 + numAnswers[12] * 0.0004 +
    numAnswers[13] * 0.0004 + numAnswers[14] * 0.0004 + numAnswers[15] * 0.0004 + numAnswers[16] * 0.0004 +
    numAnswers[17] * 0.0004 + numAnswers[18] * 0.0004 + numAnswers[19] * 0.0004 + numAnswers[20] * 0.0004 +
    numAnswers[23] * 0.0004 + numAnswers[24] * 0.0004 + numAnswers[25] * 0.0004 + numAnswers[26] * 0.0004;

  // The definitive max points, taken directly from your calculation.js file
  const themeMaxPoints = {
    Spirituality: 0.66,
    Career: 0.24,
    Education: 0.54,
    Avocation: 0.15,
    Lifestyle: 0.45,
    Relationships: 0.60,
    Finances: 0.36,
    Entrepreneurship: 0.30,
  };

  const themePercentages = {};
  for (const theme in rawScores) {
    if (themeMaxPoints.hasOwnProperty(theme)) {
      // Replicating the logic from your file:
      // 1. Calculate percentage directly from the un-rounded raw score.
      const percentage = (rawScores[theme] / themeMaxPoints[theme]) * 100;
      // 2. Round the final percentage and subtract 100.
      themePercentages[theme] = Math.round(percentage) - 100;
    }
  }

  return themePercentages;
}; 