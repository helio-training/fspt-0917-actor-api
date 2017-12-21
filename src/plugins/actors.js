const plugin = (server, options, next) => {

  server.route({
    method: 'GET',
    path: '/v1/actors',
    config: {
      tags: ['api'],
    },
    handler: async (request, reply) => {
      return reply([])
    },
  })

  return next()
}

plugin.attributes = {
  name: 'actors',
  version: '1.0.0',
}

export default plugin
