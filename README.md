# PromptQA - Playwright Automation Framework

## Overview

Automated UI testing framework built using Playwright, TypeScript, Page Object Model (POM), and Allure Reporting.

### Report

https://mithalesh-mk.github.io/PromptQA/

### Application Under Test

https://playground.promptqa.dev/

## Tech Stack

* Playwright
* TypeScript
* Allure Reporting
* GitHub Actions
* Page Object Model (POM)

## Features

* Cross-browser testing
* Data-driven testing
* Page Object Model architecture
* Allure reporting
* GitHub Actions CI/CD integration
* Screenshot capture for test execution
* Video recording on failure
* Automatic report publishing to GitHub Pages

## Run Tests

```bash
npm install
npx playwright test
```

## Generate Allure Report Locally

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Project Structure

```text
pages/
tests/
test-data/
utils/
.github/workflows/
playwright.config.ts
```

## Continuous Integration

Tests are executed automatically through GitHub Actions and the latest Allure report is published to GitHub Pages after each execution.
