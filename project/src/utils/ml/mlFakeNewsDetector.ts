import { NaiveBayesClassifier } from './naiveBayes';
import { trainingData } from './trainingData';
import { NewsArticle } from '../../types';

export class MLFakeNewsDetector {
  private classifier: NaiveBayesClassifier;
  private sensitivity: number;

  constructor(sensitivity: number = 0.5) {
    this.classifier = new NaiveBayesClassifier();
    this.sensitivity = sensitivity;
    this.trainClassifier();
  }

  private trainClassifier(): void {
    trainingData.forEach(example => {
      this.classifier.train(example.text, example.category);
    });
  }

  public analyzeArticle(article: NewsArticle): {
    trustScore: number;
    confidence: number;
    explanation: string[];
  } {
    const content = `${article.title} ${article.description}`;
    const prediction = this.classifier.predict(content);
    
    // Convert prediction to trust score
    const baseScore = prediction.category === 'reliable' ? 
      prediction.probability : 
      1 - prediction.probability;
    
    // Apply sensitivity adjustment
    const trustScore = Math.max(0, Math.min(1, baseScore * (2 - this.sensitivity)));
    
    return {
      trustScore,
      confidence: prediction.probability,
      explanation: this.generateExplanation(trustScore, prediction)
    };
  }

  private generateExplanation(
    trustScore: number,
    prediction: { category: string; probability: number }
  ): string[] {
    const explanation: string[] = [];
    
    if (trustScore < 0.4) {
      explanation.push('This article shows strong indicators of unreliable content');
      explanation.push(`Classification confidence: ${(prediction.probability * 100).toFixed(1)}%`);
    } else if (trustScore < 0.7) {
      explanation.push('This article shows some indicators of potentially misleading content');
      explanation.push(`Classification confidence: ${(prediction.probability * 100).toFixed(1)}%`);
    } else {
      explanation.push('This article appears to be from a reliable source');
      explanation.push(`Classification confidence: ${(prediction.probability * 100).toFixed(1)}%`);
    }

    return explanation;
  }
}