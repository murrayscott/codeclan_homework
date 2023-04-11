import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private Calculator calculator;
    @Before
    public void setup() {
        calculator = new Calculator(10,3);
    }

    @Test
    public void canAdd() {
        assertEquals(13, calculator.getAdd());
    }

    @Test
    public void canSubtract() {
        assertEquals(7, calculator.getSubtract());
    }

    @Test
    public void canMultiply() {
        assertEquals(30, calculator.getMultiply());
    }

    @Test
    public void canDivide() {
        assertEquals(3.33, calculator.getDivide(), 0.5);
    }

}
