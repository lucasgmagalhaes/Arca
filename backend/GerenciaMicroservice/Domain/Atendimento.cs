using System;

namespace Domain
{
    public class Atendimento : IEntity
    {
        public virtual long Id { get; set; }
        public virtual DateTime DataAtendimento { get; set; }
        public virtual string Raca { get; set; }
        public virtual string TipoAtendimento { get; set; }
        public virtual string Descricao { get; set; }
        public virtual long FuncionarioId { get; set; }
    }
}
