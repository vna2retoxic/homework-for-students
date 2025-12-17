/*
    Функція для створення об'єкта Book:
    Створити інтерфейс Book з ключами:
    title (string), pages (number)
    
    Написати функцію createBook, яка приймає title і pages
    і повертає об'єкт типу Book.

    Приклад використання:
    const myBook: Book = createBook("TypeScript для початківців", 120);
*/

// 1. Створюємо інтерфейс Book
interface Book {
  title: string;
  pages: number;
}

/**
 * 2. Функція createBook
 * @param title - назва книги
 * @param pages - кількість сторінок
 * @returns об'єкт, що відповідає інтерфейсу Book
 */
function createBook(title: string, pages: number): Book {
  return {
    title: title,
    pages: pages,
  };
}

// Приклад використання:
const myBook: Book = createBook("TypeScript для початківців", 120);

console.log(myBook); 
// Вивід: { title: "TypeScript для початківців", pages: 120 }