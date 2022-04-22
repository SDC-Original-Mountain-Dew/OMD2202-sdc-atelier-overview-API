\copy products FROM './server1/db/_productSAMPLE.csv' WITH (FORMAT CSV, HEADER);
UPDATE products SET product_description = substring(product_description from 1 for 25);

\copy features FROM './server1/db/_featuresSAMPLE.csv' WITH (FORMAT CSV, HEADER);

\copy styles FROM './server1/db/_stylesSAMPLE.csv' WITH (FORMAT CSV, HEADER);

\copy photos FROM './server1/db/_photosSAMPLE.csv' WITH (FORMAT CSV, HEADER);
UPDATE photos SET photo_url = substring(photo_url from 1 for 25);
UPDATE photos SET photo_thumbnail_url = substring(photo_thumbnail_url from 1 for 25);

\copy stock FROM './server1/db/_skusSAMPLE.csv' WITH (FORMAT CSV, HEADER);




-- TABLE products;
-- TABLE features;
-- TABLE styles;
-- TABLE photos;
-- TABLE stock;
