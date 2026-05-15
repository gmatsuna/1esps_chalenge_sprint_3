from flask import Blueprint, jsonify, request
from utils.file_manager import carregar_json

import json
import os

detail_bp = Blueprint('detail', __name__)

ARQUIVO_MISSOES = os.path.join(os.path.dirname(__file__), '../data/missions.json')


@detail_bp.route('/missao/<int:id>', methods=['GET'])
def buscar_missao(id):

    try:

        missoes = carregar_json(
            ARQUIVO_MISSOES
        )

        missao_encontrada = next(

            (
                missao
                for missao in missoes
                if missao['id'] == id
            ),

            None
        )

        if not missao_encontrada:

            return jsonify(
                {
                    'erro': 'Missão não encontrada'
                }
            ), 404

        return jsonify(
            missao_encontrada
        )

    except Exception as erro:

        return jsonify(
            {
                'erro': str(erro)
            }
        ), 500