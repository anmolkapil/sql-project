# SQL App

## Overview

This project is a web application for executing and managing SQL queries. It provides a user-friendly interface for data analysts to run SQL queries, view the query results in a tabular format, and save their frequently used queries for future use. The application layout follows a user-friendly tabs design, allowing users to switch between multiple queries seamlessly.

## JavaScript Framework and Major Packages

- JavaScript Framework: React v18
- Major Packages:
  - `react-simple-code-editor`: A lightweight and customizable code editor for displaying and editing SQL queries.
  - `prismjs`: A syntax highlighter to colorize SQL code for better readability.
  - `papaparse`: A library for parsing CSV data efficiently.

## Page Load Time Measurement

Load Time: 316ms
https://gtmetrix.com/reports/soft-fairy-3669ef.netlify.app/F79Kf1KI/

The page load time was measured using gtmetrix

## Optimizations for Load Time and Performance

1. **Code Splitting:** Used code splitting to split the React components into smaller chunks. This ensures that only the necessary components are loaded initially, reducing the initial load time.

2. **Local Storage for Saved Queries:** Instead of fetching saved queries from a server on every page load, used the browser's local storage to store and retrieve saved queries. This eliminates the need for repetitive server requests and speeds up the application's responsiveness.

3. **Pagination for Query Results:** To avoid rendering a large number of table rows at once, implemented pagination for query results. This ensures that only a limited number of rows are displayed at a time, improving page load and rendering performance.
