var param_replacer = require('tecsup-2023-chacontasaico');

var objetivo = "%just% %testing% -- %testing% %just%";
var idioma = "es";
var reemplazo = {
    "en": {
        "just": "Just",
        "testing": "Testing"
    },
    "es": {
        "just": "Solo",
        "testing": "Probando"
    }
};

var resultado = param_replacer.replace(objetivo, reemplazo[idioma]);

console.log(resultado)