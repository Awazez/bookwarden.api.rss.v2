import { Controller, Get, Query } from '@nestjs/common';
import { RssService } from './rss.service';

@Controller('rss')
export class RssController {
  constructor(private readonly rssService: RssService) {}

  @Get()
  getFeed(@Query('url') url: string) {
    return this.rssService.getFeed(url);
  }
}