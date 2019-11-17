export interface Atendimento {
    id: number;
    dataAtendimento: Date;
    raca: string
    tipoAtendimento: string;
    descricao: string;
    funcionarioId:number;
}
