/**
 * Types representing the high-end travel agency models.
 */

export interface Destination {
  id: string;
  title: string;
  subtitle: string;
  region: string;
  description: string;
  image: string;
  priceFrom: string;
  duration: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  destination: string;
  rating: number;
}

export interface ExperienceFeature {
  title: string;
  description: string;
}

export interface BookingState {
  destinationId?: string;
  isOpen: boolean;
}
