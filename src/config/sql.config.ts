import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize';

export const sqlConfig = registerAs('database', () => ({
        dialect: <Dialect>'mysql' || 'mysql',
        logging: 'true' === 'true' ? true : false,
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        autoLoadEntities: true,
        synchronize: true,
}));