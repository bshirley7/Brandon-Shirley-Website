export interface BackgroundMedia {
  type: 'video' | 'image';
  url: string;
  title: string;
  alt?: string; // For images
}

export interface HeroInfo {
  role: string;
  tagline: string;
  background: BackgroundMedia;
}

export const heroInfo: HeroInfo = {
  role: "Insert Your Role Here",
  tagline: "Insert Your Tagline Here",
  background: {
    type: "video", // Change to "video" if using video
    url: "https://www.youtube.com/embed/wDchsz8nmbo?autoplay=1&mute=1&controls=0&loop=1&playlist=wDchsz8nmbo&showinfo=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&vq=hd1080&iv_load_policy=3&fs=0&disablekb=1", // Update with your image path
    title: "Hero background media",
    alt: "Background media description" // Add a descriptive alt text for accessibility
  }
}; 