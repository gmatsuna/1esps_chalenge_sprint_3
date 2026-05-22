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
    

@progress_bp.route(
    '/favoritar-missao',
    methods=['POST']
)
def favoritar_missao():

    try:

        dados = request.get_json()

        missao_id = dados.get(
            'missao_id'
        )

        usuarios = carregar_json(
            ARQUIVO_USUARIO
        )

        usuario = usuarios[0]

        if missao_id in usuario[
            'missoes_favoritas'
        ]:

            return jsonify(
                {
                    'erro':
                        'Missão já favoritada'
                }
            ), 400

        usuario[
            'missoes_favoritas'
        ].append(missao_id)

        salvar_json(
            ARQUIVO_USUARIO,
            usuarios
        )

        return jsonify(
            {
                'mensagem':
                    'Missão favoritada com sucesso'
            }
        )

    except Exception as erro:

        return jsonify(
            {
                'erro': str(erro)
            }
        ), 500
    

@progress_bp.route(
    '/favoritos',
    methods=['GET']
)
def listar_favoritos():

    try:

        usuarios = carregar_json(
            ARQUIVO_USUARIO
        )

        missoes = carregar_json(
            ARQUIVO_MISSOES
        )

        usuario = usuarios[0]

        favoritos_ids = usuario[
            'missoes_favoritas'
        ]

        favoritos = [

            missao

            for missao in missoes

            if missao['id'] in favoritos_ids
        ]

        return jsonify(
            favoritos
        )

    except Exception as erro:

        return jsonify(
            {
                'erro': str(erro)
            }
        ), 500
    

@progress_bp.route(
    '/desfavoritar-missao',
    methods=['DELETE']
)
def desfavoritar_missao():

    try:

        dados = request.get_json()

        missao_id = dados.get(
            'missao_id'
        )

        usuarios = carregar_json(
            ARQUIVO_USUARIO
        )

        usuario = usuarios[0]

        if missao_id not in usuario[
            'missoes_favoritas'
        ]:

            return jsonify(
                {
                    'erro':
                        'Missão não encontrada nos favoritos'
                }
            ), 404

        usuario[
            'missoes_favoritas'
        ].remove(missao_id)

        salvar_json(
            ARQUIVO_USUARIO,
            usuarios
        )

        return jsonify(
            {
                'mensagem':
                    'Missão removida dos favoritos'
            }
        )

    except Exception as erro:

        return jsonify(
            {
                'erro': str(erro)
            }
        ), 500
    

@progress_bp.route(
    '/atualizar-favorito',
    methods=['PUT']
)
def atualizar_favorito():

    try:

        dados = request.get_json()

        missao_antiga = dados.get(
            'missao_antiga'
        )

        missao_nova = dados.get(
            'missao_nova'
        )

        usuarios = carregar_json(
            ARQUIVO_USUARIO
        )

        usuario = usuarios[0]

        favoritos = usuario[
            'missoes_favoritas'
        ]

        if missao_antiga not in favoritos:

            return jsonify(
                {
                    'erro':
                        'Missão antiga não encontrada'
                }
            ), 404

        favoritos.remove(
            missao_antiga
        )

        favoritos.append(
            missao_nova
        )

        salvar_json(
            ARQUIVO_USUARIO,
            usuarios
        )

        return jsonify(
            {
                'mensagem':
                    'Favorito atualizado com sucesso'
            }
        )

    except Exception as erro:

        return jsonify(
            {
                'erro': str(erro)
            }
        ), 500