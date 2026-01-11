# Rokia.xyz

This is the source code for [Rokia's Blog](https://rokia.xyz), a static site built with [Hugo](https://gohugo.io/).

## Development

To run the local development server with live reload:

```bash
hugo server
```

The site will be available at `http://localhost:1313/`.

## Creating Content

To create a new note (blog post):

```bash
hugo new content/notes/my-new-note.md
```

## Building for Production

To build the static site (output to `public/` directory):

```bash
hugo
```

## Project Structure

- `content/`: Markdown content for pages and notes.
- `layouts/`: HTML templates.
- `static/`: Static assets like CSS, JS, fonts, and images.
- `assets/`: Processed assets (like SVGs).
- `hugo.yaml`: Site configuration.
