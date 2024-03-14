import { Controller, UseGuards, Body, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { MakePaymentDto } from './dto/make_payment.dto';
import { AuthenicateGuard } from 'src/auth/authenticated.guard';

@Controller('payment')

export class PaymentController {
        constructor(private paymentService: PaymentService) {};

        @UseGuards(AuthenicateGuard)
        @Post()
        makePayment(@Body() makePaymentDto: MakePaymentDto) {
                return this.paymentService.makePayment(makePaymentDto)
        };
};
