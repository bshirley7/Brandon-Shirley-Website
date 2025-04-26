# Portfolio Website Guide

Welcome! This guide will help you set up and customize your own portfolio website, even if you've never worked with code before. We'll walk through the process step by step.

## 🚀 Getting Started

### Step 1: Set Up Your GitHub Account

1. Go to [GitHub.com](https://github.com) and sign up for a free account
2. Complete your profile with your name and email
3. Verify your email address

### Step 2: Install Required Software

1. **Install Git**: Download and install Git from [git-scm.com](https://git-scm.com/downloads)
2. **Install Visual Studio Code**: Download and install VS Code from [code.visualstudio.com](https://code.visualstudio.com/)
   - This is a user-friendly code editor that will make editing your website easier

### Step 3: Clone This Project to Your Computer

1. Open VS Code
2. Click on the "Terminal" menu at the top, then select "New Terminal"
3. In the terminal, type the following command (replace `YOUR_USERNAME` with your GitHub username):
   ```
   git clone https://github.com/YOUR_USERNAME/Portfolio-Website-Starter.git
   ```
4. Press Enter and wait for the download to complete

### Step 4: Push to Your Own GitHub Repository

1. Go to GitHub.com and log in
2. Click the "+" icon in the top right corner, then select "New repository"
3. Name your repository (e.g., "my-portfolio")
4. Leave all other settings as default and click "Create repository"
5. Back in VS Code, in the terminal, type these commands (replace with your repository URL):
   ```
   git remote set-url origin https://github.com/YOUR_USERNAME/my-portfolio.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

### Step 5: Deploy to Vercel

1. Go to [Vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click "New Project"
3. Select your repository from the list
4. Click "Deploy" and wait for the process to complete
5. Your website will be live at a URL like `my-portfolio.vercel.app`

## 📝 Customizing Your Portfolio

Now that your website is live, let's customize it with your own content!

### Basic Customization

1. **Edit Your Profile**: Open `src/data/profile.ts` in VS Code and update your information
2. **Change Colors**: Open `src/styles/globals.css` to update the color scheme
3. **Update Images**: Replace images in the `public/images` folder with your own

### Adding Projects

To add your own projects, follow these steps:

1. **Create a New Project File**:
   - Copy `src/data/projects/templates/project-template.ts`
   - Rename it to something like `my-project.ts`
   - Place it in the `src/data/projects/projects` folder

2. **Edit Project Information**:
   - Open your new project file in VS Code
   - Update the basic information (title, description, etc.)
   - Add your own images to the `public/images` folder

3. **Add Your Project to the Website**:
   - Open `src/data/projects/index.ts`
   - Import your new project and add it to the projects array

For detailed instructions on creating projects, see our [Project Structure Guide](docs/project-structure.md).

### Creating Galleries

If you want to showcase a collection of work (like a portfolio of designs or photos):

1. Create a new file in the `src/data/projects/gallery` folder
2. Follow the structure in the [Gallery Projects Guide](docs/gallery-projects.md)
3. Add your images to the `public/images` folder

## 📚 Detailed Guides

As you work with your portfolio, you may need more detailed information. We've created these guides to help:

- [Project Structure Guide](docs/project-structure.md) - How to create and organize projects
- [Gallery Projects Guide](docs/gallery-projects.md) - How to create specialized gallery content
- [Section Templates Guide](docs/section-templates.md) - How to use different content types and layouts

## 🔄 Making Updates

After making changes to your website:

1. In VS Code, open the terminal
2. Type these commands:
   ```
   git add .
   git commit -m "Update my portfolio"
   git push
   ```
3. Vercel will automatically deploy your changes

## 🆘 Need Help?

If you run into any issues:

1. Check the detailed guides linked above
2. Look at the example projects in the `src/data/projects/projects` folder
3. Contact the development team for assistance

## 🎉 Congratulations!

You now have your own professional portfolio website that you can customize and update whenever you need to showcase new work. Happy customizing! 