import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolToText'
})
export class BoolToTextPipe implements PipeTransform {

  transform(value: unknown): unknown {
    return value ? "A fond" : "Hélas";
  }

}
