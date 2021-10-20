import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDatePipe'
})
export class DatePipePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

	transform(value: string | number | Date, format = 'medium'): any {
		return this.datePipe.transform(value, format);
	}
}
