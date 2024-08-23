class Computer {
    constructor(brand, OS, type) {
        this.brand = brand;
        this.OS = OS;
        this.type = type;
    }

    powerOn() {
        console.log(`${this.brand} ${this.type} powers on with ${this.OS}.`);
    }

    static poweronEach(computers) {
        computers.forEach(computer => computer.powerOn());
    }
}

// Create two instances of the Computer class
const computer1 = new Computer('Custom', 'Fedora', 'Desktop');
const computer2 = new Computer('Dell', 'Windows 11 Pro', 'Laptop');

// Test the two instances to verify they behave as expected
computer1.powerOn(); // Returned "Custom Dektop powers on with Fedora."
computer2.powerOn(); // Returned "Dell Laptop powers on with Windows 11 Pro."
