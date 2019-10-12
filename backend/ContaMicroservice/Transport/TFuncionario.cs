using Enum;

namespace Transport
{
    public class TFuncionario : TUsuario
    {
        public Setor Setor { get; set; }
        public double Salario { get; set; }
        public bool IsAdministrador { get; set; }

    }
}
