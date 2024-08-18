import { Directive, ElementRef, inject, input, Input } from '@angular/core'

@Directive({
  selector: '[appSaveLink]',
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SaveLinkDirective {
  @Input( {required: false, alias: 'appSaveLink'}) queryParam?: string = 'my-app'
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

  constructor() {
    // console.log(this.hostElementRef.nativeElement)
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave?')
    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam
      return
    }
    event.preventDefault()
  }

}
