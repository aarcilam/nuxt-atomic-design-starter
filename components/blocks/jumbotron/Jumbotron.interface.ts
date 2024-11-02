export interface JumbotronInterface {
  title: string;
  description: string;
  buttonText?: string; // Agregado, opcional
  buttonLink?: string;  // Agregado, opcional
  alignment?: 'left' | 'center' | 'right'; // Agregado, opcional
  height?: string; // Agregado, opcional
}
