/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CoveoCommerce {
        "responseId": string;
    }
    interface CoveoSearch {
        "searchId": string;
    }
}
declare global {
    interface HTMLCoveoCommerceElement extends Components.CoveoCommerce, HTMLStencilElement {
    }
    var HTMLCoveoCommerceElement: {
        prototype: HTMLCoveoCommerceElement;
        new (): HTMLCoveoCommerceElement;
    };
    interface HTMLCoveoSearchElement extends Components.CoveoSearch, HTMLStencilElement {
    }
    var HTMLCoveoSearchElement: {
        prototype: HTMLCoveoSearchElement;
        new (): HTMLCoveoSearchElement;
    };
    interface HTMLElementTagNameMap {
        "coveo-commerce": HTMLCoveoCommerceElement;
        "coveo-search": HTMLCoveoSearchElement;
    }
}
declare namespace LocalJSX {
    interface CoveoCommerce {
        "responseId"?: string;
    }
    interface CoveoSearch {
        "searchId"?: string;
    }
    interface IntrinsicElements {
        "coveo-commerce": CoveoCommerce;
        "coveo-search": CoveoSearch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "coveo-commerce": LocalJSX.CoveoCommerce & JSXBase.HTMLAttributes<HTMLCoveoCommerceElement>;
            "coveo-search": LocalJSX.CoveoSearch & JSXBase.HTMLAttributes<HTMLCoveoSearchElement>;
        }
    }
}
