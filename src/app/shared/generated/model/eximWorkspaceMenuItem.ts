/**
 * onecx-workspace-bff
 * OneCx workspace Bff
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EximScope } from './eximScope';


export interface EximWorkspaceMenuItem { 
    key?: string;
    name?: string;
    description?: string;
    url?: string;
    workspaceName?: string;
    applicationId?: string;
    disabled?: boolean;
    position?: number;
    permission?: string;
    badge?: string;
    scope?: EximScope;
    workspaceExit?: boolean;
    i18n?: { [key: string]: string; };
    children?: Array<EximWorkspaceMenuItem>;
}


