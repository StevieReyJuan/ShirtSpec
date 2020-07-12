const knex = require('knex')
const app = require('../src/app')
const { makeStoresArray } = require('./stores.fixtures')
const { makeCustomersArray } = require('./customers.fixtures')

describe('ShirtSpec Endpoints', function() {
    let db
    
    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DATABASE_URL
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('clean the table', () => db.raw('TRUNCATE shirtspec_stores, shirtspec_customers RESTART IDENTITY CASCADE'))

    afterEach('cleanup', () => db.raw('TRUNCATE shirtspec_stores, shirtspec_customers RESTART IDENTITY CASCADE'))

    describe(`GET /api/stores`, () => {
        context('Given there are stores in the database', () => {
            const testStores = makeStoresArray();
            
            beforeEach('insert stores', () => {
                return db
                    .into('shirtspec_stores')
                    .insert(testStores)
            })

            it('GET /api/stores responds with 200 and all of the stores', () => {
                return supertest(app)
                    .get('/api/stores')
                    .expect(200, testStores)
            })
        })
    })
})