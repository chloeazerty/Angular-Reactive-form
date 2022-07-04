import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  searchForm = this.fb.group({
   movieId: [''],
   movieTitle: [''],
   boxType: this.fb.group({
      movie: [''],
      serie: [''],
      episode: [''],
    }),  
   releaseDate: [''],
    card: this.fb.group({
      complete: [''],
      short: [''],
    }),
});
constructor(private fb: FormBuilder) {}

onSubmit() {
  console.log(this.searchForm.value);
}

  ngOnInit(): void {
  }
}
