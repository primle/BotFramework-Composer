/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
import { __assign } from "tslib";
import * as msRest from "@azure/ms-rest-js";
import * as Mappers from "../models/componentsMappers";
import * as Parameters from "../models/parameters";
/** Class representing a Components. */
var Components = /** @class */ (function () {
    /**
     * Create a Components.
     * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
     */
    function Components(client) {
        this.client = client;
    }
    Components.prototype.list = function (options, callback) {
        return this.client.sendOperationRequest({
            options: options
        }, listOperationSpec, callback);
    };
    Components.prototype.listByResourceGroup = function (resourceGroupName, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            options: options
        }, listByResourceGroupOperationSpec, callback);
    };
    Components.prototype.deleteMethod = function (resourceGroupName, resourceName, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            options: options
        }, deleteMethodOperationSpec, callback);
    };
    Components.prototype.get = function (resourceGroupName, resourceName, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            options: options
        }, getOperationSpec, callback);
    };
    Components.prototype.createOrUpdate = function (resourceGroupName, resourceName, insightProperties, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            insightProperties: insightProperties,
            options: options
        }, createOrUpdateOperationSpec, callback);
    };
    Components.prototype.updateTags = function (resourceGroupName, resourceName, componentTags, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            componentTags: componentTags,
            options: options
        }, updateTagsOperationSpec, callback);
    };
    Components.prototype.purge = function (resourceGroupName, resourceName, body, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            body: body,
            options: options
        }, purgeOperationSpec, callback);
    };
    Components.prototype.getPurgeStatus = function (resourceGroupName, resourceName, purgeId, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            purgeId: purgeId,
            options: options
        }, getPurgeStatusOperationSpec, callback);
    };
    Components.prototype.listNext = function (nextPageLink, options, callback) {
        return this.client.sendOperationRequest({
            nextPageLink: nextPageLink,
            options: options
        }, listNextOperationSpec, callback);
    };
    Components.prototype.listByResourceGroupNext = function (nextPageLink, options, callback) {
        return this.client.sendOperationRequest({
            nextPageLink: nextPageLink,
            options: options
        }, listByResourceGroupNextOperationSpec, callback);
    };
    return Components;
}());
export { Components };
// Operation Specifications
var serializer = new msRest.Serializer(Mappers);
var listOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/providers/Microsoft.Insights/components",
    urlParameters: [
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ApplicationInsightsComponentListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var listByResourceGroupOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ApplicationInsightsComponentListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var deleteMethodOperationSpec = {
    httpMethod: "DELETE",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId,
        Parameters.resourceName
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {},
        204: {},
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var getOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId,
        Parameters.resourceName
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ApplicationInsightsComponent
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var createOrUpdateOperationSpec = {
    httpMethod: "PUT",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId,
        Parameters.resourceName
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    requestBody: {
        parameterPath: "insightProperties",
        mapper: __assign(__assign({}, Mappers.ApplicationInsightsComponent), { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.ApplicationInsightsComponent
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var updateTagsOperationSpec = {
    httpMethod: "PATCH",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId,
        Parameters.resourceName
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    requestBody: {
        parameterPath: "componentTags",
        mapper: __assign(__assign({}, Mappers.TagsResource), { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.ApplicationInsightsComponent
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var purgeOperationSpec = {
    httpMethod: "POST",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/purge",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId,
        Parameters.resourceName
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    requestBody: {
        parameterPath: "body",
        mapper: __assign(__assign({}, Mappers.ComponentPurgeBody), { required: true })
    },
    responses: {
        202: {
            bodyMapper: Mappers.ComponentPurgeResponse
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var getPurgeStatusOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/operations/{purgeId}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId,
        Parameters.resourceName,
        Parameters.purgeId
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ComponentPurgeStatusResponse
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var listNextOperationSpec = {
    httpMethod: "GET",
    baseUrl: "https://management.azure.com",
    path: "{nextLink}",
    urlParameters: [
        Parameters.nextPageLink
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ApplicationInsightsComponentListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var listByResourceGroupNextOperationSpec = {
    httpMethod: "GET",
    baseUrl: "https://management.azure.com",
    path: "{nextLink}",
    urlParameters: [
        Parameters.nextPageLink
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ApplicationInsightsComponentListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
//# sourceMappingURL=components.js.map