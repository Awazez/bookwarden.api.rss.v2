import { Injectable } from '@nestjs/common';
import * as RSSParser from 'rss-parser';


@Injectable()
export class RssService {
  private parser = new RSSParser();
  
  async getFeed(url: string): Promise<any> {
    try {
      const feed = await this.parser.parseURL(url);
      return feed;
    } catch (error) {
      throw new Error('Erreur lors de la récupération du flux RSS');
    }
  }
}