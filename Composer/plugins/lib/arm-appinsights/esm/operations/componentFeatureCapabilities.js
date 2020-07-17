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
import * as Mappers from "../models/componentFeatureCapabilitiesMappers";
import * as Parameters from "../models/parameters";
/** Class representing a ComponentFeatureCapabilities. */
var ComponentFeatureCapabilities = /** @class */ (function () {
    /**
     * Create a ComponentFeatureCapabilities.
     * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
     */
    function ComponentFeatureCapabilities(client) {
        this.client = client;
    }
    ComponentFeatureCapabilities.prototype.get = function (resourceGroupName, resourceName, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            options: options
        }, getOperationSpec, callback);
    };
    return ComponentFeatureCapabilities;
}());
export { ComponentFeatureCapabilities };
// Operation Specifications
var serializer = new msRest.Serializer(Mappers);
var getOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/featurecapabilities",
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
            bodyMapper: Mappers.ApplicationInsightsComponentFeatureCapabilities
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
//# sourceMappingURL=componentFeatureCapabilities.js.map