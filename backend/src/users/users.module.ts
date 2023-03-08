import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserEntity } from './entities/user.entiity'
import { UserResolver } from './users.resolver'
import { UserService } from './users.service'


@Module({
	imports: [ TypeOrmModule.forFeature([ UserEntity ]) ],
	providers: [ UserService, UserResolver ],
})
export class UsersModule {
}