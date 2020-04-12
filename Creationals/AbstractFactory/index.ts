
/*
 * Use Abstract Factory pattern to create buttons and checkbox
 * in Windows and Mac OS
 */
interface GUIFactory {
    createButton() : Button;

    createCheckbox() : Checkbox;
}

/*
 * Windows Factory
 */ 
class WindowsFactory implements GUIFactory{
    public createButton(): Button {
        return new WindowsButton();
    }

    public createCheckbox(): Checkbox {
        return new WindowsCheckbox;
    }

}

/*
 * Mac Factory
 */
class MacFactory implements GUIFactory{
    public createButton(): Button {
        return new MacButton();
    }

    public createCheckbox(): Checkbox {
        return new MacCheckbox;
    }

}

/*
 * Button Interface
 */

interface Button{
    printResultButton() : string;
}

/*
 * Button Checkbox
 */

interface Checkbox{
    printResultCheckbox() : string;
}


/*
 * Windows elements
 */
class WindowsButton implements Button {
    printResultButton(): string {
        return 'A Windows button have been created!'
    }
}

class WindowsCheckbox implements Checkbox{
    printResultCheckbox(): string{
        return 'A Windows checkbox have been created!'
    }
}

/*
 * Mac elements
 */
class MacButton implements Button {
    printResultButton(): string {
        return 'A Mac button have been created!'
    }
}

class MacCheckbox implements Checkbox{
    printResultCheckbox(): string{
        return 'A Mac checkbox have been created!'
    }
}


/*
 * Aux Function
 */

function clientCode(factory: GUIFactory){
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    console.log(button.printResultButton())
    console.log(checkbox.printResultCheckbox())
}

/*
 * Create a windows elements
 */

console.log('Creating Windows elements')
//const factory1 = new WindowsFactory();
//const button = factory1.createButton();
//const checkbox = factory1.createCheckbox();
//console.log(button.printResultButton())
//console.log(checkbox.printResultCheckbox())
clientCode(new WindowsFactory);

console.log('==========================')
console.log('Creating Mac elements')
clientCode(new MacFactory);