import { Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
  SafeScript,
  SafeStyle,
  SafeUrl,
} from '@angular/platform-browser';

@Pipe({
  name: 'sanitizer',
  standalone: true,
})
export class SanitizerPipe implements PipeTransform {
  constructor(protected sanitizerService: DomSanitizer) {}

  public transform(
    value: any,
    type: string
  ): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html':
        return this.sanitizerService.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitizerService.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitizerService.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizerService.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitizerService.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}
