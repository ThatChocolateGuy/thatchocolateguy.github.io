# AI Coding Instructions for nem.codes Portfolio

## Project Overview
This is a Jekyll-based portfolio site for Nem Ekpunobi, deployed to GitHub Pages at nem.codes. The site showcases projects, tells a career story timeline, and maintains a developer blog focused on XR/AR/VR, full-stack development, and spatial computing.

## Architecture & Key Patterns

### Jekyll Structure & Build Process
- **Source Directory**: All source files live in `source/` (not Jekyll default)
- **Destination**: Builds to `_site/` directory
- **Custom Build**: Uses `install.sh` script that installs Bourbon SASS, then runs Jekyll build
- **Deployment**: Rakefile automates GitHub Pages deployment to `master` branch via `rake publish`

### Content Architecture
- **Posts**: Project showcases in `source/_posts/` with rich frontmatter (tags, categories, images, descriptions)
- **Story Timeline**: Configured in `_config.yml` under `story:` array - each entry has year, month, title, blurb, and image
- **Dynamic Navigation**: `navbar:` array in config controls main nav items
- **Project Links**: External project links stored in `projects.ext-links:` in config

### Styling & Design System
- **SASS Architecture**: Uses Bourbon framework with modular imports in `source/_sass/main.sass`
- **Variables**: Centralized in `_variables.sass` with brand colors (primary: #337ab7, accent: #f05183)
- **Custom Styles**: Per-page styles often embedded in markdown/HTML files (see posts and story.html)
- **Timeline Carousel**: Custom Slick.js implementation in `story.js` with responsive breakpoints

### Page Types & Layouts
- **Homepage** (`index.html`): Hero section with bio, tagline "EMOTION, ENGINEERED", and CTA buttons
- **Story Page** (`story.md`): Uses `story.html` include for timeline carousel
- **Project Posts**: Use `post` layout with image headers, project descriptions, and demo links
- **Special Pages**: WordPress portfolio page with custom styling and project grid

## Development Workflows

### Content Creation
```bash
# Start development server
bundle exec jekyll serve --source source

# Create new project post
# Follow naming: YYYY-MM-DD-project-name.md in source/_posts/
# Include required frontmatter: layout, title, permalink, image, keywords, categories, tags
```

### Deployment
```bash
# Full deployment to GitHub Pages
rake publish

# Local build only
./install.sh
# or
bundle exec jekyll build --source source
```

### Adding Story Timeline Entries
Edit `_config.yml` under `story:` array - requires title, year/month, blurb (HTML allowed), and optional img path.

## Project Conventions

### Image Management
- Author photos: `/images/author.png`
- Project screenshots: `/images/` and `/Screenshots/` (mixed case)
- Timeline images: Referenced in story config, stored in `/images/`

### Frontmatter Standards
- **Required**: layout, title, permalink, date, description, image, keywords, categories, tags
- **Keywords**: Long comma-separated string for SEO (see existing posts for pattern)
- **Categories**: Simple string like 'web, cloud'
- **Tags**: YAML array format

### URL Structure
- Projects: `/projects/YYYY/title/` (permalink setting)
- Special pages: Custom permalinks (e.g., `/certitrack`, `/wordpress`)
- Pagination: `/page/:num/` for project listing

### Responsive Design
- Desktop-first approach with mobile breakpoints
- Timeline carousel: 3→2→1 slides on desktop→tablet→mobile
- Custom grid layouts using CSS Grid where appropriate

## External Dependencies & Integration
- **CDN Assets**: jQuery 3.2.1, Slick Carousel 1.8.1 loaded from CDNjs
- **Google Analytics**: UA-135143182-1 configured in config
- **Social Links**: Configured in author section of `_config.yml`
- **Domain**: Custom domain `nem.codes` managed via CNAME file in deployment

## Legacy Dependencies & Upgrade Challenges

### Critical Constraints
- **Jekyll 3.6.3** (2017): Major breaking changes in Jekyll 4.0+ (2019)
- **Ruby 2.4.0** (2016): End-of-life, modern gems require Ruby 2.7+
- **Bourbon 4.3.4**: Deprecated SASS framework, replaced by modern CSS Grid/Flexbox
- **Pygments**: Deprecated syntax highlighter, replaced by Rouge in Jekyll 4.0+

### Breaking Changes in Modern Versions
- Jekyll 4.0+ drops support for Ruby < 2.5
- Bourbon 5.0+ completely changed API and removed many mixins
- `jekyll-sass-converter` 2.0+ requires Sass 1.0+ (breaking changes from 3.4)
- `kramdown` 2.0+ has different parser behavior and stricter syntax
- `jekyll-paginate-v2` may conflict with Jekyll 4.0+ pagination

### Safe Upgrade Strategy
```bash
# 1. Incremental Jekyll upgrade (stay in 3.x family)
gem "jekyll", "~>3.9.0"  # Last 3.x version with Ruby 2.4 support

# 2. Update supporting gems cautiously
gem "kramdown", "~>1.17.0"  # Keep 1.x for compatibility
gem "sass", "~>3.7.4"       # Last 3.x version

# 3. Replace deprecated gems
# Remove: gem "pygments.rb"
# Add: gem "rouge", "~>3.30.0"

# 4. Bourbon migration plan
# Phase 1: Lock to Bourbon 4.x, audit mixin usage
# Phase 2: Replace Bourbon mixins with modern CSS
# Phase 3: Remove Bourbon dependency entirely
```

### Development Dependencies Timeline
- **Current**: Jekyll 3.6 + Ruby 2.4 + Bourbon 4.3 (2017-era stack)
- **Target**: Jekyll 4.3+ + Ruby 3.1+ + Modern CSS (2024+ stack)
- **Risk**: Direct upgrade breaks Bourbon mixins, SASS compilation, and Jekyll plugins

## Key Files for AI Agents
- `_config.yml`: Site configuration, story data, author info, project links
- `source/_layouts/`: Template hierarchy (default→pages→post)
- `source/_sass/_variables.sass`: Design system tokens
- `Rakefile`: Deployment automation and GitHub Pages publishing
- `source/_includes/story.html`: Timeline carousel implementation
- `Gemfile.lock`: **CRITICAL** - Shows 2017-era dependencies; major upgrade risks