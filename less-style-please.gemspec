# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "less-style-please"
  spec.version       = "0.5.0"
  spec.authors       = ["feeshy"]
  spec.email         = [""]

  spec.summary       = "A pure text Jekyll blog theme with a categories-based tree structure for systematically organizing articles on diverse topics, and the ability to index your content from external platforms into one single website"
  spec.homepage      = "https://github.com/feeshy/less-style-please"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|_data|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.9.0"
  spec.add_runtime_dependency "redcarpet", "~> 3.6"
  spec.add_runtime_dependency "jekyll-seo-tag", "~>2.8.0"
  spec.add_runtime_dependency "jekyll-toc", "~>0.18.0"
  spec.add_runtime_dependency "jekyll-target-blank", "~>2.0", ">= 2.0.2"
  spec.add_runtime_dependency "jekyll-sitemap", "~>1.4.0"
  spec.add_runtime_dependency "jekyll-feed", "~>0.17.0"
  spec.add_runtime_dependency "jekyll-pwa-workbox", "~>5.1", ">= 5.1.41"
  spec.add_runtime_dependency "jekyll-redirect-from", "~>0.16.0"

end