Feature: Realizar una compra en amazon

    Yo quiero comprar un funko pop de Yu Gi Oh en amazon

    Scenario: Comprar un funko pop

        Given Navego a la pagina 'https://www.amazon.com/'
        When Limpio y escribo en el buscador 'Funko pop! animation: yu gi oh'
        Then Doy clic en el boton de buscar
        And Verifico que existan los siguientes articulo:
        And Doy clic al articulo 'Yu-Gi-Oh - Blue Eyes Toon Dragon'