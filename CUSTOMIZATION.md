# Portfolio Customization Guide

## Quick Start

Your portfolio is ready to use! Here's how to customize it with your own information.

## 1. Update Personal Information

Edit `/lib/data.ts` to customize:

### Personal Info
- `name`: Your full name
- `title`: Your professional title (e.g., "Full Stack Developer")
- `bio`: A brief description about yourself
- `email`: Your contact email
- `phone`: Your phone number (optional)
- `address`: Your location
- `resumeUrl`: Link to your resume PDF
- `profileImage`: URL to your profile photo (uses Pexels stock photo by default)

### Social Links
Update the `socialLinks` object with your profiles:
- GitHub
- LinkedIn
- Twitter
- Facebook
- LeetCode

### Skills
Add or modify your skills in the `skills` array. Each skill has:
- `name`: Skill name
- `icon`: Emoji icon

### Projects
Customize the `projects` array with your work:
- `name`: Project name
- `description`: Detailed description
- `tools`: Array of technologies used
- `role`: Your role in the project
- `image`: Project screenshot (uses Pexels stock photos by default)
- `link`: Live demo URL (optional)
- `github`: GitHub repository URL (optional)

### Experience
Update your work experience in the `experiences` array:
- `company`: Company name
- `position`: Your job title
- `duration`: Time period (e.g., "2022 - Present")
- `location`: Work location (optional)
- `description`: Brief description of your responsibilities

### Education
Modify the `education` array with your academic background:
- `institution`: School/University name
- `degree`: Degree and major
- `duration`: Time period
- `description`: Additional details (optional)

## 2. Blog Integration

The portfolio fetches blog posts from Dev.to API by default. To show your own posts:

1. Create an account at [dev.to](https://dev.to)
2. Write and publish blog posts
3. Update the fetch URL in `/components/Blog.tsx`:
   ```typescript
   const response = await fetch('https://dev.to/api/articles?username=YOUR_USERNAME');
   ```

Alternatively, you can:
- Remove the Blog section if you don't have a blog
- Integrate with another blogging platform's API

## 3. Contact Form

The contact form currently shows a success message. To enable actual message storage:

1. Set up a Supabase database (already configured)
2. Create a `contact_messages` table with columns:
   - `id` (uuid, primary key)
   - `name` (text)
   - `email` (text)
   - `message` (text)
   - `created_at` (timestamp)
3. Uncomment the Supabase code in `/components/Contact.tsx`

Or integrate with other services like:
- EmailJS
- Formspree
- Your own API endpoint

## 4. Styling Customization

### Colors
Edit `/app/globals.css` to change the color scheme:
- Primary colors: Blue and Cyan gradient (lines 13, 36)
- Update CSS variables for light/dark modes

### Fonts
The portfolio uses Poppins font. To change:
1. Edit `/app/layout.tsx`
2. Import a different Google Font
3. Update the font variable

### Section Order
Rearrange sections in `/app/page.tsx` by changing the component order.

## 5. Resume

1. Add your resume PDF to the `/public` folder
2. Update `resumeUrl` in `/lib/data.ts` to point to your file:
   ```typescript
   resumeUrl: "/your-resume.pdf"
   ```

## 6. Images

### Profile Photo
Replace the stock photo URL in `profileImage` with:
- Your own hosted image
- An image from your GitHub profile
- A professional headshot

### Project Images
Update `image` URLs in the `projects` array with:
- Screenshots of your projects
- Hosted images
- Pexels/Unsplash URLs (ensure proper attribution)

## 7. Meta Tags and SEO

Edit `/app/layout.tsx` to update:
- `title`: Browser tab title
- `description`: SEO description

## 8. Deploy

Build and deploy your portfolio:

```bash
npm run build
```

Deploy to:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Any static hosting service

## Tips for a Professional Portfolio

1. **Use high-quality images** - Professional photos and project screenshots
2. **Keep descriptions concise** - Clear and impactful content
3. **Update regularly** - Add new projects and skills as you grow
4. **Test responsiveness** - Check on mobile, tablet, and desktop
5. **Optimize performance** - Compress images and minimize assets
6. **Get feedback** - Ask peers to review before publishing
7. **Add analytics** - Track visitors with Google Analytics or similar

## Features Included

- Smooth scrolling navigation
- Responsive design for all devices
- Animated hero section with typing effect
- Skills showcase with scrolling marquee
- Sticky project cards with scroll animations
- Blog integration with Dev.to API
- Contact form with validation
- Modern dark theme
- SEO optimized

## Need Help?

- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- shadcn/ui components: [ui.shadcn.com](https://ui.shadcn.com)

---

Good luck with your portfolio!
