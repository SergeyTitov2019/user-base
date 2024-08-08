import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserComponent } from './user/user.component'
import { DirectivesTestComponent } from './derectives-test/directives-test.component'
import { UserLayoutComponent } from './user/user-layout/user-layout.component'

const routes: Routes = [
  { path: 'user', component: UserLayoutComponent },
  { path: 'directives', component: DirectivesTestComponent },
  { path: 'test', component: DirectivesTestComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
