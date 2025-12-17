/*
    Pick і Omit:
    Є інтерфейс Product з ключами:
    id, title, price, description
    
    Задача:
    a) Створити тип ProductPreview за допомогою Pick, який містить тільки title і price.
    b) Створити тип ProductWithoutDescription за допомогою Omit, який містить всі ключі, крім description.
*/


interface IFullProduct {
    id: number;
    title: string;
    price: number;
    description: string;
}

// a) Pick — вибираємо лише title та price
type ProductPreview = Pick<IFullProduct, 'title' | 'price'>;

// b) Omit — беремо все, крім description
type ProductWithoutDescription = Omit<IFullProduct, 'description'>;

const preview: ProductPreview = {
    title: "Smartphone",
    price: 500,
};

const productShort: ProductWithoutDescription = {
    id: 2,
    title: "Laptop",
    price: 1200,
};