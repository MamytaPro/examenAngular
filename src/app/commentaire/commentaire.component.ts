import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from '../models/Commentaire.models';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {
  @Input() commentaire!:Commentaire;
  constructor() { }

  ngOnInit(): void {
  }

}
