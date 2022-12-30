import { Logger, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { json, urlencoded } from 'express'

import { environment } from '@config/environments'
import { CustomExceptionFilter } from '@config/filters'
import { CustomValidationPipe } from '@config/pipes'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  //Global Filters
  app.useGlobalFilters(new CustomExceptionFilter())

  //Global Pipes
  app.useGlobalPipes(new CustomValidationPipe())

  //JSON Config
  app.use(json({ limit: '50mb' }))
  app.use(urlencoded({ extended: true, limit: '50mb' }))

  //Versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1']
  })

  //Listen
  await app.listen(environment.api_port, () => {
    Logger.log(`Listening at http://localhost:${environment.api_port}`)
  })
}
bootstrap()
