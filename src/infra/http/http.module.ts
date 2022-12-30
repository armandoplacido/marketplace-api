import { Module } from '@nestjs/common'

import { CreateUser } from '@app/use-cases/users'
import { AppController } from '@controllers/app.controller'
import { UsersController } from '@controllers/users.controller'
import { DatabaseModule } from '@infra/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UsersController],
  providers: [CreateUser]
})
export class HttpModule {}
