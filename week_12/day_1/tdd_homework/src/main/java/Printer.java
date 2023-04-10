public class Printer {
    private int paper;
    private int toner;
    private int totalPages;

    public Printer(int paper, int toner) {
        this.paper = paper;
        this.toner = toner;
    }

    public String setPrint(int pages, int copies){
        totalPages = pages * copies;
        if (paper > totalPages && toner > totalPages) {
            paper = paper - totalPages;
            toner = toner - totalPages;
            return totalPages + " pages printed.";
        }
        else {
                return "Nothing printed: You only have enough paper for " + paper + " pages, and enough toner for " + toner +" pages.";
        }
    }

    public int getPages(){
        return Math.min(paper,toner);
    }
}
