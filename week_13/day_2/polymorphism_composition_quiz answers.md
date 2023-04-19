# Polymorphism & Composition Homework - Quiz

# Polymorphism

1. What does the ___word___ 'polymorphism' mean?

Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance. Like we specified in the previous chapter; Inheritance lets us inherit attributes and methods from another class. Polymorphism uses those methods to perform different tasks.

2. What does it mean when we apply polymorphism to OO design? Give a simple Java example.

class Animal {
  public void animalSound() {
    System.out.println("The animal makes a sound");
  }
}

class Pig extends Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}

class Dog extends Animal {
  public void animalSound() {
    System.out.println("The dog says: bow wow");
  }
}

3. What can we use to implement polymorphism in Java?

we use extends when defining the class. 

4. How many 'forms' can an object take when using polymorphism?

Two

5. Give an example of when you could use polymorphism.

When 2 objects have the same common properties.



# Composition and Aggregation

6. What do we mean by 'composition' in reference to object-oriented programming?

Composition is the design technique in object-oriented programming to implement 'IS PART OF' relationship between objects. Composition in java is achieved by using instance variables of other objects.

7. When would you use composition? Provide a simple example in Java.

class Roof {
    private int width;
    private int length;
    private String type;

    ...
}

class House {
    private Roof roof;
    
    public House() {
        this.roof = new Roof();
    }
}

8. Give a difference between composition and aggregation?

Aggregation is similar to composition except that the objects can exist independently from the object which contains them.

9. What is/are the advantage(s) of using composition/aggregation?

When using composition we assign an object to be part of the composition of another object e.g. when we assign an Roof object to our House class, then we are handing ownership of our Roof object over to the House object of which it is now a part. In Aggregation the ownership remains in the individual classes.

10. When using composition, when an object is destroyed, what happens to all the objects it is composed of?

The opjects are also destroyed.

11. When using aggregation, when an object is destroyed, what happens to all the objects it is composed of?

The objects remain and can be reassigned.