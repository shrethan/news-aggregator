export const analyzeTitleSensationalism = (title: string): number => {
  const sensationalWords = [
    'shocking', 'unbelievable', 'mind-blowing', 'you won\'t believe',
    'incredible', 'revolutionary', 'secret', 'they don\'t want you to know',
    'will change everything', 'never seen before'
  ];
  
  let score = 1.0;
  const titleLower = title.toLowerCase();
  
  sensationalWords.forEach(word => {
    if (titleLower.includes(word.toLowerCase())) {
      score -= 0.2;
    }
  });

  // Check for ALL CAPS sections
  const capsRatio = title.split('').filter(char => char === char.toUpperCase()).length / title.length;
  if (capsRatio > 0.5) {
    score -= 0.2;
  }

  // Check for excessive punctuation
  const exclamationCount = (title.match(/!/g) || []).length;
  if (exclamationCount > 1) {
    score -= 0.1 * exclamationCount;
  }
  
  return Math.max(0, score);
};

export const analyzeSourceCredibility = (source: string): number => {
  const credibleSources = {
    'reuters': 0.95,
    'associated press': 0.95,
    'bbc': 0.9,
    'the guardian': 0.85,
    'nature': 0.95,
    'science': 0.95,
    'bloomberg': 0.85,
    'washington post': 0.85,
    'new york times': 0.85
  };

  const sourceLower = source.toLowerCase();
  return credibleSources[sourceLower as keyof typeof credibleSources] || 0.5;
};

export const calculateCredibilityScore = (
  title: string,
  source: string,
): number => {
  const titleScore = analyzeTitleSensationalism(title);
  const sourceScore = analyzeSourceCredibility(source);
  
  // Weight source credibility more heavily than title analysis
  return (titleScore * 0.4 + sourceScore * 0.6);
};

export const analyzeArticle = async (article: any): Promise<void> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
};