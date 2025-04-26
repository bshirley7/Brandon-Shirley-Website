export interface AboutInfo {
  name: string;
  title: string;
  bio: string;
  services: string[];
  experience: {
    title: string;
    description: string;
  }[];
  currentFocus: string;
}

export const aboutInfo: AboutInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  bio: "Your professional bio goes here. This should be a compelling introduction to who you are and what you do.",
  services: [
    "Service 1",
    "Service 2",
    "Service 3"
  ],
  experience: [
    {
      title: "Key Achievement 1",
      description: "Description of your achievement and its impact."
    },
    {
      title: "Key Achievement 2",
      description: "Description of your achievement and its impact."
    }
  ],
  currentFocus: "Description of what you're currently working on or focused on."
}; 