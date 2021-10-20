import { DatePipePipe } from './date-pipe.pipe';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { inject, TestBed } from '@angular/core/testing';
import localeEn from '@angular/common/locales/en'

registerLocaleData(localeEn, 'en-US');

describe('DatePipePipe', () => {
  let pipe: DatePipePipe;

	beforeEach(() => {
		TestBed
		.configureTestingModule({
			imports: [
				CommonModule
			],
			providers: [
				DatePipe
			],
		});
	});

	it('should create', inject([], (datePipe: DatePipe) => {
		pipe = new DatePipePipe(datePipe);
		expect(pipe).toBeTruthy();
	}));

	it('should transform the value', inject([], (datePipe: DatePipe) => {
		pipe = new DatePipePipe(new DatePipe("en"));
		expect(pipe.transform('2012-12-10T00:00:00')).toBe('Dec 10, 2012, 12:00:00 AM');
	}));
});
