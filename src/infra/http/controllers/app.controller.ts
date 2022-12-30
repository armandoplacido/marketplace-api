import { Controller, Get } from '@nestjs/common'

import { HttpResponse } from '@helpers'

@Controller('')
export class AppController {
  @Get('health')
  health(): HttpResponse {
    return HttpResponse.ok('Online')
  }
}
