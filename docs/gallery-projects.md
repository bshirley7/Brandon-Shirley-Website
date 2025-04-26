# Gallery Projects Guide

This guide will help you create beautiful gallery projects to showcase collections of your work, like a portfolio of designs, photos, or animations.

## 📁 What Are Gallery Projects?

Gallery projects are special pages on your website that focus on displaying a collection of images or videos in an attractive layout. They're perfect for:

- Showcasing a series of related works
- Creating a portfolio of similar pieces
- Displaying a collection of animations or motion graphics
- Highlighting a specific type of work you do

## 🚀 Creating Your First Gallery

### Step 1: Create a New Gallery File

1. Go to the `gallery` folder
2. Create a new file with a name that describes your gallery, like `my-design-gallery.ts`
3. Open this file in Visual Studio Code

### Step 2: Add the Basic Gallery Structure

Copy and paste this basic structure into your file, then customize it:

```typescript
import { Project } from '../config/types';
import { PROJECT_CATEGORIES, DISCIPLINES } from '../config/constants';

export const myGallery: Project = {
  id: 'my-gallery',
  title: "My Design Gallery",
  year: 2024,
  description: "A collection of my best design work from the past year.",
  image: "/images/my-gallery/thumbnail.jpg",
  hero: {
    type: 'image',
    src: '/images/my-gallery/hero.jpg'
  },
  category: PROJECT_CATEGORIES.DESIGN,
  disciplines: [
    DISCIPLINES.GRAPHIC_DESIGN,
    DISCIPLINES.UI_DESIGN
  ],
  featured: true,
  sections: [
    {
      type: 'text',
      title: 'About This Gallery',
      content: 'This gallery showcases my best design work from the past year, including logos, websites, and marketing materials.'
    },
    {
      type: 'gallery',
      title: 'Design Collection',
      content: [
        {
          src: '/images/my-gallery/item-01.jpg',
          alt: 'Logo Design for XYZ Company',
          span: 2,
          priority: true
        },
        {
          src: '/images/my-gallery/item-02.jpg',
          alt: 'Website Design for ABC Startup',
          span: 1
        }
      ],
      layout: 'masonry',
      columns: 3,
      background: 'white'
    }
  ]
};
```

### Step 3: Customize Your Gallery

Edit these parts to match your gallery:

1. **Basic Information**:
   - `id`: A unique name for your gallery (use lowercase with hyphens)
   - `title`: The name of your gallery as it will appear on your website
   - `year`: The year you created this gallery
   - `description`: A short summary of what's in your gallery

2. **Images**:
   - `image`: The thumbnail image for your gallery
   - `hero.src`: The main image that appears at the top of your gallery page

3. **Category and Disciplines**:
   - Choose the category that best fits your gallery
   - Select the disciplines that apply to your work

4. **Gallery Content**:
   - Add your images or videos to the `content` array
   - Each item needs:
     - `src`: The path to your image or video
     - `alt`: A description of what the image shows
     - `span`: How many columns this item should span (1 or 2)
     - `priority`: Set to `true` for important items you want to load first

### Step 4: Add Your Gallery to the Website

1. Open the file `src/data/projects/index.ts`
2. Add these lines at the top of the file:
   ```typescript
   import { myGallery } from './gallery/my-gallery';
   ```
3. Find the `projects` array and add your gallery to it:
   ```typescript
   export const projects = [
     myGallery,
     // ... other projects
   ];
   ```

## 🎨 Gallery Features

### Masonry Layout
The masonry layout creates a beautiful grid where items of different sizes fit together like puzzle pieces. This is perfect for showcasing work of different dimensions.

### Multiple Media Types
You can include both images and videos in your gallery:
- For images: Use paths like `/images/my-gallery/item-01.jpg`
- For videos: Use paths like `/videos/my-gallery/item-02.mp4`

### Flexible Column Spans
Items can span either 1 or 2 columns:
- Use `span: 1` for smaller items
- Use `span: 2` for larger, more important items

### Priority Loading
Set `priority: true` for important items you want to load first. This helps visitors see your best work quickly.

## 💡 Tips for Great Galleries

1. **Organize Your Images**
   - Keep all gallery images in a dedicated folder
   - Use consistent image dimensions for a cleaner look
   - Compress large images to help your website load faster

2. **Create Visual Interest**
   - Mix different column spans for visual variety
   - Place your best work first
   - Use priority loading for key images

3. **Write Clear Descriptions**
   - Add descriptive alt text for all images
   - Keep descriptions concise but informative
   - Maintain consistent image quality throughout

## 🔧 Common Questions

### How many items can I include in my gallery?
You can include as many items as you want, but we recommend keeping it to 20-30 items for the best performance.

### Can I change the number of columns?
Yes! Change the `columns` value in your gallery section. We recommend 2-3 columns for most galleries.

### How do I add a video to my gallery?
Just use a video file path instead of an image path in the `src` field. Supported formats include MP4, WebM, and Ogg.

## 🆘 Need More Help?

If you're stuck, check out:
- The example gallery in the `gallery` folder
- The [Project Structure Guide](project-structure.md) for general project information
- The [Section Templates Guide](section-templates.md) for more details about different section types 