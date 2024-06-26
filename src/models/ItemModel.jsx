class Item {
    constructor(id, name, description, quantity, benefitItems) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }

    // Getters and Setters

    // toJson method
    toJson() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            quantity: this.quantity,
            benefitItems: this.benefitItems.map(item => item.toJson())
        };
    }

    // fromJson method
    static fromJson(json) {
        return new Item(
            json.id,
            json.name,
            json.description,
            json.quantity,
        );
    }
}

export default Item;
