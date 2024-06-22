class User {
    constructor(id, name, surname, email, idNumber, sector, location, gender, age, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.idNumber = idNumber;
        this.sector = sector;
        this.location = location;
        this.gender = gender;
        this.age = age;
        this.phone = phone;
    }

    // Getters and Setters

    // toJson method
    toJson() {
        return {
            id: this.id,
            name: this.name,
            surname: this.surname,
            email: this.email,
            idNumber: this.idNumber,
            sector: this.sector,
            location: this.location,
            gender: this.gender,
            age: this.age,
            phone: this.phone
        };
    }

    // fromJson method
    static fromJson(json) {
        return new User(
            json.id,
            json.name,
            json.surname,
            json.email,
            json.idNumber,
            json.sector,
            json.location,
            json.gender,
            json.age,
            json.phone
        );
    }
}

export default User;
