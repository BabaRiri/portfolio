#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Setup script for the portfolio site
.DESCRIPTION
    This script performs the following tasks:
    1. Verifies Node.js and npm are installed
    2. Installs project dependencies
    3. Builds the project
    4. Provides instructions for running in development mode
#>

# Functions
function Test-CommandExists {
    param (
        [string]$command
    )
    $exists = $null -ne (Get-Command $command -ErrorAction SilentlyContinue)
    return $exists
}

function Write-ColorOutput {
    param (
        [string]$message,
        [string]$color = "White"
    )
    Write-Host $message -ForegroundColor $color
}

# Step 1: Check Prerequisites
Write-ColorOutput "🔍 Checking prerequisites..." "Cyan"

if (-not (Test-CommandExists "node")) {
    Write-ColorOutput "❌ Node.js is not installed. Please install Node.js (v14.x or later) from https://nodejs.org/" "Red"
    exit 1
}

if (-not (Test-CommandExists "npm")) {
    Write-ColorOutput "❌ npm is not installed. It should come with Node.js installation." "Red"
    exit 1
}

# Display Node.js and npm versions
$nodeVersion = node -v
$npmVersion = npm -v
Write-ColorOutput "✅ Node.js version: $nodeVersion" "Green"
Write-ColorOutput "✅ npm version: $npmVersion" "Green"

# Step 2: Install dependencies
Write-ColorOutput "`n📦 Installing dependencies..." "Cyan"
npm ci

if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput "⚠️ 'npm ci' failed, trying 'npm install' instead..." "Yellow"
    npm install
    
    if ($LASTEXITCODE -ne 0) {
        Write-ColorOutput "❌ Failed to install dependencies. Check the error messages above." "Red"
        exit 1
    }
}

Write-ColorOutput "✅ Dependencies installed successfully" "Green"

# Step 3: Run linting (optional)
Write-ColorOutput "`n🔍 Running linter..." "Cyan"
npm run lint

if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput "⚠️ Linting found issues. Consider fixing them before proceeding." "Yellow"
} else {
    Write-ColorOutput "✅ Linting passed" "Green"
}

# Step 4: Run tests (optional)
Write-ColorOutput "`n🧪 Running tests..." "Cyan"
npm run test

if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput "⚠️ Some tests failed. Consider fixing them before proceeding." "Yellow"
} else {
    Write-ColorOutput "✅ All tests passed" "Green"
}

# Step 5: Build the project
Write-ColorOutput "`n🏗️ Building the project..." "Cyan"
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput "❌ Failed to build the project. Check the error messages above." "Red"
    exit 1
}

Write-ColorOutput "✅ Project built successfully" "Green"

# Final instructions
Write-ColorOutput "`n🎉 Setup completed successfully!" "Magenta"
Write-ColorOutput "`nTo run the development server:" "Cyan"
Write-ColorOutput "  npm run dev" "White"
Write-ColorOutput "`nTo preview the production build:" "Cyan"
Write-ColorOutput "  npm run preview" "White"
Write-ColorOutput "`nTo deploy to GitHub Pages:" "Cyan"
Write-ColorOutput "  npm run deploy" "White"
Write-ColorOutput "`nThe development server will be available at http://localhost:5173/ by default" "Yellow"
