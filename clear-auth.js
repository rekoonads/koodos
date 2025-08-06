// Simple script to clear authentication cache
// Run this if users are experiencing auto-login issues

const fs = require('fs')
const path = require('path')

console.log('Clearing authentication cache...')

// Clear .next cache
const nextCacheDir = path.join(__dirname, '.next')
if (fs.existsSync(nextCacheDir)) {
  fs.rmSync(nextCacheDir, { recursive: true, force: true })
  console.log('✓ Cleared .next cache')
}

// Clear node_modules/.cache if it exists
const nodeModulesCacheDir = path.join(__dirname, 'node_modules', '.cache')
if (fs.existsSync(nodeModulesCacheDir)) {
  fs.rmSync(nodeModulesCacheDir, { recursive: true, force: true })
  console.log('✓ Cleared node_modules cache')
}

console.log('✓ Authentication cache cleared successfully!')
console.log('Please restart your development server: npm run dev')