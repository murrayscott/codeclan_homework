import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PrinterTest {

    private Printer printer;

    @Before
    public void setup() {
        printer = new Printer(1000,500);
    }

    @Test
    public void hasPagesLeft(){
        assertEquals(500,printer.getPages());
    }

    @Test
    public void printFourHunderdPages(){
        printer.setPrint(40,10);
        assertEquals(100,printer.getPages());
    }

    @Test
    public void printFourHunderdAndEightyPagesAndThenTryMore(){
        printer.setPrint(48,10);
        printer.setPrint(10,3);
        assertEquals(20,printer.getPages());
    }
}


