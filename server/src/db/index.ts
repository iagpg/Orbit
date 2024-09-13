import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema' // pegar todas as importações
import { env } from '../env'

export const client = postgres(env.DATABASE_URL)
    export const db = drizzle(client, { schema, logger: true }) // logger para visualizar as querys que fizermos no banco de dados
