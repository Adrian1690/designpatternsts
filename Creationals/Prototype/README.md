# Prototype Pattern

Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object. Usually, such an interface contains just a single clone method.

## Structure Explanation
1. The Prototype interface declares the cloning methods. In most cases, it’s a single clone method.

2. The Concrete Prototype class implements the cloning method. In addition to copying the original object’s data to the clone, this method may also handle some edge cases of the cloning process related to cloning linked objects, untangling recursive dependencies, etc.

3. The Client can produce a copy of any object that follows the prototype interface.

## Applicability

- Use the Prototype pattern when your code shouldn’t depend on the concrete classes of objects that you need to copy.

-  Use the pattern when you want to reduce the number of subclasses that only differ in the way they initialize their respective objects. Somebody could have created these subclasses to be able to create objects with a specific configuration.