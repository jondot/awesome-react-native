install:
	@bundle install
	@npm i -g gh-deploy
	@gem install jill
	@pip install -r requirements.txt
docs:
	@rm -rf docs
	@mkdir docs
	@cp *.md docs/
	@cp README.md docs/index.md
	@cp extra.css docs/
	@cp icon.svg docs/
	@cp CNAME docs/

publish: docs
	@mkdocs gh-deploy --clean
	@rm -rf docs

serve: docs
	@mkdocs serve



.PHONY: docs publish serve check stars install


