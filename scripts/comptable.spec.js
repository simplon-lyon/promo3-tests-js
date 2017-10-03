describe('class Comptable', ()=> {
    let comptable;

    beforeEach(() => {
        comptable = new Comptable();
        /*
        Un mock est une classe factice qui aura les
        mêmes signature qu'une dépendance de la classe
        à tester, mais dont les retours sont contrôlés
        par le test.
        */
        let mockCalculette = {
            calcul:function() {
                return 4;
            }
        };
        comptable.calculette = mockCalculette;
    });

    it('should return "en faillite"', () => {
        expect(comptable.getBenefices(100, 5, 100))
        .toBe('en faillite');
    });

    it('should return 4', () => {
        expect(comptable.getBenefices(100, 3, 100))
        .toBe(4);
    });

});