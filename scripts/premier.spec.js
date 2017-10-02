
it('should be true', () => {
    expect(true).toBe(true);
});
//On utilise describe pour grouper une batterie de test
//ensembles (par exemple tous les tests d'une fonction)
describe('function additionner', () => {
    /*
    l'idéal est d'avoir un test pour chaque scénario
    prévus par la fonction.
    Mais la réalité étant ce qu'elle est, on pourrait
    se contenter des tests "importants" (à nous de voir
    ce qu'on considère comme important)
    */
    it('should add 2 to 2', () => {
        let resultat = additionner(2,2);
        expect(resultat).toBe(4);
    });

    //Faire un test ici avec des nombres négatifs
    it('should add with negative numbers', () => {
        expect(additionner(-2, -2)).toBe(-4);
    });

    //Faire un test ici avec des chaînes de caractère
    // it('should concatenate string params', () => {
    //     expect(additionner('bloup', 2)).toBe('bloup2');
    // });
    it('should throw error with string params',() => {
        /*
        On peut vérifier qu'une fonction déclenche bien
        une erreur dans un scénario donné.
        Pour cela il faut donner au expect la définition
        de la fonction (si avec argument, alors on devra
        utiliser un bind) puis utiliser un .toThrow()
        avec en argument l'instance de l'erreur attendue
        ou alors un toThrowError() si le type d'erreur
        déclenchée ne nous intéresse pas
        */
        expect(additionner.bind(null,'bloup', 2))
        .toThrowError();
    });
});