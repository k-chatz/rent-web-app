import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchResultsResolver} from './search-results-resolver';
import {SearchResultsComponent} from './search-results.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
    resolve: {
      data: SearchResultsResolver
    },
    runGuardsAndResolvers: 'always',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultsRoutingModule {
}
