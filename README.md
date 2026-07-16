# 🚀 Modern Student & Software Engineer Portfolio Template

A highly polished, modern, and fully responsive personal portfolio website designed for students and junior software developers. This template is designed to look pristine and professional **today** (even with few or zero corporate internships or awards yet) while offering an extremely easy upgrade path to add credentials as you grow.

---

## 🛠️ Project Structure

The project is structured with modern best practices, keeping presentation separate from content. You only need to touch **one file** to customize your text, skills, and projects!

```text
├── index.html                  # Main entry page & SEO tags
├── public/
│   └── 404.html                # Custom 404 fallback page for GitHub Pages
├── src/
│   ├── App.tsx                 # Main layout & Theme configuration
│   ├── index.css               # Global styles, fonts, and Tailwind setup
│   ├── main.tsx                # React initializer
│   ├── data/
│   │   └── portfolioData.ts    # 🌟 CENTRAL PORTFOLIO DATA FILE (Edit here!)
│   └── components/
│       ├── ThemeToggle.tsx     # Light/Dark mode switcher
│       ├── Hero.tsx            # Welcome section & animated role typist
│       ├── About.tsx           # Biography and key values
│       ├── Skills.tsx          # Categorized skills & animated progress bars
│       ├── Projects.tsx        # Project catalog with search & filtering
│       ├── EducationExperience.tsx # Education timeline & experience placeholders
│       ├── AchievementsCertifications.tsx # Academic awards & certs
│       ├── Contact.tsx         # Contact form & custom Copy Email button
│       ├── Footer.tsx          # Footer with social connections
│       ├── BackToTop.tsx       # Floating scroll progress widget
│       └── NotFound.tsx        # Fallback view for custom routing
└── package.json                # Dependencies & Build commands
```

---

## ✍️ How to Customize Your Portfolio (The 1-File Rule)

You **do not need to know complex React or TypeScript** to update your content. Everything is stored in **`src/data/portfolioData.ts`** as a plain JavaScript/TypeScript object.

### 1. Changing Your Personal Info
Open `src/data/portfolioData.ts`, and look for the `personalInfo` block:
```typescript
personalInfo: {
  name: "Alex Rivera",
  firstName: "Alex",
  lastName: "Rivera",
  title: "Aspiring Software Engineer & Computer Science Student",
  subtitles: [
    "Computer Science Student",
    "Full-Stack Web Developer",
    "Open Source Enthusiast"
  ],
  bio: "I am a second-year Computer Science student...",
  resumeUrl: "https://your-google-drive-resume-link-here.com",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  location: "San Francisco, CA"
}
```
Simply change the strings to match your details!

### 2. Adding a New Project
To add a new project card, scroll down to the `projects` array in `src/data/portfolioData.ts` and add a new item inside the brackets:
```typescript
{
  id: "5", // Unique identifier
  title: "My Awesome Hackathon App",
  description: "A short, catchy overview that fits on the project card.",
  longDescription: "A deeper, multi-paragraph case study details shown inside the modal popup.",
  technologies: ["React", "TypeScript", "Node.js"],
  githubLink: "https://github.com/yourusername/project-repo",
  liveLink: "https://project-demo.com", // Optional
  category: "web", // Choose: 'web', 'mobile', 'ml', or 'other'
  tags: ["Hackathon", "Social Impact"],
  status: "Completed", // Choose: 'Completed', 'In Progress', or 'Planned'
  featured: true
}
```
Save the file, and the new project will instantly appear in the showcase, support search keywords, and filter tabs automatically!

### 3. Adding Achievements & Certifications
You can add your real-world achievements and certifications to the lists. To make sure the site looks completely full and encouraging even as a student, use **growth-mindset placeholders** that tell employers what you're working on:
```typescript
achievements: [
  {
    title: "Dean's List Honoree",
    description: "Maintained a high GPA of 3.82 over consecutive semesters.",
    date: "Fall 2024",
    category: "Academic",
    isPlaceholder: false
  },
  {
    title: "Targeting Next Hackathon Win",
    description: "Preparing to enter regional student hackathons this coming winter.",
    date: "Future Goal",
    isPlaceholder: true // Renders a dashed outline card highlighting future ambitions!
  }
]
```

### 4. Updating Skills
Skills are grouped by category. You can add or remove any skill by adding a new object with an icon name matching [Lucide Icons](https://lucide.dev/icons):
```typescript
{ name: "Python", level: 80, iconName: "Terminal" }
```

---

## 🎨 Changing Theme Colors

This portfolio uses **Tailwind CSS v4** with a dark mode by default. You can change the primary color scheme by editing **`src/index.css`** and modifying Tailwind variables or standard utility colors:

- To adjust typography, open `src/index.css` and configure different Google Fonts.
- To adjust gradient overlays, customize the classes inside project cards (e.g., swapping `indigo` for `emerald` or `fuchsia`).

---

## 📩 Setting Up Your Contact Form (Formspree)

You can connect your frontend form to receive emails directly in **under 2 minutes** with zero backend code:

1. Create a free account at [Formspree](https://formspree.io).
2. Create a new form and copy your unique **Form ID** (e.g., `mqkvyvzd`).
3. Open `src/data/portfolioData.ts`.
4. Add your copied form ID into the `formspreeId` variable inside `personalInfo`:
   ```typescript
   formspreeId: "mqkvyvzd"
   ```
Now, whenever a visitor fills out the contact form and hits Submit, you will get their message instantly in your email inbox!

---

## 🚀 How to Deploy to GitHub Pages

Since this portfolio is built with React and Vite, you can deploy it directly to GitHub Pages as a static site:

### Step 1: Push your code to GitHub
Create a new GitHub repository, and push your portfolio code to your default branch (e.g. `main`).

### Step 2: Configure `vite.config.ts`
Open `vite.config.ts` and verify or add a `base` setting matching your repository name:
```typescript
export default defineConfig({
  base: '/YOUR-REPOSITORY-NAME/', // Ignore this step if deploying to a custom domain
  // ... other configs
})
```

### Step 3: Automated Build & Deploy
We have pre-configured a build process that outputs completely static, optimized HTML/JS/CSS inside the `dist/` folder.
To compile your site, run:
```bash
npm run build
```
Upload the contents of the `dist/` directory to your GitHub Pages repository branch (or configure **GitHub Actions** to automate builds on every commit). Your site will be live and secure instantly!
