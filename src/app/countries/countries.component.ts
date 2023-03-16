import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {

  countries?: Country[];
  
  excludeCountry: string = 'Republic of Kosovo'; // izbacena drzava

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(data => {

      // Filter za izbacivanje drzave
      this.countries = data.filter(country => country.name !== this.excludeCountry);

    });
  }

  onCountrySelect(flag: string) {
    window.open(flag, '_blank');
  }

  

}
