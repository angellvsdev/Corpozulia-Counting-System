import User from './UserModel';
import Request from './RequestModel';
import Item from './ItemModel';

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
        try {    
            const user = User.fromJson(json.user);    
            const request = Request.fromJson(json.request);    
            const items = json.items.map(item => {
                const parsedItem = Item.fromJson(item);
                                return parsedItem;
            });
    
            const creationDate = new Date(json.creationDate);    
            const benefit = new Benefit(
                json.id,
                user,
                json.details,
                request,
                json.status,
                items,
                creationDate
            );
        
            return benefit;
        } catch (error) {
            console.error('Error while parsing JSON to Benefit object:', error);
            throw error; // Re-throw the error to propagate it further if needed
        }
    }
    
}

export default Benefit;