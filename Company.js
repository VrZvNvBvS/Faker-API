const { faker }= require('@faker-js/faker');

class Company {
    constructor() {

        this._id = faker.datatype.number()

        this.name = faker.company.name()

        this.address =
            {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

    }
}
const fakeCompany = new Company();
console.log(fakeCompany);

module.exports = Company