const MissionCommander = require('./../app/missionCommander');

describe("Unit Tests for Mission Commander Class", () => {

    test('Caso de prueba 1: Creacion de objeto', () => {
      
        const myMissionCommander = new MissionCommander("Woopa")

        expect(myMissionCommander.name).toBe("Woopa58");
        //expect(myMissionCommander.name).toBe("Woopa");
    });

  })
  