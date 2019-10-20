using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Domain.Map
{
    public class AssociadoMap : IEntityTypeConfiguration<Associado>
    {
        public void Configure(EntityTypeBuilder<Associado> builder)
        {
            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd();

            builder.Property(e => e.Cpf)
                .IsRequired();

            builder.Property(e => e.Nome)
                .IsRequired();

            builder.Property(e => e.DataNascimento)
                .HasColumnName("DT_NASC")
                .IsRequired();

            builder.Property(e => e.Email)
                .IsRequired();

            builder.Property(e => e.Senha)
                .IsRequired();
        }
    }
}
