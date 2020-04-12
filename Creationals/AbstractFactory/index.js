/*
 * Windows Factory
 */
var WindowsFactory = /** @class */ (function () {
    function WindowsFactory() {
    }
    WindowsFactory.prototype.createButton = function () {
        return new WindowsButton();
    };
    WindowsFactory.prototype.createCheckbox = function () {
        return new WindowsCheckbox;
    };
    return WindowsFactory;
}());
/*
 * Mac Factory
 */
var MacFactory = /** @class */ (function () {
    function MacFactory() {
    }
    MacFactory.prototype.createButton = function () {
        return new MacButton();
    };
    MacFactory.prototype.createCheckbox = function () {
        return new MacCheckbox;
    };
    return MacFactory;
}());
/*
 * Windows elements
 */
var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.printResultButton = function () {
        return 'A Windows button have been created!';
    };
    return WindowsButton;
}());
var WindowsCheckbox = /** @class */ (function () {
    function WindowsCheckbox() {
    }
    WindowsCheckbox.prototype.printResultCheckbox = function () {
        return 'A Windows checkbox have been created!';
    };
    return WindowsCheckbox;
}());
/*
 * Mac elements
 */
var MacButton = /** @class */ (function () {
    function MacButton() {
    }
    MacButton.prototype.printResultButton = function () {
        return 'A Mac button have been created!';
    };
    return MacButton;
}());
var MacCheckbox = /** @class */ (function () {
    function MacCheckbox() {
    }
    MacCheckbox.prototype.printResultCheckbox = function () {
        return 'A Mac checkbox have been created!';
    };
    return MacCheckbox;
}());
/*
 * Aux Function
 */
function clientCode(factory) {
    var button = factory.createButton();
    var checkbox = factory.createCheckbox();
    console.log(button.printResultButton());
    console.log(checkbox.printResultCheckbox());
}
/*
 * Create a windows elements
 */
console.log('Creating Windows elements');
//const factory1 = new WindowsFactory();
//const button = factory1.createButton();
//const checkbox = factory1.createCheckbox();
//console.log(button.printResultButton())
//console.log(checkbox.printResultCheckbox())
clientCode(new WindowsFactory);
console.log('==========================');
console.log('Creating Mac elements');
clientCode(new MacFactory);
