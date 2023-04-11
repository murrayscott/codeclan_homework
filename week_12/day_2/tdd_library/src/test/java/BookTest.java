import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BookTest {

    private Book book;

    @Before
    public void setup(){
        book = new Book("Harry Potter", "J.K. Rowling", "Fantasy");
    }

    @Test
    public void hasTitle(){
        assertEquals("Harry Potter", book.getTitle());
    }

    @Test
    public void hasAuthor(){
        assertEquals("J.K. Rowling", book.getAuthor());
    }

    @Test
    public void hasGenre(){
        assertEquals("Fantasy", book.getGenre());
    }
}
