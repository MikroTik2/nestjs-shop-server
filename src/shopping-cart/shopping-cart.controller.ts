import { Controller, UseGuards, Body, Get, Post, Delete, Patch, Param } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { addToCartDto } from './dto/add_to_cart_dto';
import { ApiOkResponse, ApiBody } from '@nestjs/swagger';
import { AuthenicateGuard } from 'src/auth/authenticated.guard';
import {
        AddToCardResponse,
        GetAllResponse,
        TotalPriceRequest,
        TotalPriceResponse,
        UpdateCountRequest,
        UpdateCountResponse,
} from './type';

@Controller('shopping-cart')
export class ShoppingCartController {
        constructor(private readonly shoppingCartService: ShoppingCartService) {};

        @ApiOkResponse({ type: [GetAllResponse] })
        @Get(':id')
        @UseGuards(AuthenicateGuard)
        getAll(@Param('id') userId: number) {
                return this.shoppingCartService.findAll(userId);
        };

        @ApiOkResponse({ type: AddToCardResponse })
        @Post('/add')
        @UseGuards(AuthenicateGuard)
        addToCart(@Body() addToCartDto: addToCartDto) {
                return this.shoppingCartService.add(addToCartDto);
        };

        @ApiOkResponse({ type: UpdateCountResponse })
        @ApiBody({ type: UpdateCountRequest })
        @Post('/count/:id')
        @UseGuards(AuthenicateGuard)
        updateCount(@Body() { count }: { count: number }, @Param('id') partId: string) {
                return this.shoppingCartService.updateCount(count, partId);
        };

        @ApiOkResponse({ type: TotalPriceResponse })
        @ApiBody({ type: TotalPriceRequest })
        @Patch('/total_price/:id')
        @UseGuards(AuthenicateGuard)
        updateTotalPrice(@Body() { total_price }: { total_price: number }, @Param('id') partId: string) {
                return this.shoppingCartService.updateTotalPrice(total_price, partId);
        };

        @Delete('/delete/:id')
        @UseGuards(AuthenicateGuard)
        removeOne(@Param('id') partId: number) {
                return this.shoppingCartService.remove(partId);
        };

        @Delete('/delete/all/:id')
        @UseGuards(AuthenicateGuard)
        removeAll(@Param('id') userId: number) {
                return this.shoppingCartService.removeAll(userId);
        };
};