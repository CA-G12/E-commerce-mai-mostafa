BEGIN ; 

    DROP TABLE IF EXISTS categories , products ; 

    CREATE TABLE categories (
        id serial primary key , 
        name VARCHAR (100) not null ,
        description VARCHAR (255) not null 
    ); 

       CREATE TABLE products (
        id SERIAL primary key , 
        name VARCHAR (100) not null,
        description VARCHAR (255) not null  ,
        image VARCHAR(400) not null  ,
        price int not null  ,
        category_id int not null ,
        FOREIGN KEY (category_id) REFERENCES categories(id)
    ); 

   INSERT INTO categories (name, description)
    VALUES ('SANDWICH', 'SANDWICH description') ,
            ('HAMBURGER', 'HAMBURGER description') ,
            ('DESSERT', 'DESSERT description') ,
            ('SALAD', 'SALAD description') 

    ;

    INSERT INTO products (name, description, image, price, category_id)
    VALUES ('HAMBURGER meat', 'HAMBURGER meat description', 'HAMBURGER meat image', 24, 2) ,
            ('FRESH SALAD', 'FRESH SALAD description', 'FRESH SALAD image', 10, 4) ,
            ('cake', 'cake description', 'cake image', 8, 3) ,
            ('SANDWICH falafl;', 'SANDWICH falafl image ', 'SANDWICH falafl image', 3, 1) 
    ;


COMMIT;