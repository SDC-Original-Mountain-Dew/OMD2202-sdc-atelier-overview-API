\copy products FROM './product.csv' WITH (FORMAT CSV, HEADER);
UPDATE products SET product_description = substring(product_description from 1 for 25);

\copy features FROM './features.csv' WITH (FORMAT CSV, HEADER);

\copy styles FROM './styles.csv' WITH (FORMAT CSV, HEADER);

\copy photos FROM './photos3.csv' WITH (FORMAT CSV, HEADER);
UPDATE photos SET photo_url = substring(photo_url from 1 for 25);
UPDATE photos SET photo_thumbnail_url = substring(photo_thumbnail_url from 1 for 25);

\copy stock FROM './skus.csv' WITH (FORMAT CSV, HEADER);




-- TABLE products;
-- TABLE features;
-- TABLE styles;
-- TABLE photos;
-- TABLE stock;