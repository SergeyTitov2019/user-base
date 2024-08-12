import { Component, computed, inject } from '@angular/core'
import { AuthService } from './auth/auth.service'

@Component({
  selector: 'app-directives-test',
  templateUrl: './directives-test.component.html',
  styleUrl: './directives-test.component.css'
})
export class DirectivesTestComponent {
  private authService = inject(AuthService)
  isAdmin = computed(() => this.authService.activePermission() === 'admin')

}
