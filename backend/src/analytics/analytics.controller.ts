import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query } from "@nestjs/common";
import { Analytics, AnalyticsFilter, AnalyticsInterop } from "../domain/analytics.domain";
import { InteropService } from "./base/interop/interop.service";

@Controller('/analytics')
export class AnalyticsController {
    constructor(@Inject('AnalyticsInterop') private analyticsInterop: AnalyticsInterop) {
    }
    
    @Get('summary')
    getSummary(@Query() query: any) {
        const filter = this.buildFilterFromQuery(query);
        return this.analyticsInterop.getSummary('token', filter);
    }
    
    @Get()
    getAll(@Query() query: any) {
        const filter = this.buildFilterFromQuery(query);
        return this.analyticsInterop.getAll('token', filter);
    }
    
    @Post()
    post(@Body() analytics: Analytics) {
        return this.analyticsInterop.post('token', analytics);
    }
    
    @Get(':id')
    getById(@Param('id') id: number) {
        return this.analyticsInterop.getById('token', id);
    }
    
    @Put()
    put(@Body() analytics: Analytics) {
        return this.analyticsInterop.put('token', analytics);
    }
    
    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.analyticsInterop.delete('token', id);
    }
    
    private buildFilterFromQuery(query: any): AnalyticsFilter | undefined {
        const filter: AnalyticsFilter = {};
        
        if (query.gameId) {
            filter.gameId = query.gameId;
        }
        if (query.playerId) {
            filter.playerId = query.playerId;
        }
        if (query.minScore) {
            filter.minScore = Number(query.minScore);
        }
        if (query.maxScore) {
            filter.maxScore = Number(query.maxScore);
        }
        if (query.startDate) {
            filter.startDate = new Date(query.startDate);
        }
        if (query.endDate) {
            filter.endDate = new Date(query.endDate);
        }
        
        // Return undefined if no filters applied to avoid unnecessary filtering
        if (Object.keys(filter).length === 0) {
            return undefined;
        }
        
        return filter;
    }
}
