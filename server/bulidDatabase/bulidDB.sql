BEGIN ; 

    DROP TABLE IF EXISTS categories , products ; 

    CREATE TABLE categories (
        id serial primary key , 
        name VARCHAR (100) not null 
        -- description VARCHAR (255) not null 
    ); 

       CREATE TABLE products (
        id SERIAL primary key , 
        pro_name VARCHAR (100) not null,
        description VARCHAR (255) not null  ,
        image VARCHAR(400) not null  ,
        price int not null  ,
        category_id int not null ,
        FOREIGN KEY (category_id) REFERENCES categories(id)
    ); 

   INSERT INTO categories (name)
    VALUES ('Decorations') ,
            ('Sweets') ,
            ('Gifts') ,
            ('Drinks') 
    ;

    INSERT INTO products (pro_name, description, image, price, category_id)
    VALUES ('Decorations Name', 'Decorations Description', 'https://imgmedia.lbb.in/media/2021/11/619ce65f1134120ab58437d2_1637672543359.jpg', 24, 2) ,
            ('Sweets', 'Sweets Description', 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/christmas-cookies.jpg?quality=82&strip=1', 10, 4) ,
            ('Gifts', 'Gifts description', 'https://cdn.decoist.com/wp-content/uploads/2017/12/Create-your-own-gift-box-this-Holiday-Season.jpg', 8, 3) ,
            ('Drinks', 'Drinks description', 'https://insanelygoodrecipes.com/wp-content/uploads/2021/07/A-Glass-of-Cranberry-Cocktail-800x450.jpg', 3, 1) 
    ;


COMMIT;