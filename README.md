# YUVOD - PRUEBA TÉCNICA

## INSTRUCCIONES PARA ARRANCAR EL PROYECTO

Se debe tener instalado `Node.js`, con versión mínima `18.12.1`. La versión de npm debe ser mayor o igual a `8.19.2`.

En la raíz del proyecto, abrir un terminal y ejecutar ```npm install``` para instalar las dependencias del proyecto.

A continuación, ejecutar ```npm run serve``` para arrancar un servidor de desarrollo. Abrir  `http://localhost:9000` en el navegador. 

Si se quieren ejecutar los test e2e, abrir un nuevo terminal y ejecutar ```npm run cypress:open```  o ```npm run cypress:run```, con la aplicación corriendo.

## EXPLICACIÓN DE DECISIONES TOMADAS

### Dependencias instaladas

Para crear la aplicación de React desde cero, se han instalado `webpack` como bundler y `babel` como transpilador de JavaScript.

También se ha instalado `eslint` para aplicar reglas de estilo al código, y se ha añadido un git hook con `husky` para no permitir hacer commits que no cumplan las reglas.

Se utiliza `webpack-dev-server` como servidor local de desarrollo con Hot Module Replacement.

Para aplicar estilos, he decidido utilizar `styled-components`. 
Al usar esta librería no considero necesario utilizar ningún procesador de CSS, 
y facilita crear components verdaderamente reutilizables. 

Para la comunicación con el servidor he creado un hook `useFetch` que hace uso de la API Fetch de JavaScript,
pero en una aplicación más compleja probablemente utilizaría una combinación de `react-query` + `axios`, 
o si hubiera la oportunidad `Apollo Client` para `GraphQL`.

### Carpetas

He dividido la carpeta components en 3 subcapetas: atoms, molecules y organisms. 
En una aplicación real probablemente hubiera nombrado estas carpetas de manera diferente, 
pero lo he hecho así para ilustrar el uso de la metodología Atomic Design, que comentamos en la entrevista.





