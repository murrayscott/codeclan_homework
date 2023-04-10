public class WaterBottle {
    private int volume;

    public WaterBottle(){
        this.volume = volume;
    }

    public int getVolume(){
        return this.volume;
    }

    public int setFull(){
        volume = 100;
        return this.volume;
    }

    public int setDrink(){
        volume = volume - 10;
        if (volume <0) {
            volume =0;
        }
        return this.volume;
    }

    public int setEmpty(){
        volume = 0;
        return this.volume;
    }
}
