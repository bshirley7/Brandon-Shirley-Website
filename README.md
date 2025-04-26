# Modern Portfolio Website Template

A modern, responsive portfolio website template built with React, TypeScript, and Tailwind CSS. Features dynamic content management, smooth animations, and a professional design system.

## 📚 Documentation

All detailed guides and documentation can be found in the `/docs` directory:

- 🎨 [Color Customization Guide](docs/color-guide.md) - Learn how to customize the website's color scheme
- 📋 [Section Cheatsheet](docs/section-cheatsheet.md) - Reference guide for all website sections
- 🚀 [Project Creation Guide](docs/project-creation-guide.md) - Step-by-step guide for creating new projects
- 🖼️ [Gallery Projects Guide](docs/gallery-projects.md) - Guide for managing project galleries

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- A code editor (VS Code recommended)
- Git (for version control)
- GitHub account (for deployment)

### Installation
1. Clone this repository
```bash
git clone <your-repo-url>
cd Portfolio-Website-Starter
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

### Deployment Setup

1. Create a new repository on GitHub
2. Update the remote URL:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/my-portfolio.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

3. Deploy to Vercel:
   - Go to [Vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

Your website will be live at a URL like `my-portfolio.vercel.app`

## 🎨 Personalizing Your Portfolio

### 1. Personal Information (`src/data/personal/`)

#### Contact Information (`contact-info.ts`)
```typescript
export const contactInfo = {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  linkedin: "your-linkedin-username",
  location: "City, Country",
  availability: "Available for projects"
};
```

#### About Information (`about-info.ts`)
```typescript
export const aboutInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  experience: [
    {
      title: "Area of Expertise 1",
      description: "Description of your expertise..."
    },
    {
      title: "Area of Expertise 2",
      description: "Description of your expertise..."
    }
  ],
  currentFocus: "Description of your current focus..."
};
```

#### Career Information (`career-info.ts`)
```typescript
export const careerInfo = {
  highlights: [
    {
      value: "Key Metric",
      description: "Description of achievement"
    }
  ],
  awards: [
    {
      category: "Award Category",
      organization: "Organization Name",
      achievements: ["Achievement 1", "Achievement 2"]
    }
  ],
  partnerships: [
    {
      category: "Partnership Type",
      companies: ["Company 1", "Company 2"]
    }
  ]
};
```

#### Hero Section (`hero-info.ts`)
```typescript
export const heroInfo = {
  background: {
    type: "video" | "image",
    url: "/path/to/media",
    title: "Background Title"
  },
  headline: "Your Headline",
  subheadline: "Your Subheadline"
};
```

#### Logo Configuration (`logo-info.ts`)
```typescript
export const logoInfo = {
  text: "Your Name/Brand",
  showText: true,
  textSize: "text-xl"
};
```

#### Testimonials (`testimonials.ts`)
```typescript
export const testimonials = [
  {
    quote: "Testimonial text...",
    author: "Client Name",
    title: "Client Position"
  }
];
```

### 2. Projects (`src/data/projects/`)

Each project is defined in its own file under `src/data/projects/`. The template includes five example projects:

- `web-platform.ts`: Technical/Web Development
- `brand-evolution.ts`: Branding/Design
- `motion-story.ts`: Animation/Motion
- `social-impact.ts`: Social Impact/Campaigns
- `event-experience.ts`: Live Events/Experiences

#### Creating a New Project

1. Use the project creation script:
```bash
node scripts/create-project.js your-project-name
```

2. Add project images to `/public/images/your-project-name/`:
   - `hero.jpg` (800x600)
   - `architecture.jpg` (1200x800)
   - `dashboard.jpg` (1200x800)
   - `metrics.jpg` (1200x800)

3. Update the project content in `src/data/projects/your-project-name.ts`:
```typescript
export const yourProject: Project = {
  id: 'your-project-name',
  title: "Project Title",
  year: "2024",
  description: "Project description...",
  image: "/images/your-project-name/hero.jpg",
  hero: {
    type: 'image',
    src: "/images/your-project-name/hero.jpg"
  },
  category: PROJECT_CATEGORIES.YOUR_CATEGORY,
  disciplines: [
    DISCIPLINES.YOUR_DISCIPLINE
  ],
  sections: [
    // Project sections...
  ]
};
```

#### Creating Galleries

For showcasing collections of work (designs, photos, etc.):

1. Create a new file in `src/data/projects/gallery/`
2. Follow the structure in the [Gallery Projects Guide](docs/gallery-projects.md)
3. Add your images to the `public/images` folder

### 3. Project Categories and Disciplines

Available categories (`src/data/projects/constants.ts`):
- PRODUCT_LAUNCH
- IMPACT_CAMPAIGN
- BRAND_EVOLUTION
- ANIMATION
- LIVE_EVENT

Available disciplines:
- STRATEGIC_LEAD
- BRAND_STRATEGIST
- CREATIVE_DIRECTOR
- INNOVATION_LEAD
- PRODUCTION_LEAD
- ANIMATION
- MOTION_GRAPHICS
- THREE_D_GRAPHICS
- EVENT_DESIGN

### 4. Styling and Theme

The project uses Tailwind CSS with a carefully designed color system:

- Primary text: `text-black`
- Secondary text: `text-black/70`
- Background: `bg-white`
- Accents: `bg-black/5`, `bg-black/20`

To modify the theme, edit `tailwind.config.js`.

## 📁 Project Structure

```
├── docs/
│   ├── color-guide.md
│   ├── section-cheatsheet.md
│   ├── project-creation-guide.md
│   ├── gallery-projects.md
│   └── images/
├── public/
│   └── images/
│       ├── web-platform/
│       ├── brand-evolution/
│       ├── motion-story/
│       ├── social-impact/
│       └── event-experience/
├── src/
│   ├── components/
│   │   ├── CareerHighlights.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Image.tsx
│   │   ├── Logo.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectSection.tsx
│   │   └── Testimonials.tsx
│   ├── data/
│   │   ├── personal/
│   │   │   ├── about-info.ts
│   │   │   ├── career-info.ts
│   │   │   ├── contact-info.ts
│   │   │   ├── hero-info.ts
│   │   │   ├── logo-info.ts
│   │   │   └── testimonials.ts
│   │   └── projects/
│   │       ├── constants.ts
│   │       ├── types.ts
│   │       └── [project-files].ts
│   └── pages/
│       ├── about/
│       ├── contact/
│       ├── projects/
│       └── work/
└── scripts/
    ├── create-project.js
    └── download-images.js
```

## 🚀 Deployment

1. Build the project:
```bash
npm run build
# or
yarn build
```

2. Deploy to your preferred platform:
- Vercel (recommended)
- Netlify
- GitHub Pages

### Making Updates

After making changes to your website:

1. Commit your changes:
```bash
git add .
git commit -m "Update my portfolio"
git push
```

2. Your changes will be automatically deployed if using Vercel

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🆘 Need Help?

If you run into any issues:

1. Check the detailed guides in the `/docs` directory
2. Look at the example projects in `src/data/projects/`
3. Contact the development team for assistance 