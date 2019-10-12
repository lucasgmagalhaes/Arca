using Enum;

namespace Domain
{
    public class Funcionario : Usuario
    {
        public virtual Setor Setor { get; set; }
        public virtual double Salario { get; set; }
        public virtual bool IsAdministrador { get; set; }
    }
}
