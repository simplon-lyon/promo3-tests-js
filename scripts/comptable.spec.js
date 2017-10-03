describe('class Comptable', ()=> {
    let comptable;
    let spyCalcul;

    beforeEach(() => {
        comptable = new Comptable();
        /*
        Un mock est une classe factice qui aura les
        mêmes signature qu'une dépendance de la classe
        à tester, mais dont les retours sont contrôlés
        par le test.
        */
        // let mockCalculette = {
        //     calcul:function() {
        //         return 4;
        //     }
        // };
        // comptable.calculette = mockCalculette;
        spyCalcul = jasmine.createSpy('calcul() spy');
        comptable.calculette.calcul = spyCalcul;
    });

    it('should return "en faillite"', () => {
        spyCalcul.and.returnValue(4);

        expect(comptable.getBenefices(100, 5, 100))
        .toBe('en faillite');

        expect(comptable.calculette.calcul).toHaveBeenCalledWith(100,100,'*');
    });

    it('should return 4', () => {
        spyCalcul.and.returnValue(4);
        expect(comptable.getBenefices(100, 3, 100))
        .toBe(4);
        expect(spyCalcul).toHaveBeenCalledTimes(2);
    });

});