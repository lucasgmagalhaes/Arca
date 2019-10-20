using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Contexts
{
    public partial class AppDbContext
    {
        public virtual DbSet<Funcionario> Funcionario { get; set; }
        public virtual DbSet<Associado> Associado { get; set; }
    }
}
