from flask import Blueprint, jsonify, request
from utils.file_manager import carregar_json

missions_bp = Blueprint('missions', __name__)

ARQUIVO_MISSOES = "data/missions.json"

@missions_bp.route('/missoes', methods=['GET'])
def listar_missoes():
    try:
        missoes = carregar_json(ARQUIVO_MISSOES)
        trilhas = request.args.get('trilhas')
        if trilhas:
            lista_trilhas = trilhas.split(',')
            missoes = [
                missao for missao in missoes
                if missao['trilha'] in lista_trilhas
            ]
        return jsonify(missoes)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@missions_bp.route('/missao/<int:id>', methods=['GET'])
def buscar_missao(id):
    try:
        missoes = carregar_json(ARQUIVO_MISSOES)

        missao = next((
                item for item in missoes
                if item['id'] == id
            ),

            None
        )

        if not missao:

            return jsonify(
                {'erro': 'Missão não encontrada'}
            ), 404

        return jsonify(missao)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
