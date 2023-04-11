import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.HashMap;

import static org.junit.Assert.assertEquals;

public class LibraryTest {
    private Library library;
    private ArrayList<Book> books;
    private HashMap<String, String> genreList;
    private Book book1;
    private Book book2;
    private Book book3;
    private Book book4;

    @Before
    public void setup(){
        library = new Library();
        books = new ArrayList<>();
        genreList = new HashMap<String, String>();
        book1 = new Book("A-Z of Garden Plants", "Alan Titchmarsh", "Reference");
        book2 = new Book("Nature Diary", "Janet Marsh", "Reference");
        book3 = new Book("It's not about the bike", "Lance Armstrong", "Biography");
        book4 = new Book("At the edge", "Danny MacAskill", "Biography");
    }

    @Test
    public void booksIsEmpty(){
        assertEquals(0, library.getCount());
    }

    @Test
    public void canAddBook(){
        library.addBook(book1);
        library.addBook(book2);
        library.addBook(book3);
        library.addBook(book4);
        assertEquals(4, library.getCount());
    }

    @Test
    public void hasBook(){
        library.addBook(book1);
        library.addBook(book2);
        library.addBook(book3);
        library.addBook(book4);
        assertEquals(true, library.hasBookByTitle("Nature Diary"));
    }

    @Test
    public void emptyGenreList(){
        assertEquals(0,library.getCountGenre());
    }

    @Test
    public void addBookToGenreList(){
        library.addBook(book1);
        assertEquals(1,library.getCountGenre());
    }

    @Test
    public void numberOfGenre(){
        library.addBook(book1);
        library.addBook(book2);
        library.addBook(book3);
        library.addBook(book4);
        assertEquals(2, library.numberByGenre("Reference"));
    }

    @Test
    public void numberOfGenreNotPresent(){
        assertEquals(0, library.numberByGenre("Romance"));
    }
}