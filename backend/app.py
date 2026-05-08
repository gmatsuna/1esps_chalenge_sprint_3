from flask import Flask, request, jsonify
from flask_cors import CORS
from registrar import RegistrarDia

import json
import os

app = Flask(__name__)
CORS(app)

ARQUIVO_BD = 'database.json'

def carregarDados():
    if not os.path.exists(ARQUIVO_BD):
        return []

    with open(ARQUIVO_BD, 'r') as arquivo:
        return json.load(arquivo)

def salvarDados(dados):
    with open(ARQUIVO_BD, 'w') as arquivo:
        json.dump(dados, arquivo, indent=4)

@app.route('/registrar', methods=['POST'])
def registrarAtividade():
    try:
        dados = request.json

        registro = RegistrarDia(
            dados['passos'],
            dados['academia'],
            dados['alimentacao'],
            dados['hidratacao'],
            dados['sono']
        )

        pontos = registro.somarPontos()

        novo_registro = {
            "passos": registro.passos,
            "academia": registro.academia,
            "alimentacao": registro.alimentacao,
            "hidratacao": registro.hidratacao,
            "sono": registro.sono,
            "pontos": pontos
        }

        historico = carregarDados()
        historico.append(novo_registro)
        salvarDados(historico)

        return jsonify({"message": "Atividade registrada com sucesso!", "registro": novo_registro}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/historico', methods=['GET'])
def listarHistorico():

    try:

        historico = carregarDados()

        return jsonify(historico)

    except Exception as erro:

        return jsonify({
            "erro": str(erro)
        }), 500

@app.route('/')
def home():
    return jsonify({'message': 'CareQuest API is working!!!'})

if __name__ == '__main__':
    app.run(debug=True)