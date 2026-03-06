# Roar ADS - Professional Website

A cinematic, professional website for Roar ADS - India's first mobile advertising network powered by real riders and smart LED displays.

## 🎯 Features

- **Cinematic Design**: Dark theme with electric orange accents, inspired by Tesla, Apple, and Revolt Motors
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Responsive Design**: Optimized for all devices
- **Form Integration**: Ready for Firebase/Supabase backend integration
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🚀 Quick Start

1. **Clone/Download** the project files
2. **Open** `index.html` in your browser
3. **Configure Firebase** (optional):
   - Replace the Firebase config in `index.html`
   - Enable Firestore database
   - Set up collections: `campaigns` and `riders`

## 📁 Project Structure

```
roar-ads-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles and animations
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # This file
```

## 🎨 Design Elements

- **Colors**: Deep Black (#0A0A0A), Electric Orange (#FF6B00), Metallic Silver (#D3D3D3)
- **Fonts**: Montserrat (headings), Inter (body text)
- **Animations**: Smooth parallax, fade-ins, and hover effects
- **Theme**: Cinematic lighting with subtle 3D motion

## 📱 Sections

1. **Hero Section**: Fullscreen with bike silhouette and LED glow effect
2. **Concept**: Three-tier system explanation with animations
3. **Pilot Showcase**: Video placeholder with overlay text
4. **For Brands**: Campaign creation form and use cases
5. **For Riders**: Registration form with testimonial
6. **Data & Impact**: Animated map and real-time stats
7. **Footer**: Links and social media

## 🔧 Backend Integration

### Firebase Setup (Recommended)

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Replace the Firebase config in `index.html`:

```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};
```

4. Create Firestore collections:
   - `campaigns` (for brand submissions)
   - `riders` (for rider registrations)

### Alternative: Supabase

Replace Firebase imports with Supabase client and update form submission functions.

## 🎬 Animations

- **Hero**: Pulsing bike silhouette with glowing LED effect
- **Scroll Triggers**: Elements animate in as they enter viewport
- **Counters**: Animated number counting for statistics
- **Hover Effects**: Smooth scale and glow transitions
- **Parallax**: Subtle background movement on scroll

## 📊 SEO & Performance

- Semantic HTML structure
- Meta tags for search engines
- Optimized images and fonts
- Smooth scroll behavior
- Mobile-first responsive design

## 🎯 Call-to-Actions

- **"Advertise With Us"**: Scrolls to brand campaign form
- **"Join as Rider"**: Scrolls to rider registration form
- **Form Submissions**: Success/error notifications with smooth animations

## 🔄 Customization

### Colors
Update CSS variables in `:root` selector:
```css
:root {
    --black: #0A0A0A;
    --orange: #FF6B00;
    --silver: #D3D3D3;
}
```

### Content
- Update text content in `index.html`
- Modify form fields as needed
- Replace placeholder video with actual content

### Animations
- Adjust GSAP timelines in `script.js`
- Modify ScrollTrigger settings
- Customize hover effects

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly buttons
- Optimized font sizes
- Simplified navigation
- Fast loading animations

## 🚀 Deployment

1. **Static Hosting**: Upload files to any web server
2. **Netlify**: Drag and drop the folder
3. **Vercel**: Connect to Git repository
4. **Firebase Hosting**: Use Firebase CLI

## 📈 Analytics Integration

Add Google Analytics or similar tracking code before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 Brand Guidelines

- **Logo**: "ROAR ADS" in Montserrat Bold with orange accent
- **Typography**: Montserrat for headings, Inter for body text
- **Imagery**: Dark, cinematic motorcycle/urban themes
- **Motion**: Smooth, premium transitions (avoid bouncy effects)

## 🔧 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📞 Support

For customization or technical support, refer to:
- GSAP Documentation: [greensock.com](https://greensock.com)
- Firebase Documentation: [firebase.google.com](https://firebase.google.com)
- CSS Grid Guide: [css-tricks.com](https://css-tricks.com)

---

**Ready to launch!** 🚀 This website is designed to impress investors, attract brand partnerships, and onboard riders for Roar ADS.