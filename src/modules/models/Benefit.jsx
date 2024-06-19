import User from './User';
import Request from './Request';
import Item from './Item';

class Benefit {
    constructor(id, user, details, request, status, items, creationDate) {
        this.id = id;
        this.user = user; // This should be an instance of the User class
        this.details = details;
        this.request = request; // This should be an instance of the Request class
        this.status = status; // Boolean value
        this.items = items; // Array of Item instances
        this.creationDate = new Date(creationDate); // Ensure it's a Date object
    }

    // Getters and Setters
    getId() { return this.id; }
    setId(id) { this.id = id; }

    getUser() { return this.user; }
    setUser(user) { this.user = user; }

    getDetails() { return this.details; }
    setDetails(details) { this.details = details; }

    getRequest() { return this.request; }
    setRequest(request) { this.request = request; }

    getStatus() { return this.status; }
    setStatus(status) { this.status = status; }

    getCreationDate() { return this.creationDate; }
    setCreationDate(creationDate) { this.creationDate = new Date(creationDate); }

    getItems() { return this.items; }
    setItems(items) { this.items = items; }

    // toJson method
    toJson() {
        return {
            id: this.id,
            user: this.user.toJson(),
            details: this.details,
            request: this.request.toJson(),
            status: this.status,
            items: this.items.map(item => item.toJson()),
            creationDate: this.creationDate.toISOString()
        };
    }

    // fromJson method
    static fromJson(json) {
        return new Benefit(
            json.id,
            User.fromJson(json.user),
            json.details,
            Request.fromJson(json.request),
            json.status,
            json.items.map(item => Item.fromJson(item)),
            new Date(json.creationDate)
        );
    }
}

export default Benefit;
