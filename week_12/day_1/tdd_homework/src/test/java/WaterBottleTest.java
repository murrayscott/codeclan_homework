import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class WaterBottleTest {
    private WaterBottle waterBottle;
    @Before
    public void setup(){
        waterBottle = new WaterBottle();
        waterBottle.setFull();
    }

    @Test
    public void hasVolumeAfterFill(){
        waterBottle.setFull();
        assertEquals(100,waterBottle.getVolume());
    }

    @Test
    public void hasVolumeAfterOneDrink(){
        waterBottle.setDrink();
        assertEquals(90,waterBottle.getVolume());
    }

    @Test
    public void hasVolumeAfterTwoDrinks(){
        waterBottle.setDrink();
        waterBottle.setDrink();
        assertEquals(80,waterBottle.getVolume());
    }

    @Test
    public void hasVolumeAfterEmpty(){
        waterBottle.setEmpty();
        assertEquals(0,waterBottle.getVolume());
    }
}
