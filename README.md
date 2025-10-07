# nem.codes Portfolio

A modern Jekyll portfolio showcasing XR/AR/VR projects, full-stack development, and spatial computing innovations.

🌍 **Live Site**: [nem.codes](https://nem.codes)

## 🚀 Quick Start

### Development Setup
```bash
# Clone repository
git clone https://github.com/ThatChocolateGuy/thatchocolateguy.github.io.git
cd thatchocolateguy.github.io

# Install Ruby 3.3.4 with RVM (recommended)
rvm install 3.3.4
rvm use 3.3.4
rvm gemset create jekyll4
rvm use 3.3.4@jekyll4

# Install Jekyll 4.x dependencies
BUNDLE_GEMFILE=Gemfile.phase3 bundle install

# Start development server
BUNDLE_GEMFILE=Gemfile.phase3 bundle exec jekyll serve --source source --host 0.0.0.0 --port 4000
```

Visit `http://localhost:4000` to view your local development site.

### Production Deployment
```bash
# Deploy to GitHub Pages (nem.codes)
rake -f Rakefile.jekyll4 publish
```

## 📁 Project Structure

```
├── source/                 # Jekyll source files
│   ├── _posts/            # Project showcases (YYYY-MM-DD-title.md)
│   ├── _layouts/          # Page templates
│   ├── _includes/         # Reusable components
│   ├── _sass/             # SASS stylesheets
│   └── images/            # Static assets
├── _site/                 # Generated site (Jekyll 3.8 fallback)
├── _site_jekyll4/         # Generated site (Jekyll 4.x development)
├── Gemfile.phase3         # Jekyll 4.x dependencies
├── Rakefile.jekyll4       # Jekyll 4.x deployment automation
└── _config.yml            # Jekyll configuration
```

## 🛠 Technology Stack

### Current (Jekyll 4.x - 2024 Stack)
- **Jekyll 4.3.4** - Static site generator
- **Ruby 3.3.4** - Latest stable runtime
- **Sass (Dart Sass)** - Modern CSS preprocessing
- **Rouge 4.6** - Syntax highlighting
- **kramdown 2.5** - Markdown processor

### Modern Features
- ✅ RSS feeds (`/feed.xml`)
- ✅ XML sitemap (`/sitemap.xml`)
- ✅ Enhanced SEO meta tags
- ✅ Mobile-responsive design
- ✅ Story timeline carousel
- ✅ Project showcase grid

### Legacy Fallback (Jekyll 3.8)
For compatibility, Jekyll 3.8 configuration is preserved:
```bash
# Use legacy stack if needed
bundle install
bundle exec jekyll serve --source source
```

## 📝 Content Management

### Adding New Projects
1. Create file: `source/_posts/YYYY-MM-DD-project-title.md`
2. Include required frontmatter:
```yaml
---
layout: post
title: "Project Name"
permalink: /projects/YYYY/project-name/
date: YYYY-MM-DD
description: "Brief project description"
image: "/images/project-screenshot.jpg"
keywords: "keyword1, keyword2, keyword3"
categories: 'web, mobile, xr'
tags: [jekyll, ruby, javascript]
---
```

### Updating Story Timeline
Edit `_config.yml` under `story:` array:
```yaml
story:
  - year: 2024
    month: October
    title: "Major Achievement"
    blurb: "Description with <strong>HTML</strong> allowed"
    img: "/images/timeline-image.jpg"
```

## 🔧 Development Workflows

### Jekyll 4.x Development
```bash
# Switch to Ruby 3.3.4 environment
source /usr/local/rvm/scripts/rvm
rvm use 3.3.4@jekyll4

# Build site
BUNDLE_GEMFILE=Gemfile.phase3 bundle exec jekyll build --source source --destination _site_jekyll4

# Development server with live reload
BUNDLE_GEMFILE=Gemfile.phase3 bundle exec jekyll serve --source source --host 0.0.0.0 --livereload
```

### Legacy Jekyll 3.8 Fallback
```bash
# Use system Ruby 2.4 (if available)
bundle exec jekyll serve --source source
```

## 🚀 Deployment

### Automated Deployment (Recommended)
```bash
# Deploy Jekyll 4.x to production
rake -f Rakefile.jekyll4 publish
```

### Manual Deployment
```bash
# Build production site
BUNDLE_GEMFILE=Gemfile.phase3 bundle exec jekyll build --source source --destination _production

# Deploy to GitHub Pages master branch
# (Custom deployment script handles this)
```

## 📊 Performance & SEO

### Build Performance
- **Jekyll 4.x**: ~0.5s build time with enhanced features
- **Jekyll 3.8**: ~0.3s build time (minimal features)

### SEO Features
- Automatic RSS feed generation
- XML sitemap with proper URLs
- Enhanced meta tags and OpenGraph
- Mobile-first responsive design
- Semantic HTML structure

## 🔄 Migration History

### Phase 1: Jekyll 3.6 → 3.8 (Safe Upgrade)
- Updated gems within Ruby 2.4 compatibility
- Preserved all existing functionality
- Fixed layout compatibility issues

### Phase 2: Bourbon Framework Elimination
- Replaced Bourbon mixins with custom SASS
- Modernized CSS architecture
- Eliminated deprecated dependencies

### Phase 3: Jekyll 4.x + Ruby 3.3.4 Migration
- Complete stack modernization
- Enhanced SEO and RSS capabilities
- Modern deployment automation
- **Production Status**: ✅ Live at nem.codes

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Follow Jekyll 4.x development workflow
4. Test locally with `BUNDLE_GEMFILE=Gemfile.phase3 bundle exec jekyll serve`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Ruby Version Issues
```bash
# Install and switch to Ruby 3.3.4
rvm install 3.3.4
rvm use 3.3.4@jekyll4 --create
```

### Jekyll 4.x Build Errors
```bash
# Clean and rebuild
rm -rf _site_jekyll4
BUNDLE_GEMFILE=Gemfile.phase3 bundle exec jekyll clean
BUNDLE_GEMFILE=Gemfile.phase3 bundle exec jekyll build --source source --destination _site_jekyll4
```

### Deployment Issues
```bash
# Use Jekyll 4.x Rakefile
rake -f Rakefile.jekyll4 -T  # List available tasks
rake -f Rakefile.jekyll4 publish  # Deploy to production
```

---

**Built with ❤️ using Jekyll 4.x + Ruby 3.3.4**
