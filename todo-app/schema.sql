CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE characters (
  character_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  unlock_cost INTEGER NOT NULL CHECK (unlock_cost >= 0),
  image_url TEXT
);

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL UNIQUE,
  joined_at TIMESTAMPTZ DEFAULT now(),
  dark_mode BOOLEAN NOT NULL DEFAULT false,
  coins INTEGER NOT NULL DEFAULT 0,
  chosen_character_id UUID REFERENCES characters(character_id),
  unlocked_characters UUID[] DEFAULT '{}'
);

CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  text TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);
