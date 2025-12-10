export type Category = 'Buttons' | 'Forms' | 'Cards' | 'Data Display';

export interface ComponentInfo {
  id: number;
  name: string;
  description: string;
  category: Category;
  component: React.ComponentType;
}


export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}