require 'rexml/document'
require 'open-uri'
require 'kramdown'

BASE_URI = ENV['BASE_URI'] || 'https://github.com/jondot/awesome-react-native'

html_readme = "<html>#{Kramdown::Document.new(open('README.md').read).to_html}</html>"
readme_doctree = REXML::Document.new(html_readme)
links = REXML::XPath.match(readme_doctree, '//a')

puts "Deduping #{links.size} links..."

map = {}
dups = []

links.each do |link|
  href = link.attribute('href').to_s
  uri = URI.join(BASE_URI, href)
  if map[uri]
    dups <<  href
  end
  map[uri] = href
end

unless dups.empty?
  puts "\nDuplicate links:"
  dups.each do |link|
    puts "- #{link}"
    puts `grep -nr '#{link}' README.md`
  end
  puts "\nDone with errors."
  exit(1)
end

puts "\nDone."
