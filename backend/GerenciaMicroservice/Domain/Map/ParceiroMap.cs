using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Domain.Map
{
    public class ParceiroMap : IEntityTypeConfiguration<Parceiro>
    {
        public void Configure(EntityTypeBuilder<Parceiro> builder)
        {
            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd();

            builder.Property(e => e.Nome)
                .IsRequired();

            builder.Property(e => e.Ramo)
                .IsRequired();

            builder.Property(e => e.Cnpj)
                .IsRequired();
        }
    }
}
