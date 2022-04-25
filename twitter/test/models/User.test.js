// importamos nuestra clase user
const User = require('../../app/models/User')

describe('Unit Tests for User Class', () => {

    test('1. Create an User Object', () => {
        // creamos un objeto de nuestra clase User
        const newUser = new User(1,"ALoCa","Ana","Bio", "dateCreated", "lastUpdate")

        // generamos las pruebas
        expect(newUser.id).toBe(1)
        expect(newUser.username).toBe("ALoCa")
        expect(newUser.name).toBe("Ana")
        expect(newUser.bio).toBe("Bio")
        expect(newUser.dateCreated).not.toBeUndefined()
        expect(newUser.lastUpdated).not.toBeUndefined()
    });

    test('Getters', () => {
        // creamos un objeto de nuestra clase User
        const newUser = new User(2,"ALoCa","Ana","Bio")

        // pruebas de nuestros metodos get
        expect(newUser.getUsername).toBe("ALoCa")
        expect(newUser.getBio).toBe("Bio")
        expect(newUser.getDateCreated).not.toBeUndefined()
        expect(newUser.getLastUpdated).not.toBeUndefined()
    })

    test('3. Create methods setters', () => {
        // creamos un objeto de nuestra clase User
        const newUser = new User(3,"MiguelitoDeLaGusanera","Miguel","Bio")

        // hacemos uso de los setters
        newUser.setUsername = "DeLaGusanera"
        newUser.setBio = "New Bio"

        // pruebas de nuestros metodos set
        expect(newUser.username).toBe("DeLaGusanera")
        expect(newUser.bio).toBe("New Bio 5")
    })

})