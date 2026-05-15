from services.pontos import CalcularPontos

class RegistrarDia:
    def __init__(self, passos, academia, alimentacao, hidratacao, sono):

        self.passos = passos
        self.academia = academia
        self.alimentacao = alimentacao
        self.hidratacao = hidratacao
        self.sono = sono

    def somarPontos(self):
        calculadora = CalcularPontos()
        self.pontos = calculadora.somaDosPontos(
            self.passos,
            self.academia,
            self.alimentacao,
            self.hidratacao,
            self.sono
        )

        return self.pontos