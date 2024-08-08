import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserComponent } from './user/user.component'
import { DerectivesTestComponent } from './derectives-test/derectives-test.component'
import { UserLayoutComponent } from './user/user-layout/user-layout.component'

const routes: Routes = [
  { path: 'user', component: UserLayoutComponent },
  { path: 'directives', component: DerectivesTestComponent },
  { path: 'test', component: DerectivesTestComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
