import { Component, OnInit } from '@angular/core';
import { Publication } from '../models/Publication.models';
import { Commentaire } from '../models/Commentaire.models';

@Component({
  selector: 'app-acceuil-component',
  templateUrl: './acceuil-component.component.html',
  styleUrls: ['./acceuil-component.component.scss']
})
export class AcceuilComponentComponent implements OnInit {
  pubs!: Publication[]
  com!: Commentaire[]
  constructor() { }

  ngOnInit(): void {
    this.com=[
      new Commentaire("Mamy",0,"Yagui bakh"),
      new Commentaire("Binoush",0,"Belliiiii"),
      new Commentaire("Kinoush",0,"Zonzehhhh"),
      new Commentaire("Betty",0,"Lonnnneee"),
      new Commentaire("Betty",0,"Youpi"),
      new Commentaire("Betty",0,"Yagui nice") ];
    this.pubs=[
    new Publication("Mamyta","Ma photo",new Date(),"Belle","Fatick",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Fatou","Ma photo",new Date(),"Belle","Touba",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Anrchi","Ma photo",new Date(),"Belle","Dakar",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Lissa","Ma photo",new Date(),"Belle","Kédougou",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Abdou","Ma photo",new Date(),"Belle","Matam",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Mame Diarra","Ma photo",new Date(),"Belle","Podor",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Bintou","Ma photo",new Date(),"Belle","Mbacké",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Khady","Ma photo",new Date(),"Belle","Kaffrine",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Astou","Ma photo",new Date(),"Belle","Thies",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Awa","Ma photo",new Date(),"Belle","Diourbel",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Fily","Ma photo",new Date(),"Belle","Fatick",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Mohamed","Ma photo",new Date(),"Belle","Touba",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Abdallah","Ma photo",new Date(),"Belle","Dakar",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Ibou","Ma photo",new Date(),"Belle","Kédougou",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Yoro","Ma photo",new Date(),"Belle","Matam",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Cheikh","Ma photo",new Date(),"Belle","Podor",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Modou","Ma photo",new Date(),"Belle","Mbacké",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Idy","Ma photo",new Date(),"Belle","Kaffrine",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Satou","Ma photo",new Date(),"Belle","Thies",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg"),
    new Publication("Siny","Ma photo",new Date(),"Belle","Diourbel",0,this.com,"https://img-4.linternaute.com/JuTHPe2EFvGYTo06x4UJCbUrA7Q=/660x366/smart/0fde0dde0bbb4404be0f44dec1b6ee30/ccmcms-linternaute/28899994.jpg")
    ]
  }

}
