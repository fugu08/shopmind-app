tsx
export interface Purchase {
  id: string;
  name: string;
  amount: number;
  category: string;
  date: string;
  isImpulse?: boolean;
  mood?: string;
}

export interface Insight {
  id: number;
  title: string;
  description: string;
  type: 'pattern' | 'emotional' | 'saving';
  severity: 'low' | 'medium' | 'high';
}
