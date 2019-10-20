using Enum;

namespace Transport
{
    public class TFuncionario : TUsuario
    {
        /// <summary>
        /// Corresponde ao setor que o funcionário trabalha
        /// </summary>

        public Setor Setor { get; set; }
        public double Salario { get; set; }
        public bool IsAdministrador { get; set; }

    }
}
