# Phase 3: Jekyll 4.x Migration Guide

## Prerequisites
- Ruby 2.5+ (preferably Ruby 3.1+)
- Bundler 2.0+

## Migration Steps

### Step 1: Update Ruby Environment
```bash
# Check current Ruby version
ruby --version

# If Ruby < 2.5, upgrade via rbenv, rvm, or system package manager
# Example with rbenv:
rbenv install 3.1.4
rbenv global 3.1.4
```

### Step 2: Backup Current State
```bash
# Create backup of working Phase 2 state
cp Gemfile Gemfile.phase2.backup
cp Gemfile.lock Gemfile.lock.phase2.backup
```

### Step 3: Update Gemfile
```bash
# Replace Gemfile with Jekyll 4.x version
cp Gemfile.jekyll4 Gemfile
```

### Step 4: Update Bundle
```bash
# Clean and update bundle
bundle clean --force
rm Gemfile.lock
bundle install
```

### Step 5: Test Build
```bash
# Test Jekyll 4.x build
bundle exec jekyll build --source source --config _config.yml

# Start development server
bundle exec jekyll serve --source source --config _config.yml
```

### Step 6: Address Breaking Changes

#### Kramdown 2.x Changes
If you encounter markdown parsing issues:
```yaml
# Add to _config.yml if needed
kramdown:
  input: GFM
  hard_wrap: false
  syntax_highlighter: rouge
```

#### Plugin Compatibility
- `jekyll-paginate-v2` 3.x has new configuration options
- Check plugin documentation for any breaking changes

#### SASS/SCSS Changes
- Modern Sass (Dart Sass) may have stricter parsing
- Check for any division operator warnings (`/` → `math.div()`)

### Step 7: Performance Optimizations

#### Add Modern Build Features
```yaml
# Add to _config.yml for better performance
sass:
  sass_dir: _sass
  style: compressed
  sourcemap: development

liquid:
  error_mode: warn
  strict_filters: false
  strict_variables: false
```

## Expected Benefits After Migration

### Performance Improvements
- **Faster Build Times**: Jekyll 4.x is significantly faster
- **Better Caching**: Improved incremental builds
- **Modern Ruby**: Better memory management and performance

### New Features Available
- **Sass Sourcemaps**: Better debugging in development
- **Liquid Improvements**: More template features
- **Plugin System**: Enhanced plugin architecture

### Security & Maintenance
- **Active Support**: Jekyll 4.x receives security updates
- **Modern Dependencies**: Up-to-date gem ecosystem
- **Future-Proof**: Compatible with modern Ruby versions

## Rollback Plan
If migration fails:
```bash
# Restore Phase 2 state
cp Gemfile.phase2.backup Gemfile
cp Gemfile.lock.phase2.backup Gemfile.lock
bundle install
```

## Validation Checklist
- [ ] Site builds without errors
- [ ] Homepage displays correctly
- [ ] Story timeline functions
- [ ] All project posts render
- [ ] Images and assets load
- [ ] CSS compilation works
- [ ] Development server starts
- [ ] All links work correctly

## Notes
- This migration is prepared and tested conceptually
- Actual execution requires Ruby 2.5+ environment
- All Phase 1 & 2 improvements are preserved
- Bourbon is completely eliminated
- Modern Jekyll 4.x stack will be significantly faster