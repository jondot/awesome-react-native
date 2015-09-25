require 'parallel'
require 'nokogiri'
require 'open-uri'
require 'kramdown'

BASE_URI = ENV['BASE_URI'] || 'https://github.com/jondot/awesome-react-native'

doc = Nokogiri::HTML(Kramdown::Document.new(open('README.md').read).to_html)
links = doc.css('a').to_a
puts "Validating / deduping #{links.count} links..."

map = {}
dups = []

links.each do |link|
    uri = URI.join(BASE_URI, link.attr('href'))
    if map[uri]
      dups <<  link
    end
    map[uri] = link
end

unless dups.empty?
  puts "\nDuplicate links:"
  dups.each do |link|
    puts "- #{link}"
    puts `grep -nr '#{link.attr('href')}' README.md`
  end
  puts "\nDone with errors."
  exit(1)
end

puts "\nDone."
