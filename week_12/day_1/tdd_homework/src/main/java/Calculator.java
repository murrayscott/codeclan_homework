public class Calculator {
    private int first;
    private int second;

    public Calculator(int first,int second){
        this.first = first;
        this.second = second;
    }

    public int getAdd() {
        return first + second;
    }

    public int getSubtract() {
        return first - second;
    }

    public int getMultiply() {
        return first*second;
    }

    public int getDivide() {
        return first/second;
    }
}
