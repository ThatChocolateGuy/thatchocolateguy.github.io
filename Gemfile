source "https://rubygems.org"

# Phase 1: Conservative upgrade - compatible with Ruby 2.4
gem "jekyll", "~>3.8.0"
gem "rake", "~>12.3"
gem "sass", "~>3.7"
gem "json", "~> 2.6"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  # gem "bourbon", "~>4.3"          # REMOVED - Bourbon eliminated in Phase 2!
  gem "jekyll-feed", "~>0.11"     # Last version compatible with Ruby 2.4
  gem "jekyll-paginate-v2", "~>2.0" # Use 2.x for Ruby 2.4 compatibility
  gem "rouge", "~>3.26"           # Replace pygments, Ruby 2.4 compatible
  gem "jekyll-compose"
  gem "kramdown", "~>1.17"       # Stay on 1.x for compatibility
end