using Domain;
using Persistence.Contexts;
using Persistence.Services;

namespace Persistence.ServicesImpl
{
    public class ParceiroService : CrudService<Parceiro>, IParceiroService
    {
        public ParceiroService(AppDbContext dbContext) : base(dbContext) { }
    }
}
