const spiderActor = require('./../app/spider');

describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {

        const androw = new spiderActor("Spiderman", 31, "Androw", 2, "Sony")

        expect(androw.name).toBe("Spiderman");
        expect(androw.edad).toBe(31);
        expect(androw.actor).toBe("Androw");
        expect(androw.numMovies).toBe(2);
        expect(androw.studio).toBe("Sony");

    });

    test('Case 2 metodo get', () => {

        const tom = new spiderActor("Spiderman", 25, "Tom", 5, "Marvel")

        expect(tom.getInfo()).toBe("Soy Tom de Marvel");

    });

  })