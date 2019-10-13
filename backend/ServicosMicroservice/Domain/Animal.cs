using Enum;

namespace Domain
{
    public class Animal : IEntity
    {
        public virtual long Id { get; set; }
        public virtual string Especie { get; set; }
        public virtual string Raca { get; set; }
        public virtual string Nome { get; set; }
        public virtual int Idade { get; set; }
        public virtual MedicaoIdade MedicaoIdade { get; set; }
        public virtual string Descricao { get; set; }
        public virtual bool IsDisponivelParaAdocao { get; set; }
        public virtual bool IsMorto { get; set; }
        public virtual long? AdotanteId { get; set; }
    }
}
