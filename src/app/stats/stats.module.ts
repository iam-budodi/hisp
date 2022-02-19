import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StatsComponent } from './stats.component';

@NgModule({
  declarations: [StatsComponent],
  imports: [
    RouterModule.forChild([{ path: 'stats', component: StatsComponent }]),
  ],
})
export class StatsModule {}
