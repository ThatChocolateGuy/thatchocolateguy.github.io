# Jekyll Portfolio Upgrade Strategy

## Problem Analysis
Your project is stuck on 2017-era dependencies. Direct upgrades break because:
- Jekyll 4.0+ requires Ruby 2.5+ (you have 2.4)
- Bourbon 5.0+ completely changed API
- Sass 3.x → 1.x has breaking changes
- Pygments was deprecated

## Phase 1: Minimal Safe Upgrade (RECOMMENDED START HERE)

### 1.1 Replace Bourbon font variables
In `source/_sass/_variables.sass`, replace:
```sass
$base-font-family: "Montserrat", $helvetica
```
With:
```sass
$base-font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif
```

### 1.2 Update config for Rouge
In `_config.yml`, change:
```yaml
highlighter: pygments
```
To:
```yaml
highlighter: rouge
```

### 1.3 Test with minimal gem updates
Replace current Gemfile with:
```ruby
source "https://rubygems.org"

gem "jekyll", "~>3.9.0"  # Last Jekyll 3.x
gem "rake", "~>12.3"
gem "sass", "~>3.7.4"    # Last Sass 3.x
gem "json", "~> 2.6"

group :jekyll_plugins do
  gem "bourbon", "~>4.3"          # Keep current Bourbon
  gem "jekyll-feed", "~>0.15"
  gem "jekyll-paginate-v2", "~>3.0"
  gem "rouge", "~>3.30"           # Replace pygments
  gem "jekyll-compose"
  gem "kramdown", "~>1.17"       # Stay on 1.x
  gem "kramdown-parser-gfm"
end
```

### 1.4 Update bundle and test
```bash
bundle update
bundle exec jekyll build --source source
```

## Phase 2: Bourbon Elimination (AFTER Phase 1 works)

### 2.1 Remove Bourbon import
In `source/_sass/main.sass`, remove:
```sass
@import "bourbon"
```

### 2.2 Add missing font stack variables
In `source/_sass/_variables.sass`, add at the top:
```sass
// Font stacks (replacing Bourbon)
$helvetica: "Helvetica Neue", Helvetica, Arial, sans-serif !default
$georgia: Georgia, Cambria, "Times New Roman", Times, serif !default
```

### 2.3 Remove Bourbon from Gemfile
Remove the bourbon gem entirely.

## Phase 3: Modern Jekyll (MAJOR UPGRADE)

⚠️ **Only attempt after Phases 1-2 are stable**

### 3.1 Upgrade Ruby to 3.1+
### 3.2 Upgrade to Jekyll 4.3+
### 3.3 Migrate to Sass 1.x
### 3.4 Update all plugins

## Testing Each Phase
```bash
# After each phase:
./install.sh                    # Test build
bundle exec jekyll serve --source source  # Test dev server
rake publish                    # Test deployment (use caution)
```

## Rollback Plan
Keep `Gemfile.lock.backup` after each successful phase:
```bash
cp Gemfile.lock Gemfile.lock.backup
```