import { Directive, ElementRef, inject, TemplateRef } from '@angular/core'

@Directive({
  selector: '[appLog]',
  host: {
    '(click)': 'onLog()'
  }
})
export class LogDirective {
  // private templateRef = inject(TemplateRef)
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)


  onLog() {
    console.log('templateRef', this.hostElementRef)
    console.log('templateRef', this.hostElementRef.nativeElement)
  }
}
