import { buildCommerceEngine, getSampleCommerceEngineConfiguration, buildSearch, Search } from '@coveo/headless/commerce';
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'coveo-commerce',
  styleUrl: 'coveo-commerce.css',
  shadow: true,
})
export class CoveoCommerce {
  @Prop() responseId: string = '';
  private controller: Search;
  
  render() {
    return <p>Last Response Id: {this.responseId}</p>;
  }

  connectedCallback() {
    const engine = buildCommerceEngine({ configuration: getSampleCommerceEngineConfiguration() });
    this.controller = buildSearch(engine);
    this.controller.subscribe(() => {
      this.responseId = this.controller.state.responseId;
    });
    this.controller.executeFirstSearch();
  }
}
