using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Domain.Map
{
    internal class DoacaoMap : IEntityTypeConfiguration<Doacao>
    {
        public void Configure(EntityTypeBuilder<Doacao> builder)
        {
            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd();

            builder.Property(e => e.AssociadoId)
                .IsRequired();

            builder.Property(e => e.Valor)
               .IsRequired();
        }
    }
}
