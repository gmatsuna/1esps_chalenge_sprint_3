class CalcularPontos:
    def __init__(self):
        self.pontos = 0

    def somaDosPontos(self, passos, academia, alimentacao, hidratacao, sono):
        self.pontos += passos // 100
        if academia:
            self.pontos += 50
        if alimentacao:
            self.pontos += 30
        if hidratacao:
            self.pontos += 20
        if sono:
            self.pontos += 40

        return self.pontos