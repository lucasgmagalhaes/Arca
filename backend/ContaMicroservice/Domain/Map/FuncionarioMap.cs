using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Domain.Map
{
    public class FuncionarioMap : IEntityTypeConfiguration<Funcionario>
    {
        public void Configure(EntityTypeBuilder<Funcionario> builder)
        {
            builder.Property(e => e)
                .HasField("ID")
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

            builder.Property(e => e.Salario)
                .IsRequired();

            builder.Property(e => e.IsAdministrador)
                .IsRequired();

            builder.Property(e => e.Setor)
                .IsRequired();
        }
    }
}
