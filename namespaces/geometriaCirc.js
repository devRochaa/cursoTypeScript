"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function circunfeirencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circunfeirencia = circunfeirencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
