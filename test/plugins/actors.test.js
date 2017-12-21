import Test from 'ava'
import { Server } from 'hapi'
import Plugin from '../../src/plugins/actors'

process.env.NODE_ENV = 'testing'

Test.beforeEach(async t => {
  const server = new Server({})
  server.connection({})
  await server.register([Plugin])
  await server.initialize()

  t.context = server
})

Test(`actors plugin returns and empty array by default`, async t => {
  const server = t.context
  const { result } = await server.inject('/v1/actors')
  t.deepEqual(result, [])
})
