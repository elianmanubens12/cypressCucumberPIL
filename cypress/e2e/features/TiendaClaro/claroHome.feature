Feature: Tests de la página de Tienca Claro

    Scenario: Verificar funcionalidad del buscador
        Given que un usuario está en la página de "Claro"
        When posiciona el mouse sobre "Accesorios"


    Scenario: Verificar el menu del header
        Given que un usuario está en la página de "Claro"
        Then se visualizan en el header los botones "INICIO, CELULARES, ACCESORIOS, AYUDA"
