# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end



set :relative_links, true


page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  activate :minify_html, remove_input_attributes: false
  activate :sitemap, hostname: "domainname.com"
end

activate :directory_indexes
activate :gzip

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end

[].each do |type|
  proxy "/association/#{type}.html", "/association/show.html", locals: { type: type }, ignore: true
end

activate :dato, live_reload: true
# enable livereload on development
configure :development do
  activate :livereload
end

# config.rb
activate :google_analytics do |ga|
  ga.tracking_id = 'UA-123578627-3' # Replace with your property ID.
end
