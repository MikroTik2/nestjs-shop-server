import { Controller, Body, UseGuards, Get, Post, Query, Param } from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';
import { AuthenicateGuard } from 'src/auth/authenticated.guard';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { FindOneResponse, GetByNameRequest, GetNewResponse, PaginateAndFilterResponse, SearchResponse, GetBestsellersResponse, SearchRequest } from './types';

@Controller('boiler-parts')
export class BoilerPartsController {
        constructor(private readonly boilerPartsService: BoilerPartsService) {};

        @ApiOkResponse({ type: PaginateAndFilterResponse })
        @UseGuards(AuthenicateGuard)
        @Get()
        paginationAndFilter(@Query() query) {
                return this.boilerPartsService.paginationAndFilter(query);
        };

        @ApiOkResponse({ type: FindOneResponse })
        @UseGuards(AuthenicateGuard)
        @Get('find/:id')
        getOne(@Param('id') id: string) {
                return this.boilerPartsService.findOne(+id);
        };

        @ApiOkResponse({ type: GetBestsellersResponse })
        @UseGuards(AuthenicateGuard)
        @Get('bestsellers')
        getBestsellers() {
                return this.boilerPartsService.bestsellers();
        };

        @ApiOkResponse({ type: GetNewResponse })
        @UseGuards(AuthenicateGuard)
        @Get('new')
        new() {
                return this.boilerPartsService.new();
        };

        @ApiOkResponse({ type: SearchResponse })
        @ApiBody({ type: SearchRequest })
        @UseGuards(AuthenicateGuard)
        @Post('search')
        search(@Body() { search }: { search: string }) {
                return this.boilerPartsService.searchByString(search);
        };

        @ApiOkResponse({ type: GetNewResponse })
        @ApiBody({ type: GetByNameRequest })
        @UseGuards(AuthenicateGuard)
        @Post('name')
        getByName(@Body() { name }: { name: string }) {
                return this.boilerPartsService.findOneByName(name);
        };
};