DROP DATABASE IF EXISTS overview;
CREATE DATABASE overview;

\c overview;

-- CREATE TABLE categories (
--   category_id SERIAL PRIMARY KEY,
--   category_name TEXT NOT NULL
-- );

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  product_slogan TEXT NOT NULL,
  product_description TEXT NOT NULL,
  product_category TEXT NOT NULL,
  product_default_price INTEGER NOT NULL
  -- category_id SERIAL REFERENCES categories(category_id)
);

CREATE TABLE features (
  feature_id SERIAL PRIMARY KEY,
  feature_name TEXT NOT NULL,
  feature_value TEXT NOT NULL,
  product_id SERIAL REFERENCES products(product_id)
);

CREATE TABLE styles (
  style_id SERIAL PRIMARY KEY,
  style_name TEXT NOT NULL,
  style_price_sale INTEGER NOT NULL,
  style_default BOOLEAN NOT NULL,
  product_id SERIAL REFERENCES products(product_id)
);

CREATE TABLE photos (
  photo_id SERIAL PRIMARY KEY,
  photo_url TEXT NOT NULL,
  photo_thumbnail_url INTEGER NOT NULL,
  style_id SERIAL REFERENCES styles(style_id)
);

CREATE TABLE stock (
  stock_id SERIAL PRIMARY KEY,
  stock_name TEXT NOT NULL,
  stock_quantity INTEGER NOT NULL,
  style_id SERIAL REFERENCES styles(style_id)
);