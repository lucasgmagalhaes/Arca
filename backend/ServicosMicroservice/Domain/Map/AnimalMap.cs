using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Domain.Map
{
    public class AnimalMap : IEntityTypeConfiguration<Animal>
    {
        public void Configure(EntityTypeBuilder<Animal> builder)
        {
            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd();

            builder.Property(e => e.Especie)
                .IsRequired();

            builder.Property(e => e.Nome)
                .IsRequired();

            builder.Property(e => e.Raca)
                .IsRequired();

            builder.Property(e => e.Idade)
                .IsRequired();

            builder.Property(e => e.MedicaoIdade)
                .IsRequired();

            builder.Property(e => e.Descricao)
                .IsRequired();

            builder.Property(e => e.IsDisponivelParaAdocao)
                .IsRequired();

            builder.Property(e => e.IsMorto)
                .IsRequired();

            builder.Property(e => e.AdotanteId)
                .IsRequired();
        }
    }
}
