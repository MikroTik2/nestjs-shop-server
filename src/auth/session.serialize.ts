import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerialize extends PassportSerializer {
        serializeUser(user: any, done: Function) {
                done(null, user);
        };

        deserializeUser(payload: any, done: (err: Error, user: any) => void) {
                done(null, payload);
        };
};