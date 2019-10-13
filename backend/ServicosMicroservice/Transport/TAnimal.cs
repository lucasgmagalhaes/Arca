using Enum;

namespace Transport
{
    public class TAnimal
    {
        public long Id { get; set; }
        public string Especie { get; set; }
        public string Raca { get; set; }
        public string Nome { get; set; }
        public int Idade { get; set; }
        public MedicaoIdade MedicaoIdade { get; set; }
        public string Descricao { get; set; }
        public bool IsDisponivelParaAdocao { get; set; }
        public bool IsMorto { get; set; }
        public long AdotanteId { get; set; }
    }
}
