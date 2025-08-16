-- Seed script for Koodos gaming platform
-- This script will populate the database with initial categories and sample data

-- Insert gaming categories
INSERT INTO categories (id, name, slug, description, color) VALUES
  ('cat_news', 'Latest News', 'latest-news', 'Breaking news and updates from the gaming world', '#ef4444'),
  ('cat_reviews', 'Reviews', 'reviews', 'In-depth game reviews and ratings', '#8b5cf6'),
  ('cat_guides', 'Gaming Guides', 'gaming-guides', 'Tips, tricks, and walkthroughs', '#06b6d4'),
  ('cat_esports', 'Esports', 'esports', 'Competitive gaming news and tournaments', '#f59e0b'),
  ('cat_hardware', 'Hardware', 'hardware', 'Gaming hardware reviews and recommendations', '#10b981'),
  ('cat_indie', 'Indie Games', 'indie-games', 'Independent game spotlights and reviews', '#ec4899');

-- Insert sample tags
INSERT INTO tags (id, name, slug) VALUES
  ('tag_action', 'Action', 'action'),
  ('tag_rpg', 'RPG', 'rpg'),
  ('tag_fps', 'FPS', 'fps'),
  ('tag_strategy', 'Strategy', 'strategy'),
  ('tag_multiplayer', 'Multiplayer', 'multiplayer'),
  ('tag_singleplayer', 'Single Player', 'single-player'),
  ('tag_pc', 'PC', 'pc'),
  ('tag_console', 'Console', 'console'),
  ('tag_mobile', 'Mobile', 'mobile');
