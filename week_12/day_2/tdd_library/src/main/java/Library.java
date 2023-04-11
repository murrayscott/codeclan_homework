import java.util.ArrayList;
import java.util.HashMap;

public class Library {
    private ArrayList<Book> books;
    private HashMap<String,Integer> genreList;


    public Library() {
        this.books = new ArrayList<>();
        this.genreList = new HashMap<String,Integer>();
    }

    public int getCount(){
        return books.size();
    }

    public void addBook(Book book){
        books.add(book);
        if(genreList.containsKey(book.getGenre())){
            genreList.put(book.getGenre(), genreList.get(book.getGenre())+1);
        }else{
            genreList.put(book.getGenre(), 1);
        }
    }


    public boolean hasBookByTitle(String title) {
        for (Book book : books) {
            if (book.getTitle().equals(title)){
                return true;
            }
        }
        return false;
    }

    public int getCountGenre() {
        return genreList.size();

    }

    public int numberByGenre(String genre) {
        if(genreList.containsKey(genre)){
            return genreList.get(genre);
        }else{
            return 0;
        }

    }
}
