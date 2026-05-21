from flask import Blueprint, jsonify, request

from utils.file_manager import (
    carregar_json,
    salvar_json
)

progress_bp = Blueprint(
    'progress',
    __name__
)

ARQUIVO_USUARIO = 'data/user.json'
ARQUIVO_MISSOES = 'data/missions.json'


@progress_bp.route(
    '/concluir-missao',
    methods=['POST']
)
def concluir_missao():

    try:

        dados = request.get_json()

        missao_id = dados.get(
            'missao_id'
        )

        usuarios = carregar_json(
            ARQUIVO_USUARIO
        )

        missoes = carregar_json(
            ARQUIVO_MISSOES
        )

        usuario = usuarios[0]

        missao = next(
            (
                item for item in missoes
                if item['id'] == missao_id
            ),
            None
        )

        if not missao:

            return jsonify(
                {
                    'erro': 'Missão não encontrada'
                }
            ), 404

        usuario['xp'] += missao['xp']
        
        usuario['nivel'] = (
            usuario['xp'] // 100
        ) + 1

        usuario['pontos'] += missao[
            'pontos'
        ]
        usuario['streak'] += 1

        usuario[
            'missoes_concluidas'
        ].append(missao_id)

        salvar_json(
            ARQUIVO_USUARIO,
            usuarios
        )

        return jsonify(
            {
                'mensagem':
                    'Missão concluída!',

                'titulo':
                    missao['titulo'],

                'trilha':
                    missao['trilha'],
                    
                'xp_ganho':
                    missao['xp'],

                'pontos_ganhos':
                    missao['pontos'],

                'xp_total':
                    usuario['xp'],

                'pontos_total':
                    usuario['pontos'],

                'streak':
                    usuario['streak']
            }
        )

    except Exception as erro:

        return jsonify(
            {
                'erro': str(erro)
            }
        ), 500
    

@progress_bp.route(
    '/usuario',
    methods=['GET']
)
def buscar_usuario():

    try:

        usuarios = carregar_json(
            ARQUIVO_USUARIO
        )

        usuario = usuarios[0]

        return jsonify(
            {
                'nome': usuario['nome'],
                'xp': usuario['xp'],
                'pontos': usuario['pontos'],
                'nivel': usuario['nivel'],
                'streak': usuario['streak']
            }
        )

    except Exception as erro:

        return jsonify(
            {
                'erro': str(erro)
            }
        ), 500