import { NewsArticle } from '../types';
import { MLFakeNewsDetector } from './ml/mlFakeNewsDetector';
import { createHeuristicDetector } from './heuristicDetector';

export class HybridFakeNewsDetector {
  private mlDetector: MLFakeNewsDetector;
  private heuristicDetector: any; // Using previous heuristic detector
  private sensitivity: number;

  constructor(
    sensitivity: number = 0.5,
    customKeywords: string[] = []
  ) {
    this.sensitivity = sensitivity;
    this.mlDetector = new MLFakeNewsDetector(sensitivity);
    this.heuristicDetector = createHeuristicDetector({
      sensitivity,
      customKeywords
    });
  }

  public analyzeArticle(article: NewsArticle) {
    // Get results from both detectors
    const mlResult = this.mlDetector.analyzeArticle(article);
    const heuristicResult = this.heuristicDetector.analyzeArticle(article);

    // Combine scores with weights
    const mlWeight = 0.7; // Give more weight to ML prediction
    const heuristicWeight = 0.3;

    const combinedScore = 
      (mlResult.trustScore * mlWeight) + 
      (heuristicResult.trustScore * heuristicWeight);

    return {
      trustScore: combinedScore,
      confidence: mlResult.confidence,
      explanation: [
        ...mlResult.explanation,
        ...heuristicResult.explanation
      ]
    };
  }
}

// Helper function to create detector instance
export const createFakeNewsDetector = (
  preferences: { 
    sensitivity: number; 
    customKeywords: string[];
  }
): HybridFakeNewsDetector => {
  return new HybridFakeNewsDetector(
    preferences.sensitivity,
    preferences.customKeywords
  );
};