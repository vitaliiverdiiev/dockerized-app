import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule,  } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import configuration from 'config/configuration';
import { typeOrmConfigAsync } from 'config/typeorm.config';

@Module({
  imports: [
	ConfigModule.forRoot({ 
		isGlobal: true, 
		// envFilePath: './../../.env',
		// load: [configuration]
	}),
	UsersModule,
    GraphQLModule.forRoot({
		autoSchemaFile: 'schema.gql',
		sortSchema: true,
		playground: true,
		driver: ApolloDriver,
		cache: "bounded",
		persistedQueries: false,
		introspection: true
	}),
	TypeOrmModule.forRootAsync(typeOrmConfigAsync),
	// TypeOrmModule.forRoot({
	// 	type: 'postgres',
	// 	username: "myuser",
	// 	password: "mypassword",
	// 	database: "mydb",
	// 	port: 5432,
	// 	entities: [ __dirname + 'dist/**/*.entity{.ts,.js}' ],
	// 	synchronize: true,
	// 	autoLoadEntities: true,
	// 	logging: true,
	// })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
