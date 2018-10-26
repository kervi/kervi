import { Pipe, PipeTransform } from '@angular/core';
import { KerviService } from "../kervi.service"
@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(private kerviService: KerviService) {

  }
  transform(value: string, args?: any): any {
    return this.kerviService.text(value, value);
  }
}