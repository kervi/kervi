import { Pipe, PipeTransform } from '@angular/core';
import { NGXKerviService } from "../ngx-kervi.service"
@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(private kerviService: NGXKerviService) {

  }
  transform(value: string, args?: any): any {
    return this.kerviService.text(value, value);
  }
}