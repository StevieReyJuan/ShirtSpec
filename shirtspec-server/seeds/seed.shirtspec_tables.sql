BEGIN;

TRUNCATE
    shirtspec_stores,
    shirtspec_customers
    RESTART IDENTITY CASCADE;

INSERT INTO shirtspec_stores (user_name, password)
VALUES
    ('Drinkwater''s', 'test123'),
    ('Louis', 'test456'),
    ('Bergdorf', 'test 789');

INSERT INTO shirtspec_customers (store_id, customer_name, chest, shirt_waist, yoke,
shaping, left_sleeve, right_sleeve, left_cuff, right_cuff, tail, collar, shoulder_line)
VALUES 
    (1, 'Steven', 36, 30, 17, -6, 33, 33, 9, 9, 28, 15, 'square'),
    (2, 'Gary', 42, 36, 18.5, -4, 35, 35, 10.75, 10.5, 31, 16.5, 'regular'),
    (1, 'Gus', 42, 34, 18, -3, 35, 35, 10, 10, 32, 17, 'square');

COMMIT;