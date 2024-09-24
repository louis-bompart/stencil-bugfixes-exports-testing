import { SearchEngine, buildSearchEngine, getSampleSearchEngineConfiguration } from '@coveo/headless';
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'coveo-search',
  styleUrl: 'coveo-search.css',
  shadow: true,
})
export class CoveoSearch {
  @Prop() searchId: string = '';
  private engine: SearchEngine;
  render() {
    return <p>Last Search Id: {this.searchId}</p>;
  }

  connectedCallback() {
    this.engine = buildSearchEngine({ configuration: getSampleSearchEngineConfiguration() });
    this.engine.subscribe(() => {
      this.searchId = this.engine.state.search.response.searchUid;
    });
    this.engine.executeFirstSearch();
  }
}
