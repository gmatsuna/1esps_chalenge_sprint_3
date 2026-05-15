from flask import Blueprint, jsonify, request
from utils.file_manager import carregar_json

summary_bp = Blueprint('summary', __name__)

ARQUIVO_OBJETIVOS = 'data/goals.json'


@summary_bp.route('/objetivos', methods=['GET'])
def listar_objetivos():

    try:

        objetivos = carregar_json(ARQUIVO_OBJETIVOS)

        trilhas = request.args.get('trilhas')

        if trilhas:

            lista_trilhas = trilhas.split(',')

            objetivos_filtrados = [

                objetivo for objetivo in objetivos

                if objetivo['trilha'] in lista_trilhas

            ]

            return jsonify(objetivos_filtrados)

        return jsonify(objetivos)

    except Exception as e:

        return jsonify({'error': str(e)}), 500