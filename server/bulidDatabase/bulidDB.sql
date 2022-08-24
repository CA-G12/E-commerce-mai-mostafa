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
    VALUES ('SANDWICH') ,
            ('HAMBURGER') ,
            ('DESSERT') ,
            ('SALAD') 
    ;

    INSERT INTO products (pro_name, description, image, price, category_id)
    VALUES ('HAMBURGER meat', 'HAMBURGER meat description', 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 24, 2) ,
            ('FRESH SALAD', 'FRESH SALAD description', 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 10, 4) ,
            ('cake', 'cake description', 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 8, 3) ,
            ('SANDWICH falafl', 'SANDWICH falafl description', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 3, 1) 
    ;


COMMIT;