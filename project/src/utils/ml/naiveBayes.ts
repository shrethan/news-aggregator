// Simple Naive Bayes implementation for text classification
export class NaiveBayesClassifier {
  private vocabularyCount: Map<string, number>;
  private classCount: Map<string, number>;
  private wordFrequencies: Map<string, Map<string, number>>;
  private totalDocs: number;

  constructor() {
    this.vocabularyCount = new Map();
    this.classCount = new Map();
    this.wordFrequencies = new Map();
    this.totalDocs = 0;
  }

  private tokenize(text: string): string[] {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 2);
  }

  public train(text: string, category: string): void {
    const tokens = this.tokenize(text);
    this.totalDocs++;
    
    // Update class count
    this.classCount.set(
      category, 
      (this.classCount.get(category) || 0) + 1
    );

    // Initialize word frequencies for this category
    if (!this.wordFrequencies.has(category)) {
      this.wordFrequencies.set(category, new Map());
    }

    // Update word frequencies
    tokens.forEach(token => {
      // Update vocabulary count
      this.vocabularyCount.set(
        token,
        (this.vocabularyCount.get(token) || 0) + 1
      );

      // Update word frequency for this category
      const categoryFreq = this.wordFrequencies.get(category)!;
      categoryFreq.set(
        token,
        (categoryFreq.get(token) || 0) + 1
      );
    });
  }

  public predict(text: string): { category: string; probability: number } {
    const tokens = this.tokenize(text);
    const scores = new Map<string, number>();
    
    // Calculate probability for each category
    this.classCount.forEach((count, category) => {
      // Prior probability P(category)
      let score = Math.log(count / this.totalDocs);
      
      // Calculate likelihood P(word|category) for each word
      tokens.forEach(token => {
        const categoryFreq = this.wordFrequencies.get(category);
        const wordFreqInCategory = categoryFreq?.get(token) || 0;
        const totalWordsInCategory = Array.from(categoryFreq?.values() || [])
          .reduce((sum, freq) => sum + freq, 0);
        
        // Using Laplace smoothing
        const likelihood = (wordFreqInCategory + 1) / 
          (totalWordsInCategory + this.vocabularyCount.size);
        
        score += Math.log(likelihood);
      });
      
      scores.set(category, score);
    });

    // Find category with highest probability
    let maxScore = -Infinity;
    let bestCategory = '';
    
    scores.forEach((score, category) => {
      if (score > maxScore) {
        maxScore = score;
        bestCategory = category;
      }
    });

    // Convert log probability to regular probability
    const probability = Math.exp(maxScore);
    
    return {
      category: bestCategory,
      probability: probability
    };
  }
}