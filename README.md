# Mi-app-PWA
Enterate de datos simples y sencillos para aprender a crear una PWA.

En este proyecto se exponen los ajustes fundamentales para generar una aplicación PWA a partir de un proyecto web.

Como datos sencillos y fundamentales para crear la PWA:
* El archivo service-worker.js debe estar obligatoriamente en la ubicación raíz.
* El registrador del service-worker.js puede estar en cualquier lugar, y al registrar el sevice-worker.js no usar direcciones, simplemente le agregas a la función el nombre 
del archivo JS y ésta se encargará de buscarlo en la carpeta raíz.
* Dentro del archivo manifest.json, como valor del atributo "start_url" se le asigna "./".
* Al momento de cachear los archivos, se inserta la ubicación de estos desde una perspectiva de ubicación en la carpeta raíz. Todos los enlaces deben de empezar por "./".
* No se cachea el service-worker.js ni el manifest.json.
