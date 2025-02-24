
# Markdown Quality Assurance Guide

This document provides guidelines for contributors on how to use Vale and markdownlint-cli to ensure high-quality markdown files are pushed to the default branch of this repository.

## Prerequisites

Before contributing, make sure you have set up your development environment in a DevContainer. The DevContainer is configured to use Vale and markdownlint-cli for automatic linting, spell-checking, and grammar-checking of markdown files.

1. **Vale**: A tool for style checking that helps ensure consistent writing style and grammar.
2. **markdownlint-cli**: A command-line interface for markdownlint, used to enforce style rules in markdown files.

## Steps for Contributors

### 1. Setting Up Your Environment

Ensure that you've opened the repository in a DevContainer environment, either via GitHub Codespaces or by reopening it in Visual Studio Code. This will enable the automatic configuration for Vale and markdownlint-cli.

### 2. Running Vale

Vale checks markdown files for grammar and stylistic issues according to the selected configuration. To run Vale, open the DevContainer terminal and execute the following command:

```bash
vale .
```

This will scan all markdown files in the repository for potential style issues and report them.

### 3. Running markdownlint-cli

markdownlint-cli checks your markdown files against a set of predefined rules. To run markdownlint-cli, execute the following command in the DevContainer terminal:

```bash
markdownlint .
```

This will check all markdown files in the repository for syntax and formatting errors.

### 4. Fixing Issues

If Vale or markdownlint-cli report any issues, please review them and make necessary corrections. Some common issues that may be flagged include:

- Incorrect spelling or grammar
- Missing or extra spaces after headers
- Incorrect list formatting
- Unescaped special characters

### 5. Pushing Changes

After running both tools and fixing any issues, commit your changes and push them to the repository. Ensure that the markdown files are properly formatted and follow the guidelines before pushing to the default branch.

### 6. Continuous Integration

Once changes are pushed, automated checks will run to ensure that the markdown files meet the quality standards set by Vale and markdownlint-cli.

