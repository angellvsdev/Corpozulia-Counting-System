// models/BenefitItemModel.js
import Item from "./ItemModel";
class BenefitItem {
    constructor(quantity, item) {
        this.quantity = quantity;
        this.item = item;
    }

    static fromJson(json) {
        return new BenefitItem(json.quantity, Item.fromJson(json.item));
    }
}

export default BenefitItem;
