// Importamos nuestra clase UserService
const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Tests for UserService", () => {
        // creamos un objeto de nuestra clase sin instanciarlo
        const newUser = UserService.create(1,"DeLaGusanera","Miguel");

        // realizamos nuestras validaciones
        expect(newUser.id).toBe(1);
        expect(newUser.username).toBe("DeLaGusanera");
        expect(newUser.name).toBe("Miguel");
        expect(newUser.bio).not.toBeUndefined();
    })

    test("2. Test getInfo for UserService", () => {
        //creamos nuestros objetos
        const newUser = UserService.create(2,"LSanJuan","Leo")
        const InfoList = UserService.getInfo(newUser)

        expect(InfoList[0]).toBe(2)
        expect(InfoList[1]).toBe("LSanJuan")
        expect(InfoList[2]).toBe("Leo")
        expect(InfoList[3]).toBe("Sin Bio Aun")
    })

    test("3. Update username", () => {
        // creamos nuestro objeto
        const newUser = UserService.create(3,"NobleVictor","Victor")
        // llamamos a nuestra funcion para actualizar el username
        UserService.updateUsername(newUser, "Victor")

        // generamos nuestras validaciones
        expect(newUser.username).toBe("NobleVictor")
    })

    test("4. Given a list of users give me the list of usernames", () => {
        // creamos nuestros objetos
        const user1 = UserService.create(1,"DeLaGusanera","Miguel")
        const user2 = UserService.create(2,"LSanJuan","Leo")
        const user3 = UserService.create(3,"NobleVictor","Victor")
        // creamos nuestro objeto llamando a los usernames
        const usernames = UserService.getAllUsernames([user1,user2,user3])

        // realizamos nuestras validaciones
        expect(usernames).toContain("DeLaGusanera")
        expect(usernames).toContain("LSanJuan")
        expect(usernames).toContain("NobleVictor")
    })
})