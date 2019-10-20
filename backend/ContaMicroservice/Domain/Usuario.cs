using Enum;
using System;

namespace Domain
{
    public class Usuario : IEntity
    {
        public virtual long Id { get; set; }
        public virtual string Nome { get; set; }
        public virtual DateTime DataNascimento { get; set; }
        public virtual string Cpf { get; set; }
        public virtual string Email { get; set; }
        public virtual string Senha { get; set; }
    }
}
