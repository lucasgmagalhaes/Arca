namespace Domain
{
    public class Parceiro : IEntity
    {
        public virtual long Id { get; set; }
        public virtual string Nome { get; set; }
        public virtual string Cnpj { get; set; }
        public virtual string Ramo { get; set; }
    }
}
