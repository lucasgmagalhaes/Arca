import { DoacaoInternaComponent } from './../doacao-interna/doacao-interna.component';
import { Doacao } from './../models/doacao.model';
import { DoacaoService } from './../services/doacao.service';
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from '@angular/material';
import { SessionService } from '../services/session.service';



@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.scss']
})
export class DoacaoComponent implements OnInit {

  constructor(
    private doacaoService: DoacaoService,
    private notificacao: MatSnackBar,
    private userLogado: SessionService

  ) { }

  ngOnInit() {
  }

  
  async doar(valor) {
    var doacao: Doacao =
    {
      valor: valor,
      associadoId: this.userLogado.getUserId()
    }
    try {
      await this.doacaoService.cadastrar(doacao);
      this.notificacao.open("Doação realizada com sucesso", "Ok",
      {
        duration: 3000
      });

      setTimeout(function() {
        document.location.reload(true);
      }, 2000); 
    
      
    } catch (error) {
      console.log(error);
    }
  
  }

}
