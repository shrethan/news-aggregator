export interface TrainingExample {
  text: string;
  category: 'reliable' | 'unreliable';
}

// Sample training data
export const trainingData: TrainingExample[] = [
  {
    text: 'New study shows significant breakthrough in cancer research',
    category: 'reliable'
  },
  {
    text: 'Scientists discover potential cure for common cold',
    category: 'reliable'
  },
  {
    text: 'Stock market shows steady growth amid economic reforms',
    category: 'reliable'
  },
  {
    text: 'SHOCKING: You won\'t believe what scientists found in your food!',
    category: 'unreliable'
  },
  {
    text: 'Secret government conspiracy EXPOSED! What they don\'t want you to know',
    category: 'unreliable'
  },
  {
    text: 'Miracle cure for all diseases discovered by anonymous researcher',
    category: 'unreliable'
  },
];