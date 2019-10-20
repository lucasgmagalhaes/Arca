using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Contexts
{
    public partial class AppDbContext
    {
        public virtual DbSet<Atendimento> Atendimento { get; set; }
        public virtual DbSet<Parceiro> Parceiro { get; set; }
    }
}
