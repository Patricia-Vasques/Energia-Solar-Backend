const swaggerJsdoc = require('swagger-jsdoc');
const {
    UserRouter
} = require('./src/routes/user.routes');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0', // Especifique a versão do OpenAPI
        info: {
            title: 'Sua API',
            version: '1.0.0',
            description: 'Documentação da API para o seu projeto',
        },
    },
    apis: ['./routes/*.js'], // Caminho para os seus arquivos de rotas da API
};

const swaggerSpec = swaggerJsdoc(options);

// Adicione as anotações Swagger para cada rota dentro do objeto 'paths'
swaggerSpec.paths = {
    '/v1/login': {
        post: {
            summary: 'Efetua login de um usuário.',
            tags: ['Usuários'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                username: {
                                    type: 'string',
                                },
                                password: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: 'Login bem-sucedido.',
                },
                401: {
                    description: 'Credenciais inválidas.',
                },
            },
        },
    },
    '/v1/usuario': {
        post: {
            summary: 'Cria um novo usuário.',
            tags: ['Usuários'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string',
                                },
                                email: {
                                    type: 'string',
                                },
                                password: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: 'Usuário criado com sucesso.',
                },
                400: {
                    description: 'Dados inválidos.',
                },
            },
        },
    },
    '/v1/usuario': {
        get: {
            summary: 'Lista todos os usuários.',
            tags: ['Usuários'],
            security: [
                {
                    BearerAuth: [],
                },
            ],
            responses: {
                200: {
                    description: 'Lista de usuários.',
                },
                401: {
                    description: 'Não autorizado.',
                },
            },
        },
    },
    '/v1/usuario/{id}': {
        put: {
            summary: 'Atualiza um usuário existente.',
            tags: ['Usuários'],
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    required: true,
                    description: 'ID do usuário a ser atualizado.',
                    schema: {
                        type: 'string',
                    },
                },
            ],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string',
                                },
                                email: {
                                    type: 'string',
                                },
                                password: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
            security: [
                {
                    BearerAuth: [],
                },
            ],
            responses: {
                200: {
                    description: 'Usuário atualizado com sucesso.',
                },
                401: {
                    description: 'Não autorizado.',
                },
                404: {
                    description: 'Usuário não encontrado.',
                },
            },
        },
    },
    '/v1/usuario/{id}': {
        delete: {
            summary: 'Exclui um usuário existente.',
            tags: ['Usuários'],
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    required: true,
                    description: 'ID do usuário a ser excluído.',
                    schema: {
                        type: 'string',
                    },
                },
            ],
            security: [
                {
                    BearerAuth: [],
                },
            ],
            responses: {
                204: {
                    description: 'Usuário excluído com sucesso.',
                },
                401: {
                    description: 'Não autorizado.',
                },
                404: {
                    description: 'Usuário não encontrado.',
                },
            },
        },
    },
};

module.exports = { swaggerSpec };