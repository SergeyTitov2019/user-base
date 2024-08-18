import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  classView = 'user'
  infoText = 'Info block'

  onChangeView(link: string){
    switch (link){
      case 'user':
        this.classView = 'user'
        this.infoText = 'User info'
        break
      case 'directives':
        this.classView = 'directives'
        this.infoText = 'Directives info'
        break
      case 'todo':
        this.classView = 'todo'
        this.infoText = 'User info'
        break
      default:
        this.classView = 'Try your block '
    }
  }


}
