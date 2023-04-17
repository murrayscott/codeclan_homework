package attractions;

import behaviours.IReviewed;
import behaviours.ISecurity;
import behaviours.ITicketed;
import people.Visitor;

public class RollerCoaster  extends Attraction implements ISecurity, IReviewed, ITicketed {

    public RollerCoaster(String name, int rating) {
        super(name, rating);
    }

    @Override
    public boolean isAllowedTo(Visitor visitor) {
        if(visitor.getAge()<13 || visitor.getHeight()<1.46){
            return false;
        }
        else {
            return true;
        }
    }
    @Override
    public double defaultPrice() {
        return 8.40;
    }
    @Override
    public double priceFor(Visitor visitor) {
        if(visitor.getHeight() > 2){
            return defaultPrice() *2;
            }
        else{
            return defaultPrice();
        }
    }
}
