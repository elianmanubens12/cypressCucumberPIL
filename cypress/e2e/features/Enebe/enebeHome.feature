@regresion @Enebe

Feature: Home Enebe

    @menu
    Scenario: Verificar elementos del menú superior
        Given que un usuario está en la página de "Enebe"
        Then se visualiza en el header los botones "INICIO, PALAS, EMPRESA, CATÁLOGO, JUGADORES, PUNTOS DE VENTA, NOTICIAS"


    Scenario: Verificar el boton de Jugadores
        Given  que un usuario está en la página de "Enebe"
        When presiona en el header el boton "JUGADORES"
        Then se verifica el jugador "Javier Rico Dasi"

    Scenario: Visual Testing con cypress-image-diff en pagina Enebe
        Given que un usuario está en la página de "Enebe"
        Then se compara "home-page-Enebe" con la imagen baseline


    Scenario: Scroll hasta boton LEER MÁS
        Given que un usuario está en la página de "Enebe"
        When el usuario hace scroll hasta el botón "LEER MÁS"
        And el usuario presiona en la Home el botón "LEER MÁS"



