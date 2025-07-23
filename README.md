#  Diwakar Negi - Frontend Developer Portfolio

A modern, responsive personal portfolio website showcasing the skills, projects, and journey of Diwakar Negi, a passionate BTech Computer Science student and Frontend Developer.

![Portfolio Preview](https://github.com/user-attachments/assets/777c8056-2e2f-4c51-b6fa-d86f9bd5af45)

##  About This Project

This portfolio website is crafted to provide a comprehensive view of my skills, projects, and professional journey. It features a clean, modern design with smooth animations and responsive layouts that work seamlessly across all devices.

###  Key Features

- **Modern Design**: Clean, professional layout with dark theme
- **Responsive**: Mobile-first design that adapts to all screen sizes
- **Interactive Animations**: Smooth scrolling and AOS (Animate On Scroll) effects
- **Fast Loading**: Optimized performance with lazy loading
- **Accessible**: Built with accessibility best practices
- **Cross-Browser Compatible**: Works on all modern browsers
- **SEO Optimized**: Structured data and meta tags for better search visibility

### 🏗️ Sections Included

- **Home**: Hero section with introduction and call-to-action
- **About**: Personal background, stats, and what I bring to the table
- **Skills**: Technical skills with proficiency levels and tools
- **Projects**: Showcase of featured projects with live demos and source code
- **Education**: Academic journey and qualifications
- **Contact**: Contact form and social media links

##  Technologies Used

### Frontend Technologies
- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Modern styling with Flexbox, Grid, and custom animations
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity and DOM manipulation
- **SASS/SCSS**: CSS preprocessing (if applicable)

### Libraries & Frameworks
- **AOS (Animate On Scroll)**: For scroll-triggered animations
- **Font Awesome**: Icons and visual elements
- **Google Fonts**: Typography (Poppins font family)
- **Particles.js**: Background particle animations

### Tools & Development
- **Git**: Version control
- **VS Code**: Development environment
- **Browser DevTools**: Testing and debugging

##  Getting Started

### Prerequisites

No special prerequisites are needed! This is a static website that runs in any modern web browser.

### Installation & Usage

#### Option 1: Direct Browser Opening
1. **Clone the repository**
   ```bash
   git clone https://github.com/DiwakarNegi/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Open in browser**
   - Simply double-click on `index.html` to open in your default browser
   - Or right-click on `index.html` → "Open with" → Select your preferred browser

#### Option 2: Local Server (Recommended)
For the best experience and to avoid CORS issues with external resources:

1. **Clone the repository**
   ```bash
   git clone https://github.com/DiwakarNegi/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Start a local server**
   
   **Using Python 3:**
   ```bash
   python3 -m http.server 8000
   ```
   
   **Using Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (if you have it installed):**
   ```bash
   npx http-server -p 8000
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   - Navigate to `http://localhost:8000` in your web browser

### Live Demo

Visit the live version: [Portfolio Website](https://diwakarnegi.github.io/Portfolio-Website/) _(if deployed)_

##  Project Structure

```
Portfolio-Website/
├── index.html              # Main HTML file
├── README.md               # Project documentation
├── assets/                 # Static assets
│   ├── images/            # Images and graphics
│   └── resume/            # Resume/CV files
├── css/                   # Stylesheets
│   ├── style.css         # Main stylesheet
│   ├── animations.css    # Animation definitions
│   └── responsive.css    # Responsive design rules
├── js/                    # JavaScript files
│   ├── main.js           # Main application logic
│   ├── content-loader.js # Dynamic content loading
│   ├── scroll-effects.js # Scroll-based effects
│   └── animations.js     # Animation controllers
└── sections/              # HTML sections
    ├── about.html        # About section content
    ├── contact.html      # Contact section content
    ├── projects.html     # Projects section content
    └── skills.html       # Skills section content
```

##  Customization

### Personalizing the Portfolio

1. **Update Personal Information**
   - Edit `index.html` for main content
   - Modify sections in the `sections/` folder
   - Replace images in `assets/images/`
   - Update resume in `assets/resume/`

2. **Styling Changes**
   - Main styles: `css/style.css`
   - Animations: `css/animations.css`
   - Responsive design: `css/responsive.css`

3. **Adding New Projects**
   - Edit `sections/projects.html`
   - Add project images to `assets/images/`
   - Update project links and descriptions

4. **Contact Information**
   - Update social media links in `index.html`
   - Modify contact form in `sections/contact.html`
   - Update email and phone in contact section

##  Contributing

While this is a personal portfolio, contributions for improvements are welcome!

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/improvement-name
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add some improvement"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/improvement-name
   ```
6. **Create a Pull Request**

### Contribution Guidelines
- Maintain the existing code style and structure
- Test changes across different browsers and devices
- Ensure accessibility standards are maintained
- Keep the design consistent with the overall theme

##  Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

##  Known Issues

- External CDN resources might be blocked in some environments
- Some animations may not work perfectly on older browsers
- Images from placeholder services (Picsum) may load slowly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


##  Acknowledgments

- **AOS Library**: For beautiful scroll animations
- **Font Awesome**: For amazing icons
- **Google Fonts**: For the Poppins font family
- **Particles.js**: For interactive background effects
- **Community**: For inspiration and learning resources

---

⭐ **Star this repository if you found it helpful!**

*Last updated: January 2025*
