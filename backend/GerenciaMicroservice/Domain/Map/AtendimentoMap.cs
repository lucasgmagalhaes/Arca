using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Map
{
    public class AtendimentoMap : IEntityTypeConfiguration<Atendimento>
    {
        public void Configure(EntityTypeBuilder<Atendimento> builder)
        {
            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd();

            builder.Property(e => e.DataAtendimento)
                .IsRequired();

            builder.Property(e => e.Raca)
                .IsRequired();

            builder.Property(e => e.TipoAtendimento)
                .IsRequired();

            builder.Property(e => e.Descricao)
                .IsRequired();

            builder.Property(e => e.FuncionarioId);
        }
    }
}
