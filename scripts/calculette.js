
class Calculette {

    calcul(a, b, operateur) {
        //eval est à utiliser avec précaution, donc autant
        //pas l'utiliser du tout (ne vous en faites pas, je
        //suis un professionnel, don't do it at home)
        return eval(a+operateur+b);
    }

}