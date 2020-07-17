/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/analyticsItemsMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a AnalyticsItems. */
export class AnalyticsItems {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a AnalyticsItems.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of Analytics Items defined within an Application Insights component.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is
   * shared between all users with access to the Application Insights component. Possible values
   * include: 'analyticsItems', 'myanalyticsItems'
   * @param [options] The optional parameters
   * @returns Promise<Models.AnalyticsItemsListResponse>
   */
  list(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, options?: Models.AnalyticsItemsListOptionalParams): Promise<Models.AnalyticsItemsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is
   * shared between all users with access to the Application Insights component. Possible values
   * include: 'analyticsItems', 'myanalyticsItems'
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAnalyticsItem[]>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is
   * shared between all users with access to the Application Insights component. Possible values
   * include: 'analyticsItems', 'myanalyticsItems'
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, options: Models.AnalyticsItemsListOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAnalyticsItem[]>): void;
  list(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, options?: Models.AnalyticsItemsListOptionalParams | msRest.ServiceCallback<Models.ApplicationInsightsComponentAnalyticsItem[]>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentAnalyticsItem[]>): Promise<Models.AnalyticsItemsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        scopePath,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AnalyticsItemsListResponse>;
  }

  /**
   * Gets a specific Analytics Items defined within an Application Insights component.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is
   * shared between all users with access to the Application Insights component. Possible values
   * include: 'analyticsItems', 'myanalyticsItems'
   * @param [options] The optional parameters
   * @returns Promise<Models.AnalyticsItemsGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, options?: Models.AnalyticsItemsGetOptionalParams): Promise<Models.AnalyticsItemsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is
   * shared between all users with access to the Application Insights component. Possible values
   * include: 'analyticsItems', 'myanalyticsItems'
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAnalyticsItem>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is
   * shared between all users with access to the Application Insights component. Possible values
   * include: 'analyticsItems', 'myanalyticsItems'
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, options: Models.AnalyticsItemsGetOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAnalyticsItem>): void;
  get(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, options?: Models.AnalyticsItemsGetOptionalParams | msRest.ServiceCallback<Models.ApplicationInsightsComponentAnalyticsItem>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentAnalyticsItem>): Promise<Models.AnalyticsItemsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        scopePath,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AnalyticsItemsGetResponse>;
  }

  /**
   * Adds or Updates a specific Analytics Item within an Application Insights component.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is
   * shared between all users with access to the Application Insights component. Possible values
   * include: 'analyticsItems', 'myanalyticsItems'
   * @param itemProperties Properties that need to be specified to create a new item and add it to an
   * Application Insights component.
   * @param [options] The optional parameters
   * @returns Promise<Models.AnalyticsItemsPutResponse>
   */
  put(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, itemProperties: Models.ApplicationInsightsComponentAnalyticsItem, options?: Models.AnalyticsItemsPutOptionalParams): Promise<Models.AnalyticsItemsPutResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is
   * shared between all users with access to the Application Insights component. Possible values
   * include: 'analyticsItems', 'myanalyticsItems'
   * @param itemProperties Properties that need to be specified to create a new item and add it to an
   * Application Insights component.
   * @param callback The callback
   */
  put(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, itemProperties: Models.ApplicationInsightsComponentAnalyticsItem, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAnalyticsItem>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is
   * shared between all users with access to the Application Insights component. Possible values
   * include: 'analyticsItems', 'myanalyticsItems'
   * @param itemProperties Properties that need to be specified to create a new item and add it to an
   * Application Insights component.
   * @param options The optional parameters
   * @param callback The callback
   */
  put(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, itemProperties: Models.ApplicationInsightsComponentAnalyticsItem, options: Models.AnalyticsItemsPutOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentAnalyticsItem>): void;
  put(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, itemProperties: Models.ApplicationInsightsComponentAnalyticsItem, options?: Models.AnalyticsItemsPutOptionalParams | msRest.ServiceCallback<Models.ApplicationInsightsComponentAnalyticsItem>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentAnalyticsItem>): Promise<Models.AnalyticsItemsPutResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        scopePath,
        itemProperties,
        options
      },
      putOperationSpec,
      callback) as Promise<Models.AnalyticsItemsPutResponse>;
  }

  /**
   * Deletes a specific Analytics Items defined within an Application Insights component.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is
   * shared between all users with access to the Application Insights component. Possible values
   * include: 'analyticsItems', 'myanalyticsItems'
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, options?: Models.AnalyticsItemsDeleteMethodOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is
   * shared between all users with access to the Application Insights component. Possible values
   * include: 'analyticsItems', 'myanalyticsItems'
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param scopePath Enum indicating if this item definition is owned by a specific user or is
   * shared between all users with access to the Application Insights component. Possible values
   * include: 'analyticsItems', 'myanalyticsItems'
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, options: Models.AnalyticsItemsDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, resourceName: string, scopePath: Models.ItemScopePath, options?: Models.AnalyticsItemsDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        scopePath,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/{scopePath}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.scopePath
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.scope,
    Parameters.type,
    Parameters.includeContent
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplicationInsightsComponentAnalyticsItem"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/{scopePath}/item",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.scopePath
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.id,
    Parameters.name
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentAnalyticsItem
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const putOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/{scopePath}/item",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.scopePath
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.overrideItem
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "itemProperties",
    mapper: {
      ...Mappers.ApplicationInsightsComponentAnalyticsItem,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentAnalyticsItem
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/{scopePath}/item",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.scopePath
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.id,
    Parameters.name
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
