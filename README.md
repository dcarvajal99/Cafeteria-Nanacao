
# Backend API - Cafeteria Nanacao
  Este repositorio contiene el código fuente de un backend API desarrollado en Node.js que cumple con los siguientes requisitos:

  Prueba de ruta GET /cafes: Verifica que la ruta /cafes devuelva un código de estado 200 y los datos recibidos sean un arreglo con al menos un objeto.
  
  Prueba de ruta DELETE /cafes: Confirma que se reciba un código de estado 404 al intentar eliminar un café con un ID inexistente.
  
  Prueba de ruta POST /cafes: Comprueba que la ruta /cafes agregue un nuevo café y devuelva un código de estado 201.
  
  Prueba de ruta PUT /cafes: Verifica que la ruta /cafes devuelva un código de estado 400 si se intenta actualizar un café enviando un ID en los parámetros que difiera del ID dentro del cuerpo de la solicitud.
## Requisitos
Node.js (v12.0 o superior)
npm (administrador de paquetes de Node.js)
## Configuración
Clona este repositorio en tu máquina local:
```` shell
git clone https://github.com/tu-usuario/backend-api.git](https://github.com/dcarvajal99/Cafeteria-Nanacao
````
Navega hasta el directorio del proyecto:
```` shell
cd backend-api
````

Instala las dependencias:
```` shell
npm install
````

Ejecución
Una vez que hayas completado la configuración, puedes ejecutar el backend API utilizando el siguiente comando:

````shell
npm start
````
El servidor se ejecutará en el puerto especificado en la variable de entorno PORT (por defecto, 3000).

# Pruebas
## Para ejecutar las pruebas, utiliza el siguiente comando:

````shell
npm test
````
Las pruebas se ejecutarán y se mostrará el resultado en la consola.

## Endpoints
El backend API proporciona los siguientes endpoints:

GET /cafes: Obtiene todos los cafés.

DELETE /cafes/:id: Elimina un café por su ID.

POST /cafes: Agrega un nuevo café.

PUT /cafes/:id: Actualiza un café por su ID.

