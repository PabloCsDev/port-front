export interface StackResponse {
  categories: StackCategory[];
  meta: StackMeta;
}

export interface StackCategory {
  id: string;
  label: string;
  items: StackItem[];
}

export interface StackItem {
  name: string;
  level: 'production' | 'learning';
}

export interface StackMeta {
  alwaysLearning: boolean;
  learningMessage: string;
}
