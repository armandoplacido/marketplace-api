import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { AuthenticateProvider } from '@app/use-cases/auth'
import { CreateUser, DeleteUser, GetUserById, GetUsers } from '@app/use-cases/users'
import { environment } from '@config/environments'
import { AppController } from '@controllers/app.controller'
import { AuthController } from '@controllers/auth.controller'
import { UsersController } from '@controllers/users.controller'
import { DatabaseModule } from '@infra/database/database.module'

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: environment.jwt_secret,
      signOptions: { expiresIn: environment.token_expiration }
    })
  ],
  controllers: [AppController, UsersController, AuthController],
  providers: [CreateUser, DeleteUser, GetUsers, GetUserById, AuthenticateProvider]
})
export class HttpModule {}
