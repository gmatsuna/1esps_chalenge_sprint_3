from flask import Blueprint, jsonify
from utils.file_manager import carregar_json

trail_bp = Blueprint('trail', __name__)
ARQUIVO_TRILHAS = "data/trails.json"

@trail_bp.route('/trilhas', methods=['GET'])

def listar_trilhas():
    try:
        trilhas = carregar_json(ARQUIVO_TRILHAS)
        return jsonify(trilhas)
    except Exception as erro:
        return jsonify({"erro": str(erro)}), 500