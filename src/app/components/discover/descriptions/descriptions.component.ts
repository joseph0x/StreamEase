import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonServiceService } from 'src/app/services/json-service.service';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.css'],
})
export class DescriptionsComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private jsonService: JsonServiceService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id'];
    this.jsonService.getMovies().subscribe((res: any) => {
      this.movie = res[movieId];
    });
  }
}
