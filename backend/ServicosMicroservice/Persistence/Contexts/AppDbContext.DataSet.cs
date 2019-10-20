using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Contexts
{
    public partial class AppDbContext
    {
        public virtual DbSet<Animal> Animal { get; set; }
        public virtual DbSet<Doacao> Doacao { get; set; }
    }
}
