# Portfolio Website

This repository contains the source code for my personal portfolio website.

If you were trying to view the website instead of the code, use this link:

**Live site:** `https://asfy59.github.io/portfolio/`

## What this repository contains

The website includes:

* selected projects
* experience and education
* research and open technical artifacts
* resume and contact information

It is built as a static site using Jekyll and the Minimal Mistakes theme, with custom content and styling.

## For visitors

If you are here by accident, the repository itself is mainly the website source code.

The actual portfolio is here:

`https://asfy59.github.io/portfolio/`

## For local development

### Prerequisites

Install:

* Ruby
* Bundler

### Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open:

```text
http://127.0.0.1:4000/portfolio/
```

## Deployment

The site is deployed with GitHub Pages.

Repository:

```text
Asfy59/portfolio
```

Live URL:

```text
https://asfy59.github.io/portfolio/
```

## Project structure

```text
.
├── _config.yml              # Site-wide configuration
├── _data/
│   └── navigation.yml       # Top navigation
├── _pages/                  # Main pages such as projects, about, and resume
├── assets/
│   ├── css/                 # Custom styles
│   ├── files/               # Resume or downloadable files
│   └── images/              # Profile and project images
├── index.md                 # Homepage
└── README.md
```

## Where to edit things

### Site settings

```text
_config.yml
```

### Navigation

```text
_data/navigation.yml
```

### Homepage

```text
index.md
```

### Main pages

```text
_pages/
```

### Styling

```text
assets/css/main.scss
```

### Resume file

```text
assets/files/
```

## Note

This repository is mainly a personal website codebase, not a reusable template or package.

For the portfolio itself, visit:

`https://asfy59.github.io/portfolio/`
