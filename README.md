# cypressCucumberPIL
## Este es el readme con la informacion de ese proyecto de cucumber.

## Este proyecto cuenta con archivos y carpetas creadas en clase.
## Los test originales que yo cree se encuentran en la carpeta de cypress/e2e/features/Enebe

[Instalación de dependencias]()
- "@badeball/cypress-cucumber-preprocessor":  npm install @badeball/cypress-cucumber-preprocessor
- "@bahmutov/cypress-esbuild-preprocessor": npm i @bahmutov/cypress-esbuild-preprocessor
- "cypress": npm i cypress
- "cypress-image-diff-js": npm i cypress-image-diff-js
- "cypress-real-events": npm i cypress-real-events
- "multiple-cucumber-html-reporter": npm i multiple-cucumber-html-reporter

[Ejecucion de tests]()
- Abrir el terminal.
- Escribir el comando "npx cypress open"
- Seleccionar 'E2E STARTING'
- Elegir el navegador con el que queremos abrir los test.
- Una vez que se abra el navegador con los test en "SPECS" elegimos el test que queremos correr.

[Plugins recomendados de VSC]()
- Material Icon Theme 
- Better coments
- Cucumber (Gherkin) Full Support
- Cucumber Formatter
- Cypress Helper (latest)
- Cypress Snippets
- cypress-cucumber-steps
- GitLens - Git supercharged
- Path Intellisense
- Prettier - Code formatter

[Estructura del proyecto]()
- CYPRESSCUCUMBERPIL
  - .VSCODE
  - CYPRESS
    - DOWNLOADS
    - E2E
    - FIXTURES
    - PAGES
    - SCREENSHOTS
    - SUPPORT
  - CYPRESS-VISUAL-REPORT
  - CYPRESS-VISUAL-SCREENSHOTS
  - NODE_MODULES
  - REPORTS
  - .GITIGNORE
  - CUCUMBER-HTML-REPORT.JS
  - CYPRESS.CONFIG.JS
  - PACKAGE-LOCK-JSON
  - PACKAGE.JSON
  - README.MD

[Reportes por comando]()
  - Cuando corremos los siguientes comandos de test, generamos reporte automaticamente.
  (para crear y que funcione el reporte, hay que comentar las lineas del comando "cypress-image-diff-js")
  - Algunos comandos son:
    - "cypress:run:yvytu": "npx cypress run --e2e --browser chrome -e \"tags=@yvytu and not @ignore\" -s cypress/e2e/features/Yvytu/*.feature",
    - "cypress:run:todos": "npx cypress run --e2e --browser chrome -e \"tags=not @ignore\" -s cypress/e2e/features/**/*.feature",
    - "generate:report": "node cucumber-html-report.js"

[Links de documentación]()
https://www.npmjs.com/ -> aca buscamos las dependencias y su configuacion
https://docs.cypress.io/guides/overview/why-cypress -> documentacion oficial de Cypress
https://sites.google.com/darwoft.com/cursocypress/inicio -> nuestro curso de Cypress

[Canales de youtube]()
https://www.youtube.com/@TestingParaTodos
https://www.youtube.com/@JoanMediaES 

[Comandos de git]()
- Git status: para saber que archivos tenemos cargados en git
- Git add (nombre del archivo) para poder subirlos a git
- Git commit -m “nombre del commit” 
- Git push: para confirmar y que se suban al repositorio.
- Git branch: para que cada usuario del repo utilice su rama y maneje su código como quiera.
- Git branch New-Elian -> creamos una branch (se escriben sin espacios)
- Git checkout New-Elian —> asi cambiamos de branch.
- Git branch de nuevo para confirmar en que branch estamos trabajando.
- Git push origin New-Elian —> para subir la branch a git.
- Git checkout  —> se utiliza para volver a un commit viejo
- Git diff  -> te muestra tipo un historial de todo o de archivo en particular
- Git stash: para ignorar archivos al commitear
- Git stash apply: es mostrar los archivos ignorados guardados en un tipo de memoria temporal
- XHR -> es una API de JavaScript
- HideXHRInCommandLog: True; -> Comando para no visualizar las llamadas del servicio.


