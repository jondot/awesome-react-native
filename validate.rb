require 'parallel'
require 'open-uri'
require 'net/http'
require 'rexml/document'
require 'kramdown'
require 'httparty'

def check_link(uri)
  HTTParty.head(uri).code.to_i.tap do |status|
    raise "Request had status #{status}" if (400..422).include?(status)
  end
end

BASE_URI = ENV['BASE_URI'] || 'https://github.com/jondot/awesome-react-native'

html_readme = "<html>#{Kramdown::Document.new(open('README.md').read).to_html}</html>"
readme_doctree = REXML::Document.new(html_readme)
links = REXML::XPath.match(readme_doctree, '//a')

puts "Validating #{links.size} links..."

invalids = []
Parallel.each(links, in_threads: 4) do |link|
  href = link.attribute('href').to_s
  begin
    case check_link(URI.join(BASE_URI, href))
    when (200...300)
      putc('.')
    when (300..302)
      putc('w')
    end
  rescue => e
    putc('F')
    invalids << "#{href} (reason: #{e.message})"
  end
end

unless invalids.empty?
  puts "\n\nFailed links:"
  invalids.each do |link|
    puts "- #{link}"
  end
  puts "Done with errors."
  exit(1)
end

# puts "\nDone."
