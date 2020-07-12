BEGIN;

TRUNCATE
    shirtspec_stores,
    shirtspec_customers
    RESTART IDENTITY CASCADE;

INSERT INTO shirtspec_stores (user_name, password)
VALUES
    ('Drinkwater''s', '$2a$12$HVXcTSsccGPgecdJHagUK.b7er3baB81JLPhIlX1Xb/RggbRqlAK.'),
    ('Louis', '$2a$12$9pj/UQbnU8cioW9bVFlVzeB30xWMqK6F0FMHTlJCcPj5HajvcWNVK'),
    ('Bergdorf', '$2a$12$6xFPQJmCqfdSOMtPrQMhUOuPkVKsu6ViUK.fPGh/IGTtoAI67MF4.'),
    ('test', '$2a$12$mRZQbLhTBCsqJpAvA9j0DeWd8iwmNwRhK7E/vM6EIhZ8CfN4/arHu');

INSERT INTO shirtspec_customers (store_id, customer_name, chest, shirt_waist, yoke,
shaping, left_sleeve, right_sleeve, left_cuff, right_cuff, tail, collar, shoulder_line)
VALUES 
    (1, 'Steven', 36, 30, 17, -6, 33, 33, 9, 9, 28, 15, 'square'),
    (2, 'Gary', 42, 36, 18.5, -4, 35, 35, 10.75, 10.5, 31, 16.5, 'regular'),
    (1, 'Gus', 42, 34, 18, -3, 35, 35, 10, 10, 32, 17, 'square');

COMMIT;