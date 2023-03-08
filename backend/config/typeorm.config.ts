import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";

export default class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
        return {
            type: "postgres",
            host: configService.get("POSTGRES_HOST"),
            port: configService.get("POSTGRES_PORT"),
            username: configService.get("POSTGRES_USER"),
            password: configService.get("POSTGRES_PASSWORD"),
            database: configService.get("POSTGRES_DB"),
            entities: [ __dirname + 'dist/**/*.entity{.ts,.js}' ],
            synchronize: true,
            autoLoadEntities: true,
            logging: true,
            
   
        }
    }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService)
}