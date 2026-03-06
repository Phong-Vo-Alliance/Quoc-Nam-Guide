# AI Agent Guidelines

## Project
Internal User Guideline Portal (React + Vite)

## UI Principles
- Follow Notion-style help center layout
- Content container should feel balanced and not too narrow
- Prefer readable content width (~900–1100px)

## Layout Rules
- Sidebar width: 260–280px
- Main content max-width: ~1040px
- Article content max-width: ~900px
- TOC width: ~280px

## Styling
- Use Tailwind utilities when possible
- Reuse styles defined in App.css and index.css
- Keep emerald brand accent

## Content
- Articles are written in MDX
- Images stored next to article files
- Each guide follows step-by-step structure

## Search
- Use Fuse.js
- Support Vietnamese search without diacritics

## Constraints
- Do not break existing routing
- Avoid unnecessary dependencies