/**
 * FastAPI
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
  HttpContext,
} from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

// @ts-ignore
import { Game } from '../model/game';
// @ts-ignore
import { HTTPValidationError } from '../model/hTTPValidationError';
// @ts-ignore
import { HealthyResponse } from '../model/healthyResponse';
// @ts-ignore
import { Player } from '../model/player';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class DefaultService {
  protected basePath = 'https://api.nerine.dev';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string | string[],
    @Optional() configuration: Configuration,
  ) {
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== 'string') {
      const firstBasePath = Array.isArray(basePath) ? basePath[0] : undefined;
      if (firstBasePath != undefined) {
        basePath = firstBasePath;
      }

      if (typeof basePath !== 'string') {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }

  // @ts-ignore
  private addToHttpParams(
    httpParams: HttpParams,
    value: any,
    key?: string,
  ): HttpParams {
    if (typeof value === 'object' && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }

  private addToHttpParamsRecursive(
    httpParams: HttpParams,
    value?: any,
    key?: string,
  ): HttpParams {
    if (value == null) {
      return httpParams;
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        (value as any[]).forEach(
          (elem) =>
            (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key)),
        );
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(
            key,
            (value as Date).toISOString().substring(0, 10),
          );
        } else {
          throw Error('key may not be null if value is Date');
        }
      } else {
        Object.keys(value).forEach(
          (k) =>
            (httpParams = this.addToHttpParamsRecursive(
              httpParams,
              value[k],
              key != null ? `${key}.${k}` : k,
            )),
        );
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error('key may not be null if value is not object or array');
    }
    return httpParams;
  }

  /**
   * Create Game
   * @param playerId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createGameGamePost(
    playerId: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<Game>;
  public createGameGamePost(
    playerId: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpResponse<Game>>;
  public createGameGamePost(
    playerId: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpEvent<Game>>;
  public createGameGamePost(
    playerId: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<any> {
    if (playerId === null || playerId === undefined) {
      throw new Error(
        'Required parameter playerId was null or undefined when calling createGameGamePost.',
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected,
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let localVarTransferCache: boolean | undefined =
      options && options.transferCache;
    if (localVarTransferCache === undefined) {
      localVarTransferCache = true;
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/game`;
    return this.httpClient.request<Game>(
      'post',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      },
    );
  }

  /**
   * Create Player
   * @param name
   * @param playerId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public createPlayerLoginGet(
    name?: string,
    playerId?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<Player>;
  public createPlayerLoginGet(
    name?: string,
    playerId?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpResponse<Player>>;
  public createPlayerLoginGet(
    name?: string,
    playerId?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpEvent<Player>>;
  public createPlayerLoginGet(
    name?: string,
    playerId?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<any> {
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (name !== undefined && name !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>name,
        'name',
      );
    }
    if (playerId !== undefined && playerId !== null) {
      localVarQueryParameters = this.addToHttpParams(
        localVarQueryParameters,
        <any>playerId,
        'player_id',
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected,
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let localVarTransferCache: boolean | undefined =
      options && options.transferCache;
    if (localVarTransferCache === undefined) {
      localVarTransferCache = true;
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/login`;
    return this.httpClient.request<Player>(
      'get',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        params: localVarQueryParameters,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      },
    );
  }

  /**
   * Docs Redirect
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public docsRedirectGet(
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: undefined;
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<any>;
  public docsRedirectGet(
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: undefined;
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpResponse<any>>;
  public docsRedirectGet(
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: undefined;
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpEvent<any>>;
  public docsRedirectGet(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: undefined;
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected,
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let localVarTransferCache: boolean | undefined =
      options && options.transferCache;
    if (localVarTransferCache === undefined) {
      localVarTransferCache = true;
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/`;
    return this.httpClient.request<any>(
      'get',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      },
    );
  }

  /**
   * Get Game
   * @param gameId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getGameGameGameIdGet(
    gameId: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<Game>;
  public getGameGameGameIdGet(
    gameId: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpResponse<Game>>;
  public getGameGameGameIdGet(
    gameId: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpEvent<Game>>;
  public getGameGameGameIdGet(
    gameId: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<any> {
    if (gameId === null || gameId === undefined) {
      throw new Error(
        'Required parameter gameId was null or undefined when calling getGameGameGameIdGet.',
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected,
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let localVarTransferCache: boolean | undefined =
      options && options.transferCache;
    if (localVarTransferCache === undefined) {
      localVarTransferCache = true;
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/game/${this.configuration.encodeParam({ name: 'gameId', value: gameId, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: 'uuid' })}`;
    return this.httpClient.request<Game>(
      'get',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      },
    );
  }

  /**
   * Get Games
   * @param playerId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getGamesGamesGet(
    playerId: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<Array<Game>>;
  public getGamesGamesGet(
    playerId: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpResponse<Array<Game>>>;
  public getGamesGamesGet(
    playerId: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpEvent<Array<Game>>>;
  public getGamesGamesGet(
    playerId: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<any> {
    if (playerId === null || playerId === undefined) {
      throw new Error(
        'Required parameter playerId was null or undefined when calling getGamesGamesGet.',
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected,
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let localVarTransferCache: boolean | undefined =
      options && options.transferCache;
    if (localVarTransferCache === undefined) {
      localVarTransferCache = true;
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/games`;
    return this.httpClient.request<Array<Game>>(
      'get',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      },
    );
  }

  /**
   * Get Player
   * @param queryPlayerId
   * @param playerId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getPlayerPlayerQueryPlayerIdGet(
    queryPlayerId: string,
    playerId: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<Player>;
  public getPlayerPlayerQueryPlayerIdGet(
    queryPlayerId: string,
    playerId: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpResponse<Player>>;
  public getPlayerPlayerQueryPlayerIdGet(
    queryPlayerId: string,
    playerId: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpEvent<Player>>;
  public getPlayerPlayerQueryPlayerIdGet(
    queryPlayerId: string,
    playerId: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<any> {
    if (queryPlayerId === null || queryPlayerId === undefined) {
      throw new Error(
        'Required parameter queryPlayerId was null or undefined when calling getPlayerPlayerQueryPlayerIdGet.',
      );
    }
    if (playerId === null || playerId === undefined) {
      throw new Error(
        'Required parameter playerId was null or undefined when calling getPlayerPlayerQueryPlayerIdGet.',
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected,
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let localVarTransferCache: boolean | undefined =
      options && options.transferCache;
    if (localVarTransferCache === undefined) {
      localVarTransferCache = true;
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/player/${this.configuration.encodeParam({ name: 'queryPlayerId', value: queryPlayerId, in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: 'uuid' })}`;
    return this.httpClient.request<Player>(
      'get',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      },
    );
  }

  /**
   * Root
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public rootHealtcheckGet(
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HealthyResponse>;
  public rootHealtcheckGet(
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpResponse<HealthyResponse>>;
  public rootHealtcheckGet(
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<HttpEvent<HealthyResponse>>;
  public rootHealtcheckGet(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: 'application/json';
      context?: HttpContext;
      transferCache?: boolean;
    },
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected,
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let localVarTransferCache: boolean | undefined =
      options && options.transferCache;
    if (localVarTransferCache === undefined) {
      localVarTransferCache = true;
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    let localVarPath = `/healtcheck`;
    return this.httpClient.request<HealthyResponse>(
      'get',
      `${this.configuration.basePath}${localVarPath}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        transferCache: localVarTransferCache,
        reportProgress: reportProgress,
      },
    );
  }
}
