/* tslint:disable */
/* eslint-disable */
/**
 * Beat Link Trigger Overlay API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.6.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime'
import type { Data } from '../models'
import { DataFromJSON, DataToJSON } from '../models'

/**
 * DefaultApi - interface
 *
 * @export
 * @interface DefaultApiInterface
 */
export interface DefaultApiInterface {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApiInterface
   */
  paramsJsonGetRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Data>>

  /**
   */
  paramsJsonGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Data>
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI implements DefaultApiInterface {
  /**
   */
  async paramsJsonGetRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Data>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/params.json`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => DataFromJSON(jsonValue))
  }

  /**
   */
  async paramsJsonGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Data> {
    const response = await this.paramsJsonGetRaw(initOverrides)
    return await response.value()
  }
}
