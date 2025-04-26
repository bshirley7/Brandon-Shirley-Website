export interface Testimonial {
  quote: string | string[];
  author: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "This is a testimonial quote that highlights your skills and impact.",
    author: "Client Name",
    title: "Client Title, Company"
  },
  {
    quote: [
      "This is a longer testimonial that can be split into multiple paragraphs.",
      "Each paragraph will be displayed separately for better readability."
    ],
    author: "Client Name",
    title: "Client Title, Company"
  }
]; 