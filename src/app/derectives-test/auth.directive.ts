import { Directive, effect, EmbeddedViewRef, inject, input, TemplateRef, ViewContainerRef } from '@angular/core'
import { Permission } from './auth/auth.model'
import { AuthService } from './auth/auth.service'
import { HeaderComponent } from '../header/header.component'


@Directive({
  selector: '[appAuth]'
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'})
  private authService = inject(AuthService)
  private templateRef = inject(TemplateRef)
  private viewContainerRef = inject(ViewContainerRef)



  constructor() {
    effect(() => {
      if(this.authService.activePermission() === this.userType()){
        this.viewContainerRef.createEmbeddedView(this.templateRef)
      } else {
        this.viewContainerRef.clear()
      }
    })
  }

}
