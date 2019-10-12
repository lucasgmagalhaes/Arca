using Domain;
using Persistence.Contexts;
using Persistence.Services;

namespace Persistence.ServicesImpl
{
    public class DoacaoService : CrudService<Doacao>, IDoacaoService
    {
        public DoacaoService(AppDbContext dbContext) : base(dbContext) { }
    }
}
