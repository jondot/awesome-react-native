#!/usr/bin/env python
# -*- coding: utf-8 -*-

import re
import requests
import progressbar


def update(line, match):
    if match:
        try:
            user, project = match.group(2), match.group(3)
            stars = match.group(1)
            # Make the request to the github api
            r = requests.get(
                "http://api.github.com/repos/{0}/{1}".format(user, project))
            # Get the number of stars from the JSON response
            stars = r.json()['stargazers_count']
            # Replace the number of stars
            return re.sub(match.group(1), str(stars), line)
        except:
            pass
    return line


with open("README.md") as f:
    # Read each all lines
    content = f.readlines()

    # The regex for a starred GitHub link
    starred_regex = re.compile(
        "\[.* ★([0-9]+?)\]\(https://github.com/(.+?)/(.+?)\)")
    # Run the regex against every line
    matches = [(line, starred_regex.search(line)) for line in content]
    # Count the number of matches
    total_matches = 0
    for _, match in matches:
        if match:
            total_matches = total_matches + 1
    print("Checking for updates for {0} links".format(total_matches))
    # Create a progress bar
    progress = progressbar.ProgressBar(
        widgets=[progressbar.Percentage(), progressbar.Bar()])
    # Run the updates
    updated_content = [
        update(line, match) for line, match in progress(matches)
    ]

    # Write the updated README file.
    with open("README.md", "w") as w:
        w.write(''.join(updated_content))
