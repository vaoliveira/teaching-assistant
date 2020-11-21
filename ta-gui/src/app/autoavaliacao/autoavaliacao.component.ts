import { Component, OnInit } from '@angular/core';

import { Aluno } from '../../../../common/aluno';
import { Matricula } from '../../../../common/matricula';
import { Avaliacao } from '../../../../ta-server/avaliacao';
import { Turmas } from '../../../../ta-server/turmas';
import { Turma } from '../../../../common/turma';
import { AutoavaliacaoService } from './autoavaliacao.service';

@Component({
  selector: 'app-autoavaliacao',
  templateUrl: './autoavaliacao.component.html',
  styleUrls: ['./autoavaliacao.component.css']
})
export class AutoavaliacaoComponent implements OnInit {
  alunos: Aluno[] = [];
  avaliacoes: Avaliacao[] = [];
  auto_avaliacoes: Avaliacao[] = [];
  matriculas: Matricula[];
  matricula: Matricula;
  turma: Turma = null;
  cpf: string;
  descricaoTurma: string;
  notificar: boolean = false;
  show_matriculas: boolean = false;

  constructor(private aaService: AutoavaliacaoService) { }

  ngOnInit() {

  }

  cadastrarAutoAvaliacao(matricula: Matricula, avaliacoes: Avaliacao[]): void { }
	notificarAutoAvaliacao(cpf: string, descricaoTurma: string): void {}

  setNotificar(): void {
    this.notificar = true;
  }

  showMatriculas(descricaoTurma: string): void {
    this.show_matriculas = true;
    this.aaService.getTurmas(descricaoTurma).subscribe(as => {
      this.turma = new Turma();
      this.turma.descricao = as.descricao;
      this.turma.metas = as.metas;
      this.matriculas = as.matriculas;
    }, msg => {alert(msg.message);});
  }
}
